import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  Lock,
  Unlock,
  UploadCloud,
  Eye,
  EyeOff,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Download,
  RefreshCw,
  FileText,
  X,
  KeyRound,
  Shield,
  Loader2,
} from 'lucide-react';
import { ui, defaultLang, type SupportedLocale } from '../i18n/ui';

interface Props {
  lang?: SupportedLocale;
}

type Mode = 'encrypt' | 'decrypt';
type StatusState =
  | 'idle'
  | 'reading'
  | 'deriving'
  | 'processing'
  | 'success'
  | 'error';

export default function CryptoWorkspace({ lang = defaultLang }: Props) {
  const t = ui[lang] || ui[defaultLang];

  // State
  const [mode, setMode] = useState<Mode>('encrypt');
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState<StatusState>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [downloadFilename, setDownloadFilename] = useState('');
  const [processingTimeMs, setProcessingTimeMs] = useState<number | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Clean up object URLs on unmount or file change
  useEffect(() => {
    return () => {
      if (downloadUrl) {
        URL.revokeObjectURL(downloadUrl);
      }
    };
  }, [downloadUrl]);

  // Format file size
  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  };

  // Password strength calculation (0 to 4 score)
  const calculateStrength = (pwd: string): { score: number; label: string; color: string } => {
    if (!pwd) return { score: 0, label: t['workspace.password.strength.veryWeak'], color: 'bg-slate-300 dark:bg-slate-700' };

    let points = 0;
    if (pwd.length >= 8) points++;
    if (pwd.length >= 12) points++;
    if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) points++;
    if (/[0-9]/.test(pwd)) points++;
    if (/[^A-Za-z0-9]/.test(pwd)) points++;

    if (points <= 1) {
      return { score: 1, label: t['workspace.password.strength.veryWeak'], color: 'bg-red-500' };
    }
    if (points === 2) {
      return { score: 2, label: t['workspace.password.strength.weak'], color: 'bg-orange-500' };
    }
    if (points === 3) {
      return { score: 3, label: t['workspace.password.strength.fair'], color: 'bg-amber-500' };
    }
    if (points === 4) {
      return { score: 4, label: t['workspace.password.strength.strong'], color: 'bg-emerald-500' };
    }
    return { score: 5, label: t['workspace.password.strength.veryStrong'], color: 'bg-brand-teal' };
  };

  const strength = calculateStrength(password);

  // Drag and Drop handlers
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);
      setErrorMessage('');
      setStatus('idle');
      if (downloadUrl) {
        URL.revokeObjectURL(downloadUrl);
        setDownloadUrl(null);
      }
    }
  }, [downloadUrl]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setErrorMessage('');
      setStatus('idle');
      if (downloadUrl) {
        URL.revokeObjectURL(downloadUrl);
        setDownloadUrl(null);
      }
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
    setErrorMessage('');
    setStatus('idle');
    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
      setDownloadUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleReset = () => {
    setFile(null);
    setPassword('');
    setConfirmPassword('');
    setStatus('idle');
    setStatusMessage('');
    setErrorMessage('');
    setProcessingTimeMs(null);
    if (downloadUrl) {
      URL.revokeObjectURL(downloadUrl);
      setDownloadUrl(null);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerDownload = (url: string, filename: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // PBKDF2 Key Derivation helper (600,000 rounds with SHA-256)
  const deriveKey = async (pwd: string, salt: Uint8Array): Promise<CryptoKey> => {
    const encoder = new TextEncoder();
    const keyMaterial = await window.crypto.subtle.importKey(
      'raw',
      encoder.encode(pwd),
      'PBKDF2',
      false,
      ['deriveKey']
    );

    return await window.crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: salt,
        iterations: 600000,
        hash: 'SHA-256',
      },
      keyMaterial,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  };

  // Main Crypto Action Handler
  const handleProcess = async () => {
    setErrorMessage('');

    // Validation
    if (!file) {
      setErrorMessage(t['workspace.error.noFile']);
      return;
    }

    if (!password) {
      setErrorMessage(t['workspace.error.noPassword']);
      return;
    }

    if (mode === 'encrypt' && password !== confirmPassword) {
      setErrorMessage(t['workspace.error.passwordMismatch']);
      return;
    }

    const startTime = performance.now();

    try {
      if (mode === 'encrypt') {
        // ENCRYPTION FLOW
        setStatus('reading');
        setStatusMessage(t['workspace.status.reading']);
        await new Promise((resolve) => setTimeout(resolve, 50));

        const fileBuffer = await file.arrayBuffer();

        setStatus('deriving');
        setStatusMessage(t['workspace.status.deriving']);
        await new Promise((resolve) => setTimeout(resolve, 50));

        // 16-byte random salt
        const salt = window.crypto.getRandomValues(new Uint8Array(16));
        // 12-byte random IV
        const iv = window.crypto.getRandomValues(new Uint8Array(12));

        const key = await deriveKey(password, salt);

        setStatus('processing');
        setStatusMessage(t['workspace.status.encrypting']);
        await new Promise((resolve) => setTimeout(resolve, 50));

        const ciphertext = await window.crypto.subtle.encrypt(
          { name: 'AES-GCM', iv: iv },
          key,
          fileBuffer
        );

        // Prepend 16-byte salt and 12-byte IV to ciphertext
        const combined = new Uint8Array(16 + 12 + ciphertext.byteLength);
        combined.set(salt, 0);
        combined.set(iv, 16);
        combined.set(new Uint8Array(ciphertext), 28);

        const blob = new Blob([combined], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        const outName = file.name.endsWith('.enc') ? file.name : `${file.name}.enc`;

        setDownloadUrl(url);
        setDownloadFilename(outName);
        setStatus('success');
        setStatusMessage(t['workspace.status.successEncrypt']);
        setProcessingTimeMs(Math.round(performance.now() - startTime));

        // Trigger automatic download
        triggerDownload(url, outName);
      } else {
        // DECRYPTION FLOW
        setStatus('reading');
        setStatusMessage(t['workspace.status.reading']);
        await new Promise((resolve) => setTimeout(resolve, 50));

        const fileBuffer = await file.arrayBuffer();

        // Check minimum size: 16 (salt) + 12 (IV) + 16 (AES-GCM tag) = 44 bytes
        if (fileBuffer.byteLength < 44) {
          throw new Error(t['workspace.error.fileTooSmall']);
        }

        setStatus('deriving');
        setStatusMessage(t['workspace.status.deriving']);
        await new Promise((resolve) => setTimeout(resolve, 50));

        const salt = new Uint8Array(fileBuffer.slice(0, 16));
        const iv = new Uint8Array(fileBuffer.slice(16, 28));
        const ciphertext = fileBuffer.slice(28);

        const key = await deriveKey(password, salt);

        setStatus('processing');
        setStatusMessage(t['workspace.status.decrypting']);
        await new Promise((resolve) => setTimeout(resolve, 50));

        let decryptedBuffer: ArrayBuffer;
        try {
          decryptedBuffer = await window.crypto.subtle.decrypt(
            { name: 'AES-GCM', iv: iv },
            key,
            ciphertext
          );
        } catch (err) {
          throw new Error(t['workspace.error.decryptFailed']);
        }

        const blob = new Blob([decryptedBuffer]);
        const url = URL.createObjectURL(blob);

        let outName = file.name;
        if (outName.toLowerCase().endsWith('.enc')) {
          outName = outName.slice(0, -4);
        } else {
          outName = `decrypted_${outName}`;
        }

        setDownloadUrl(url);
        setDownloadFilename(outName);
        setStatus('success');
        setStatusMessage(t['workspace.status.successDecrypt']);
        setProcessingTimeMs(Math.round(performance.now() - startTime));

        // Trigger automatic download
        triggerDownload(url, outName);
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || t['workspace.error.generic']);
    }
  };

  const isBusy = status === 'reading' || status === 'deriving' || status === 'processing';

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Workspace Card Container */}
      <div className="bg-white dark:bg-brand-surfaceDark rounded-3xl border border-brand-sand dark:border-brand-teal/30 shadow-xl shadow-brand-dark/5 dark:shadow-none overflow-hidden transition-all">
        {/* Mode Switcher Tabs */}
        <div className="flex border-b border-brand-sand dark:border-brand-teal/30 bg-brand-sand/20 dark:bg-brand-darker/60 p-1.5">
          <button
            type="button"
            onClick={() => {
              setMode('encrypt');
              setErrorMessage('');
              setStatus('idle');
            }}
            disabled={isBusy}
            className={`flex-1 py-3 px-4 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all ${
              mode === 'encrypt'
                ? 'bg-brand-dark dark:bg-brand-teal text-white shadow-md'
                : 'text-brand-textMutedLight dark:text-brand-textMutedDark hover:text-brand-dark dark:hover:text-white'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>{t['workspace.tab.encrypt']}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setMode('decrypt');
              setErrorMessage('');
              setStatus('idle');
            }}
            disabled={isBusy}
            className={`flex-1 py-3 px-4 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all ${
              mode === 'decrypt'
                ? 'bg-brand-dark dark:bg-brand-teal text-white shadow-md'
                : 'text-brand-textMutedLight dark:text-brand-textMutedDark hover:text-brand-dark dark:hover:text-white'
            }`}
          >
            <Unlock className="w-4 h-4" />
            <span>{t['workspace.tab.decrypt']}</span>
          </button>
        </div>

        {/* Workspace Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* File Ingestion Dropzone */}
          <div>
            {!file ? (
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-8 sm:p-10 text-center cursor-pointer transition-all ${
                  isDragging
                    ? 'border-brand-gold bg-brand-gold/10 scale-[1.01]'
                    : 'border-brand-sand dark:border-brand-teal/40 hover:border-brand-teal dark:hover:border-brand-gold bg-brand-sand/15 dark:bg-brand-surfaceDark2/40'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileSelect}
                  className="hidden"
                  aria-label={t['workspace.dropzone.title']}
                />
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-brand-sand/50 dark:bg-brand-surfaceDark2 flex items-center justify-center text-brand-dark dark:text-brand-gold">
                  <UploadCloud className="w-7 h-7" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-brand-dark dark:text-white">
                  {t['workspace.dropzone.title']}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-brand-textMutedLight dark:text-brand-textMutedDark">
                  {t['workspace.dropzone.subtitle']}
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-brand-sand/40 dark:bg-brand-teal/20 text-brand-teal dark:text-brand-gold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{t['workspace.dropzone.supports']}</span>
                </div>
              </div>
            ) : (
              /* Selected File Card */
              <div className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-brand-sand/20 dark:bg-brand-surfaceDark2 border border-brand-sand dark:border-brand-teal/40">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="w-11 h-11 rounded-xl bg-brand-teal/15 dark:bg-brand-teal/30 flex items-center justify-center text-brand-teal dark:text-brand-gold shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-sm sm:text-base text-brand-dark dark:text-white truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-brand-textMutedLight dark:text-brand-textMutedDark">
                      {formatBytes(file.size)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isBusy}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg text-brand-dark dark:text-white bg-white dark:bg-brand-surfaceDark border border-brand-sand dark:border-brand-teal/40 hover:bg-brand-sand/30 transition-all"
                  >
                    {t['workspace.dropzone.change']}
                  </button>
                  <button
                    type="button"
                    onClick={handleRemoveFile}
                    disabled={isBusy}
                    className="p-1.5 rounded-lg text-brand-textMutedLight dark:text-brand-textMutedDark hover:text-red-500 transition-colors"
                    aria-label={t['workspace.dropzone.remove']}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Password Inputs */}
          <div className="space-y-4">
            <div>
              <label className="block text-xs sm:text-sm font-bold text-brand-dark dark:text-white mb-2">
                {mode === 'encrypt'
                  ? t['workspace.password.labelEncrypt']
                  : t['workspace.password.labelDecrypt']}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-textMutedLight dark:text-brand-textMutedDark">
                  <KeyRound className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrorMessage('');
                  }}
                  disabled={isBusy}
                  placeholder={
                    mode === 'encrypt'
                      ? t['workspace.password.placeholderEncrypt']
                      : t['workspace.password.placeholderDecrypt']
                  }
                  className="w-full pl-10 pr-10 py-3 rounded-xl text-sm sm:text-base bg-white dark:bg-brand-surfaceDark2 border border-brand-sand dark:border-brand-teal/40 text-brand-dark dark:text-white placeholder-brand-textMutedLight/50 dark:placeholder-brand-textMutedDark/50 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-brand-textMutedLight dark:text-brand-textMutedDark hover:text-brand-dark dark:hover:text-white transition-colors"
                  aria-label={showPassword ? t['workspace.password.hide'] : t['workspace.password.show']}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Password Strength Meter (Shown on Encrypt Mode) */}
              {mode === 'encrypt' && password && (
                <div className="mt-3 space-y-1.5 animate-in fade-in duration-200">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-brand-textMutedLight dark:text-brand-textMutedDark">
                      {t['workspace.password.strength.label']}:
                    </span>
                    <span className="font-bold text-brand-dark dark:text-white">
                      {strength.label}
                    </span>
                  </div>
                  <div className="grid grid-cols-5 gap-1.5 h-1.5">
                    {[1, 2, 3, 4, 5].map((level) => (
                      <div
                        key={level}
                        className={`h-full rounded-full transition-all duration-300 ${
                          strength.score >= level ? strength.color : 'bg-slate-200 dark:bg-slate-800'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-[11px] text-brand-textMutedLight dark:text-brand-textMutedDark">
                    {t['workspace.password.strength.tip']}
                  </p>
                </div>
              )}
            </div>

            {/* Password Confirmation (Only in Encrypt Mode) */}
            {mode === 'encrypt' && (
              <div>
                <label className="block text-xs sm:text-sm font-bold text-brand-dark dark:text-white mb-2">
                  {t['workspace.password.confirmLabel']}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-brand-textMutedLight dark:text-brand-textMutedDark">
                    <KeyRound className="w-4 h-4" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={confirmPassword}
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                      setErrorMessage('');
                    }}
                    disabled={isBusy}
                    placeholder={t['workspace.password.confirmPlaceholder']}
                    className="w-full pl-10 pr-10 py-3 rounded-xl text-sm sm:text-base bg-white dark:bg-brand-surfaceDark2 border border-brand-sand dark:border-brand-teal/40 text-brand-dark dark:text-white placeholder-brand-textMutedLight/50 dark:placeholder-brand-textMutedDark/50 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-brand-teal transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-brand-textMutedLight dark:text-brand-textMutedDark hover:text-brand-dark dark:hover:text-white transition-colors"
                    aria-label={showConfirmPassword ? t['workspace.password.hide'] : t['workspace.password.show']}
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {confirmPassword && password !== confirmPassword && (
                  <p className="mt-1.5 text-xs text-red-500 font-medium">
                    {t['workspace.password.mismatch']}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Error Alert */}
          {errorMessage && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs sm:text-sm flex items-start gap-3 animate-in fade-in duration-200">
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="flex-1 font-medium">{errorMessage}</div>
            </div>
          )}

          {/* Progress / Status Display */}
          {isBusy && (
            <div className="p-5 rounded-2xl bg-brand-sand/30 dark:bg-brand-surfaceDark2 border border-brand-sand dark:border-brand-teal/40 space-y-3 animate-in fade-in duration-200">
              <div className="flex items-center gap-3">
                <Loader2 className="w-5 h-5 animate-spin text-brand-teal dark:text-brand-gold" />
                <span className="text-sm sm:text-base font-bold text-brand-dark dark:text-white">
                  {statusMessage}
                </span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                <div
                  className={`h-full bg-brand-teal dark:bg-brand-gold transition-all duration-300 ${
                    status === 'reading' ? 'w-1/3' : status === 'deriving' ? 'w-2/3' : 'w-full animate-pulse'
                  }`}
                />
              </div>
            </div>
          )}

          {/* Success State */}
          {status === 'success' && downloadUrl && (
            <div className="p-6 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/30 space-y-4 animate-in fade-in duration-200">
              <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-6 h-6 shrink-0" />
                <div>
                  <h4 className="font-bold text-base sm:text-lg">{statusMessage}</h4>
                  {processingTimeMs && (
                    <p className="text-xs text-brand-textMutedLight dark:text-brand-textMutedDark">
                      Completed in {processingTimeMs} ms using 600,000 PBKDF2 iterations.
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => triggerDownload(downloadUrl, downloadFilename)}
                  className="flex-1 py-3 px-5 rounded-xl font-bold text-sm sm:text-base bg-brand-gold hover:bg-[#b08739] text-brand-dark shadow-md flex items-center justify-center gap-2 transition-all active:scale-95"
                >
                  <Download className="w-5 h-5" />
                  <span>{t['workspace.action.download']}</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="py-3 px-5 rounded-xl font-semibold text-sm sm:text-base bg-white dark:bg-brand-surfaceDark border border-brand-sand dark:border-brand-teal/40 text-brand-dark dark:text-white hover:bg-brand-sand/30 transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>{t['workspace.action.reset']}</span>
                </button>
              </div>
            </div>
          )}

          {/* Action Button (when not in success state) */}
          {status !== 'success' && (
            <button
              type="button"
              onClick={handleProcess}
              disabled={isBusy}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-base sm:text-lg shadow-lg flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] ${
                isBusy
                  ? 'opacity-60 cursor-not-allowed bg-slate-400 text-white'
                  : mode === 'encrypt'
                  ? 'bg-brand-dark hover:bg-brand-teal dark:bg-brand-teal dark:hover:bg-[#327d6c] text-white shadow-brand-dark/20'
                  : 'bg-brand-teal hover:bg-[#1e5246] dark:bg-brand-teal dark:hover:bg-[#327d6c] text-white shadow-brand-teal/20'
              }`}
            >
              {mode === 'encrypt' ? <Lock className="w-5 h-5" /> : <Unlock className="w-5 h-5" />}
              <span>
                {mode === 'encrypt'
                  ? t['workspace.action.encrypt']
                  : t['workspace.action.decrypt']}
              </span>
            </button>
          )}

          {/* Zero-Knowledge Privacy Guarantee Reassurance */}
          <div className="pt-2 border-t border-brand-sand/60 dark:border-brand-teal/20 flex items-start gap-2.5 text-[11px] sm:text-xs text-brand-textMutedLight dark:text-brand-textMutedDark">
            <Shield className="w-4 h-4 text-brand-teal dark:text-brand-gold shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {t['workspace.securityNotice']}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

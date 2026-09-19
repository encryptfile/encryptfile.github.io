export const defaultLang = 'en' as const;

export const languages = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  de: 'Deutsch',
  fr: 'Français',
  ja: '日本語',
} as const;

export type SupportedLocale = keyof typeof languages;

export const ui = {
  en: {
    'nav.title': 'EncryptFile',
    'nav.tagline': 'Client-Side Security',
    'nav.support': 'Support the Developer',
    'nav.themeToggle': 'Toggle Theme',
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.faq': 'FAQ',
    'nav.language': 'Language',

    'hero.title': 'Free Online File Encryptor & Decryptor',
    'hero.subtitle':
      'Password-protect any file with military-grade AES-256-GCM encryption. Runs 100% locally in your browser—zero server uploads, guaranteed absolute privacy.',
    'hero.badge.clientSide': '100% Client-Side',
    'hero.badge.zeroUploads': 'Zero Server Uploads',
    'hero.badge.encryption': 'AES-256-GCM + PBKDF2',
    'hero.badge.free': 'Free & Open Source',

    'workspace.tab.encrypt': 'Encrypt File',
    'workspace.tab.decrypt': 'Decrypt File',
    'workspace.dropzone.title': 'Drag and drop your file here',
    'workspace.dropzone.subtitle': 'or click to browse from your device',
    'workspace.dropzone.supports': 'Supports any file type (PDF, Images, ZIP, Office, Video, Audio)',
    'workspace.dropzone.selectedFile': 'Selected File',
    'workspace.dropzone.change': 'Change File',
    'workspace.dropzone.remove': 'Remove',
    'workspace.dropzone.size': 'Size',
    'workspace.password.labelEncrypt': 'Choose a Strong Password',
    'workspace.password.labelDecrypt': 'Enter Decryption Password',
    'workspace.password.placeholderEncrypt': 'Enter a secure password...',
    'workspace.password.placeholderDecrypt': 'Enter original password...',
    'workspace.password.show': 'Show password',
    'workspace.password.hide': 'Hide password',
    'workspace.password.confirmLabel': 'Confirm Password',
    'workspace.password.confirmPlaceholder': 'Re-enter your password to confirm...',
    'workspace.password.strength.label': 'Password Strength',
    'workspace.password.strength.veryWeak': 'Very Weak',
    'workspace.password.strength.weak': 'Weak',
    'workspace.password.strength.fair': 'Fair',
    'workspace.password.strength.strong': 'Strong',
    'workspace.password.strength.veryStrong': 'Very Strong',
    'workspace.password.strength.tip': 'Tip: Use 12+ characters combining uppercase, lowercase, numbers, and symbols.',
    'workspace.action.encrypt': 'Encrypt File Now',
    'workspace.action.decrypt': 'Decrypt File Now',
    'workspace.status.reading': 'Reading file into memory...',
    'workspace.status.deriving': 'Deriving 256-bit key (600,000 PBKDF2 iterations)...',
    'workspace.status.encrypting': 'Encrypting file with AES-256-GCM...',
    'workspace.status.decrypting': 'Decrypting file and verifying authentication tag...',
    'workspace.status.successEncrypt': 'File encrypted successfully!',
    'workspace.status.successDecrypt': 'File decrypted successfully!',
    'workspace.action.download': 'Download File',
    'workspace.action.reset': 'Process Another File',
    'workspace.error.noFile': 'Please select or drop a file first.',
    'workspace.error.noPassword': 'Please enter a password.',
    'workspace.error.passwordMismatch': 'Passwords do not match. Please verify and try again.',
    'workspace.error.fileTooSmall': 'The selected file is too small to be a valid EncryptFile container.',
    'workspace.error.decryptFailed': 'Decryption failed! Incorrect password or corrupted/tampered file.',
    'workspace.error.generic': 'An error occurred during cryptographic processing.',
    'workspace.securityNotice':
      'Zero-Knowledge Privacy: Your password and files never leave your browser. If you lose your password, the data cannot be recovered by anyone.',

    'features.title': 'Why Choose EncryptFile?',
    'features.subtitle': 'Engineered for maximum cryptographic assurance, user privacy, and raw browser speed.',
    'features.f1.title': 'Military-Grade AES-256-GCM',
    'features.f1.desc':
      'Galois/Counter Mode provides authenticated encryption with automatic integrity checking. Derived via 600,000 PBKDF2 SHA-256 rounds to thwart brute-force attacks.',
    'features.f2.title': '100% Client-Side Privacy',
    'features.f2.desc':
      'Powered exclusively by your browser’s native Web Crypto API. Sensitive files, passwords, and encryption keys never touch any server or cloud infrastructure.',
    'features.f3.title': 'Any File Format & Size',
    'features.f3.desc':
      'Protect PDFs, documents, high-resolution photos, videos, ZIP archives, CAD models, or disk images with zero artificial restrictions.',
    'features.f4.title': 'Zero Installs, Offline Capable',
    'features.f4.desc':
      'No browser extensions or desktop software required. Once loaded, you can disconnect your internet and execute encryption entirely offline.',

    'howItWorks.title': 'How It Works',
    'howItWorks.subtitle': 'Secure or restore any file in three transparent steps.',
    'howItWorks.step1.title': '1. Select Your File',
    'howItWorks.step1.desc': 'Drag & drop or browse for any document, image, or archive you want to protect.',
    'howItWorks.step2.title': '2. Set Your Password',
    'howItWorks.step2.desc': 'Enter a secure password. The browser runs 600,000 PBKDF2 iterations to derive your AES-256 key.',
    'howItWorks.step3.title': '3. Save Secure File',
    'howItWorks.step3.desc': 'Download your encrypted .enc container. Decrypt it anytime with the exact same password.',

    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know about browser-based file encryption.',
    'faq.q1': 'Is my file really private and never sent to a server?',
    'faq.a1':
      'Yes, 100%. All cryptographic computations take place inside your browser using the standardized W3C Web Crypto API (window.crypto.subtle). You can verify this yourself by inspecting your browser’s Network panel or even turning off your Wi-Fi before encrypting.',
    'faq.q2': 'What encryption algorithm is used?',
    'faq.a2':
      'We use AES-256-GCM (Advanced Encryption Standard in Galois/Counter Mode) with 256-bit keys. The key is derived using PBKDF2 with SHA-256, 600,000 iterations, and a unique 16-byte cryptographically random salt per file, meeting OWASP guidelines.',
    'faq.q3': 'What happens if I forget my password?',
    'faq.a3':
      'Because EncryptFile adheres strictly to zero-knowledge principles, your password is never stored or transmitted anywhere. If you lose your password, it is mathematically impossible for anyone to recover your encrypted file.',
    'faq.q4': 'Are there any file size limits?',
    'faq.a4':
      'There are no artificial server limits because files are never uploaded. The only constraint is your computer or mobile device’s available RAM memory. Most modern browsers comfortably process files from a few kilobytes up to several gigabytes.',
    'faq.q5': 'What is the structure of the encrypted .enc file?',
    'faq.a5':
      'The generated .enc file is an authenticated binary bundle consisting of a 16-byte cryptographically secure salt, a 12-byte random initialization vector (IV), and the AES-256-GCM ciphertext with an integrated 128-bit authentication tag.',
    'faq.q6': 'Can I decrypt my files on a different computer or phone?',
    'faq.a6':
      'Yes! Because EncryptFile runs in standard web browsers on Windows, macOS, Linux, iOS, and Android, any encrypted .enc file can be decrypted on any device with the correct password.',

    'support.title': 'Support Independent Open Source',
    'support.desc':
      'EncryptFile is 100% free, private, and ad-free. If this tool helped protect your confidential files, consider buying the developer a coffee.',
    'support.button': 'Buy Me a Coffee',

    'footer.rights': 'All rights reserved.',
    'footer.tagline': '100% Browser-Based File Encryption & Decryption.',
    'footer.disclaimer':
      'EncryptFile operates strictly within your local browser environment. Zero telemetry, cookies, or files are tracked or saved.',

    'seo.title': 'EncryptFile | Free Online File Encryptor & Decryptor (AES-256)',
    'seo.description':
      'Password-protect PDFs, images, zips, and documents in your browser with military-grade AES-256-GCM encryption. 100% private, zero server uploads.',
    'seo.keywords':
      'file encryptor, online file encryption, password protect pdf, AES-256 file encryptor, client-side encryption, decrypt file online, web crypto api',
  },

  es: {
    'nav.title': 'EncryptFile',
    'nav.tagline': 'Seguridad en el Navegador',
    'nav.support': 'Apoyar al Desarrollador',
    'nav.themeToggle': 'Cambiar Tema',
    'nav.features': 'Características',
    'nav.howItWorks': 'Cómo Funciona',
    'nav.faq': 'Preguntas Frecuentes',
    'nav.language': 'Idioma',

    'hero.title': 'Cifrador y Descifrador de Archivos Online Gratuito',
    'hero.subtitle':
      'Protege cualquier archivo con cifrado militar AES-256-GCM con contraseña. Funciona 100% localmente en tu navegador: cero cargas a servidores, privacidad total garantizada.',
    'hero.badge.clientSide': '100% en el Navegador',
    'hero.badge.zeroUploads': 'Cero Cargas al Servidor',
    'hero.badge.encryption': 'AES-256-GCM + PBKDF2',
    'hero.badge.free': 'Gratuito y Código Abierto',

    'workspace.tab.encrypt': 'Cifrar Archivo',
    'workspace.tab.decrypt': 'Descifrar Archivo',
    'workspace.dropzone.title': 'Arrastra y suelta tu archivo aquí',
    'workspace.dropzone.subtitle': 'o haz clic para explorar en tu dispositivo',
    'workspace.dropzone.supports': 'Compatible con todos los tipos de archivo (PDF, Imágenes, ZIP, Office, Video, Audio)',
    'workspace.dropzone.selectedFile': 'Archivo Seleccionado',
    'workspace.dropzone.change': 'Cambiar Archivo',
    'workspace.dropzone.remove': 'Eliminar',
    'workspace.dropzone.size': 'Tamaño',
    'workspace.password.labelEncrypt': 'Elige una Contraseña Segura',
    'workspace.password.labelDecrypt': 'Introduce la Contraseña de Descifrado',
    'workspace.password.placeholderEncrypt': 'Introduce una contraseña segura...',
    'workspace.password.placeholderDecrypt': 'Introduce la contraseña original...',
    'workspace.password.show': 'Mostrar contraseña',
    'workspace.password.hide': 'Ocultar contraseña',
    'workspace.password.confirmLabel': 'Confirmar Contraseña',
    'workspace.password.confirmPlaceholder': 'Vuelve a escribir la contraseña para confirmar...',
    'workspace.password.strength.label': 'Seguridad de la Contraseña',
    'workspace.password.strength.veryWeak': 'Muy Débil',
    'workspace.password.strength.weak': 'Débil',
    'workspace.password.strength.fair': 'Aceptable',
    'workspace.password.strength.strong': 'Fuerte',
    'workspace.password.strength.veryStrong': 'Muy Fuerte',
    'workspace.password.strength.tip': 'Consejo: Usa más de 12 caracteres combinando mayúsculas, minúsculas, números y símbolos.',
    'workspace.action.encrypt': 'Cifrar Archivo Ahora',
    'workspace.action.decrypt': 'Descifrar Archivo Ahora',
    'workspace.status.reading': 'Leyendo archivo en memoria...',
    'workspace.status.deriving': 'Derivando clave de 256 bits (600.000 iteraciones PBKDF2)...',
    'workspace.status.encrypting': 'Cifrando archivo con AES-256-GCM...',
    'workspace.status.decrypting': 'Descifrando archivo y verificando etiqueta de autenticación...',
    'workspace.status.successEncrypt': '¡Archivo cifrado con éxito!',
    'workspace.status.successDecrypt': '¡Archivo descifrado con éxito!',
    'workspace.action.download': 'Descargar Archivo',
    'workspace.action.reset': 'Procesar Otro Archivo',
    'workspace.error.noFile': 'Por favor, selecciona o arrastra un archivo primero.',
    'workspace.error.noPassword': 'Por favor, introduce una contraseña.',
    'workspace.error.passwordMismatch': 'Las contraseñas no coinciden. Por favor, verifica e inténtalo de nuevo.',
    'workspace.error.fileTooSmall': 'El archivo seleccionado es demasiado pequeño para ser un contenedor EncryptFile válido.',
    'workspace.error.decryptFailed': '¡Error al descifrar! Contraseña incorrecta o archivo dañado/alterado.',
    'workspace.error.generic': 'Ocurrió un error durante el procesamiento criptográfico.',
    'workspace.securityNotice':
      'Privacidad de Conocimiento Cero: Tu contraseña y tus archivos nunca salen de tu navegador. Si olvidas tu contraseña, nadie podrá recuperar tus datos.',

    'features.title': '¿Por Qué Elegir EncryptFile?',
    'features.subtitle': 'Diseñado para una seguridad criptográfica absoluta, privacidad del usuario y máxima velocidad.',
    'features.f1.title': 'Seguridad Militar AES-256-GCM',
    'features.f1.desc':
      'El modo Galois/Counter proporciona cifrado autenticado con verificación automática de integridad. Derivado con 600.000 iteraciones PBKDF2 SHA-256 contra ataques de fuerza bruta.',
    'features.f2.title': 'Privacidad 100% en el Navegador',
    'features.f2.desc':
      'Funciona exclusivamente mediante la Web Crypto API nativa de tu navegador. Tus archivos confidenciales y contraseñas jamás tocan servidores ni la nube.',
    'features.f3.title': 'Cualquier Formato y Tamaño',
    'features.f3.desc':
      'Protege PDFs, documentos, fotografías en alta resolución, vídeos, archivos ZIP o imágenes de disco sin límites artificiales.',
    'features.f4.title': 'Sin Instalaciones, Funciona Offline',
    'features.f4.desc':
      'Sin extensiones ni programas de escritorio. Una vez cargada la página, puedes desconectar tu conexión a internet y cifrar sin conexión.',

    'howItWorks.title': 'Cómo Funciona',
    'howItWorks.subtitle': 'Protege o restaura cualquier archivo en tres pasos transparentes.',
    'howItWorks.step1.title': '1. Selecciona tu Archivo',
    'howItWorks.step1.desc': 'Arrastra y suelta o examina cualquier documento, imagen o archivo comprimido.',
    'howItWorks.step2.title': '2. Define tu Contraseña',
    'howItWorks.step2.desc': 'Introduce una contraseña segura. El navegador calcula 600.000 iteraciones PBKDF2 localmente.',
    'howItWorks.step3.title': '3. Guarda el Archivo Seguro',
    'howItWorks.step3.desc': 'Descarga tu archivo .enc protegido. Descífralo cuando quieras con la misma contraseña.',

    'faq.title': 'Preguntas Frecuentes',
    'faq.subtitle': 'Todo lo que necesitas saber sobre la seguridad de archivos en el navegador.',
    'faq.q1': '¿Mi archivo es realmente privado y nunca se sube a un servidor?',
    'faq.a1':
      'Sí, 100%. Todas las operaciones criptográficas se realizan dentro de la memoria de tu navegador con la Web Crypto API estandarizada (window.crypto.subtle). Puedes comprobarlo inspeccionando el panel de Red o desconectando tu Wi-Fi.',
    'faq.q2': '¿Qué algoritmo de cifrado se utiliza?',
    'faq.a2':
      'Utilizamos AES-256-GCM con claves de 256 bits. La clave se deriva mediante PBKDF2 con SHA-256, 600.000 iteraciones y una sal aleatoria única de 16 bytes por archivo, según las normas de OWASP.',
    'faq.q3': '¿Qué ocurre si olvido mi contraseña?',
    'faq.a3':
      'Dado que EncryptFile opera bajo el principio de conocimiento cero, tu contraseña jamás se almacena ni se transmite. Si la pierdes, es matemáticamente imposible recuperar el archivo cifrado.',
    'faq.q4': '¿Existen límites de tamaño de archivo?',
    'faq.a4':
      'No hay límites de servidor porque los archivos no se suben. El único límite es la memoria RAM disponible de tu dispositivo. La mayoría de navegadores modernos procesan fácilmente desde kilobytes hasta varios gigabytes.',
    'faq.q5': '¿Cuál es la estructura del archivo cifrado .enc?',
    'faq.a5':
      'El archivo .enc resultante es un contenedor binario autenticado que incluye una sal aleatoria de 16 bytes, un vector de inicialización (IV) de 12 bytes y el texto cifrado con una etiqueta de autenticación integrada de 128 bits.',
    'faq.q6': '¿Puedo descifrar mis archivos en otro ordenador o móvil?',
    'faq.a6':
      '¡Sí! Dado que EncryptFile funciona en navegadores estándar en Windows, macOS, Linux, iOS y Android, cualquier archivo .enc puede ser descifrado en cualquier dispositivo con la contraseña correcta.',

    'support.title': 'Apoya el Código Abierto Independiente',
    'support.desc':
      'EncryptFile es 100% gratuito, privado y sin anuncios. Si esta herramienta te ayudó a proteger tus archivos confidenciales, considera invitar al desarrollador a un café.',
    'support.button': 'Invítame a un Café',

    'footer.rights': 'Todos los derechos reservados.',
    'footer.tagline': 'Cifrado y Descifrado de Archivos 100% en el Navegador.',
    'footer.disclaimer':
      'EncryptFile opera estrictamente dentro de tu navegador local. No se rastrean ni almacenan datos, telemetría ni archivos.',

    'seo.title': 'EncryptFile | Cifrador y Descifrador de Archivos Online Gratuito (AES-256)',
    'seo.description':
      'Protege PDFs, imágenes, zips y documentos con contraseña en tu navegador mediante cifrado militar AES-256-GCM. 100% privado, cero subidas a servidores.',
    'seo.keywords':
      'cifrador de archivos, cifrado de archivos online, proteger pdf con contraseña, cifrador AES-256, cifrado en navegador, descifrar archivo online',
  },

  pt: {
    'nav.title': 'EncryptFile',
    'nav.tagline': 'Segurança no Navegador',
    'nav.support': 'Apoiar o Desenvolvedor',
    'nav.themeToggle': 'Alternar Tema',
    'nav.features': 'Recursos',
    'nav.howItWorks': 'Como Funciona',
    'nav.faq': 'Perguntas Frequentes',
    'nav.language': 'Idioma',

    'hero.title': 'Encriptador e Decifrador de Arquivos Online Gratuito',
    'hero.subtitle':
      'Proteja qualquer arquivo com criptografia de nível militar AES-256-GCM com senha. Funciona 100% localmente no navegador: zero envios para servidores, total privacidade.',
    'hero.badge.clientSide': '100% no Navegador',
    'hero.badge.zeroUploads': 'Zero Envios ao Servidor',
    'hero.badge.encryption': 'AES-256-GCM + PBKDF2',
    'hero.badge.free': 'Gratuito e Código Aberto',

    'workspace.tab.encrypt': 'Encriptar Arquivo',
    'workspace.tab.decrypt': 'Decifrar Arquivo',
    'workspace.dropzone.title': 'Arraste e solte seu arquivo aqui',
    'workspace.dropzone.subtitle': 'ou clique para procurar no seu dispositivo',
    'workspace.dropzone.supports': 'Suporta todos os tipos de arquivo (PDF, Imagens, ZIP, Office, Vídeo, Áudio)',
    'workspace.dropzone.selectedFile': 'Arquivo Selecionado',
    'workspace.dropzone.change': 'Alterar Arquivo',
    'workspace.dropzone.remove': 'Remover',
    'workspace.dropzone.size': 'Tamanho',
    'workspace.password.labelEncrypt': 'Escolha uma Senha Forte',
    'workspace.password.labelDecrypt': 'Insira a Senha de Decifração',
    'workspace.password.placeholderEncrypt': 'Insira uma senha segura...',
    'workspace.password.placeholderDecrypt': 'Insira a senha original...',
    'workspace.password.show': 'Mostrar senha',
    'workspace.password.hide': 'Ocultar senha',
    'workspace.password.confirmLabel': 'Confirmar Senha',
    'workspace.password.confirmPlaceholder': 'Digite novamente a senha para confirmar...',
    'workspace.password.strength.label': 'Força da Senha',
    'workspace.password.strength.veryWeak': 'Muito Fraca',
    'workspace.password.strength.weak': 'Fraca',
    'workspace.password.strength.fair': 'Razoável',
    'workspace.password.strength.strong': 'Forte',
    'workspace.password.strength.veryStrong': 'Muito Forte',
    'workspace.password.strength.tip': 'Dica: Use mais de 12 caracteres combinando maiúsculas, minúsculas, números e símbolos.',
    'workspace.action.encrypt': 'Encriptar Arquivo Agora',
    'workspace.action.decrypt': 'Decifrar Arquivo Agora',
    'workspace.status.reading': 'Lendo arquivo na memória...',
    'workspace.status.deriving': 'Derivando chave de 256 bits (600.000 iterações PBKDF2)...',
    'workspace.status.encrypting': 'Encriptando arquivo com AES-256-GCM...',
    'workspace.status.decrypting': 'Decifrando arquivo e verificando autenticidade...',
    'workspace.status.successEncrypt': 'Arquivo encriptado com sucesso!',
    'workspace.status.successDecrypt': 'Arquivo decifrado com sucesso!',
    'workspace.action.download': 'Baixar Arquivo',
    'workspace.action.reset': 'Processar Outro Arquivo',
    'workspace.error.noFile': 'Por favor, selecione ou arraste um arquivo primeiro.',
    'workspace.error.noPassword': 'Por favor, insira uma senha.',
    'workspace.error.passwordMismatch': 'As senhas não coincidem. Verifique e tente novamente.',
    'workspace.error.fileTooSmall': 'O arquivo selecionado é pequeno demais para ser um contêiner EncryptFile válido.',
    'workspace.error.decryptFailed': 'Falha na decifração! Senha incorreta ou arquivo corrompido/alterado.',
    'workspace.error.generic': 'Ocorreu um erro durante o processamento criptográfico.',
    'workspace.securityNotice':
      'Privacidade de Conhecimento Zero: Sua senha e seus arquivos nunca saem do seu navegador. Se perder sua senha, ninguém poderá recuperar seus dados.',

    'features.title': 'Por Que Escolher o EncryptFile?',
    'features.subtitle': 'Projetado para máxima segurança criptográfica, privacidade do usuário e alto desempenho.',
    'features.f1.title': 'Segurança Militar AES-256-GCM',
    'features.f1.desc':
      'O modo Galois/Counter fornece criptografia autenticada com verificação automática de integridade. Derivado com 600.000 iterações PBKDF2 SHA-256 contra ataques de força bruta.',
    'features.f2.title': 'Privacidade 100% no Navegador',
    'features.f2.desc':
      'Executado exclusivamente através da Web Crypto API nativa do navegador. Seus arquivos confidenciais e senhas nunca tocam servidores ou nuvem.',
    'features.f3.title': 'Qualquer Formato e Tamanho',
    'features.f3.desc':
      'Proteja PDFs, documentos, fotos em alta resolução, vídeos, arquivos ZIP ou imagens de disco sem restrições artificiais.',
    'features.f4.title': 'Sem Instalação, Funciona Offline',
    'features.f4.desc':
      'Sem extensões ou instaladores. Uma vez carregada a página, você pode desconectar a internet e criptografar completamente offline.',

    'howItWorks.title': 'Como Funciona',
    'howItWorks.subtitle': 'Proteja ou restaure qualquer arquivo em três etapas transparentes.',
    'howItWorks.step1.title': '1. Selecione o Arquivo',
    'howItWorks.step1.desc': 'Arraste e solte ou procure qualquer documento, foto ou arquivo compactado.',
    'howItWorks.step2.title': '2. Defina a Senha',
    'howItWorks.step2.desc': 'Insira uma senha forte. O navegador processa 600.000 iterações PBKDF2 localmente.',
    'howItWorks.step3.title': '3. Salve o Arquivo Seguro',
    'howItWorks.step3.desc': 'Baixe o contêiner protegido .enc. Decifre quando quiser com a mesma senha.',

    'faq.title': 'Perguntas Frequentes',
    'faq.subtitle': 'Tudo o que você precisa saber sobre criptografia de arquivos no navegador.',
    'faq.q1': 'Meu arquivo é realmente privado e nunca é enviado a um servidor?',
    'faq.a1':
      'Sim, 100%. Todas as operações criptográficas ocorrem dentro da memória do navegador através da Web Crypto API padrão (window.crypto.subtle). Você pode confirmar inspecionando a aba de Rede ou desligando o Wi-Fi.',
    'faq.q2': 'Qual algoritmo de criptografia é utilizado?',
    'faq.a2':
      'Utilizamos AES-256-GCM com chaves de 256 bits. A chave é derivada usando PBKDF2 com SHA-256, 600.000 iterações e um salt aleatório criptográfico de 16 bytes por arquivo, atendendo às recomendações da OWASP.',
    'faq.q3': 'O que acontece se eu esquecer minha senha?',
    'faq.a3':
      'Como o EncryptFile adota o princípio de conhecimento zero, sua senha nunca é enviada ou salva. Se esquecer a senha, é matematicamente impossível recuperar os dados encriptados.',
    'faq.q4': 'Há limites de tamanho de arquivo?',
    'faq.a4':
      'Não há restrições de servidor, pois os arquivos não são carregados. O único limite é a memória RAM disponível no seu dispositivo.',
    'faq.q5': 'Qual é a estrutura do arquivo encriptado .enc?',
    'faq.a5':
      'O arquivo .enc gerado é um pacote binário autenticado contendo salt de 16 bytes, vetor de inicialização (IV) de 12 bytes e o conteúdo cifrado com tag de autenticação de 128 bits.',
    'faq.q6': 'Posso decifrar meus arquivos em outro computador ou celular?',
    'faq.a6':
      'Sim! Como o EncryptFile opera em qualquer navegador moderno no Windows, macOS, Linux, iOS e Android, qualquer arquivo .enc pode ser decifrado em qualquer aparelho com a senha correta.',

    'support.title': 'Apoie o Código Aberto Independente',
    'support.desc':
      'O EncryptFile é 100% gratuito, privado e sem anúncios. Se esta ferramenta ajudou a proteger seus arquivos, considere pagar um café ao desenvolvedor.',
    'support.button': 'Comprar um Café',

    'footer.rights': 'Todos os direitos reservados.',
    'footer.tagline': 'Criptografia e Decifração de Arquivos 100% no Navegador.',
    'footer.disclaimer':
      'O EncryptFile opera estritamente no seu navegador local. Nenhum dado, telemetria ou arquivo é coletado ou armazenado.',

    'seo.title': 'EncryptFile | Encriptador e Decifrador de Arquivos Online Gratuito (AES-256)',
    'seo.description':
      'Proteja PDFs, fotos, zips e documentos com senha no seu navegador com criptografia AES-256-GCM. 100% privado, zero envios para servidores.',
    'seo.keywords':
      'encriptador de arquivos, criptografia de arquivos online, proteger pdf com senha, encriptador AES-256, criptografia no navegador, decifrar arquivo online',
  },

  de: {
    'nav.title': 'EncryptFile',
    'nav.tagline': 'Sicherheit im Browser',
    'nav.support': 'Entwickler unterstützen',
    'nav.themeToggle': 'Design wechseln',
    'nav.features': 'Funktionen',
    'nav.howItWorks': 'So funktioniert es',
    'nav.faq': 'Häufige Fragen',
    'nav.language': 'Sprache',

    'hero.title': 'Kostenloser Online-Dateiverschlüssler & -Entschlüssler',
    'hero.subtitle':
      'Schützen Sie jede Datei mit militärischer AES-256-GCM-Verschlüsselung per Passwort. Läuft zu 100 % lokal in Ihrem Browser – null Server-Uploads, absolute Privatsphäre.',
    'hero.badge.clientSide': '100% Client-Seitig',
    'hero.badge.zeroUploads': 'Null Server-Uploads',
    'hero.badge.encryption': 'AES-256-GCM + PBKDF2',
    'hero.badge.free': 'Kostenlos & Open Source',

    'workspace.tab.encrypt': 'Datei verschlüsseln',
    'workspace.tab.decrypt': 'Datei entschlüsseln',
    'workspace.dropzone.title': 'Datei hierher ziehen und ablegen',
    'workspace.dropzone.subtitle': 'oder klicken, um auf Ihrem Gerät zu suchen',
    'workspace.dropzone.supports': 'Unterstützt alle Dateitypen (PDF, Bilder, ZIP, Office, Video, Audio)',
    'workspace.dropzone.selectedFile': 'Ausgewählte Datei',
    'workspace.dropzone.change': 'Datei ändern',
    'workspace.dropzone.remove': 'Entfernen',
    'workspace.dropzone.size': 'Größe',
    'workspace.password.labelEncrypt': 'Wählen Sie ein starkes Passwort',
    'workspace.password.labelDecrypt': 'Entschlüsselungspasswort eingeben',
    'workspace.password.placeholderEncrypt': 'Sicheres Passwort eingeben...',
    'workspace.password.placeholderDecrypt': 'Ursprüngliches Passwort eingeben...',
    'workspace.password.show': 'Passwort anzeigen',
    'workspace.password.hide': 'Passwort verbergen',
    'workspace.password.confirmLabel': 'Passwort bestätigen',
    'workspace.password.confirmPlaceholder': 'Passwort zur Bestätigung wiederholen...',
    'workspace.password.strength.label': 'Passwortstärke',
    'workspace.password.strength.veryWeak': 'Sehr schwach',
    'workspace.password.strength.weak': 'Schwach',
    'workspace.password.strength.fair': 'Mittel',
    'workspace.password.strength.strong': 'Stark',
    'workspace.password.strength.veryStrong': 'Sehr stark',
    'workspace.password.strength.tip': 'Tipp: Mindestens 12 Zeichen mit Groß-, Kleinbuchstaben, Ziffern und Sonderzeichen.',
    'workspace.action.encrypt': 'Datei jetzt verschlüsseln',
    'workspace.action.decrypt': 'Datei jetzt entschlüsseln',
    'workspace.status.reading': 'Lese Datei in den Speicher...',
    'workspace.status.deriving': 'Leite 256-Bit-Schlüssel ab (600.000 PBKDF2-Iterationen)...',
    'workspace.status.encrypting': 'Verschlüssele Datei mit AES-256-GCM...',
    'workspace.status.decrypting': 'Entschlüssele Datei und überprüfe Authentizität...',
    'workspace.status.successEncrypt': 'Datei erfolgreich verschlüsselt!',
    'workspace.status.successDecrypt': 'Datei erfolgreich entschlüsselt!',
    'workspace.action.download': 'Datei herunterladen',
    'workspace.action.reset': 'Weitere Datei verarbeiten',
    'workspace.error.noFile': 'Bitte wählen Sie zuerst eine Datei aus oder legen Sie sie ab.',
    'workspace.error.noPassword': 'Bitte geben Sie ein Passwort ein.',
    'workspace.error.passwordMismatch': 'Die Passwörter stimmen nicht überein. Bitte überprüfen.',
    'workspace.error.fileTooSmall': 'Die Datei ist zu klein, um ein gültiger EncryptFile-Container zu sein.',
    'workspace.error.decryptFailed': 'Entschlüsselung fehlgeschlagen! Falsches Passwort oder beschädigte Datei.',
    'workspace.error.generic': 'Ein Fehler ist bei der kryptografischen Verarbeitung aufgetreten.',
    'workspace.securityNotice':
      'Zero-Knowledge-Garantie: Ihr Passwort und Ihre Dateien verlassen niemals Ihren Browser. Wenn Sie Ihr Passwort verlieren, können die Daten nicht wiederhergestellt werden.',

    'features.title': 'Warum EncryptFile wählen?',
    'features.subtitle': 'Entwickelt für höchste kryptografische Sicherheit, Privatsphäre und maximale Browser-Geschwindigkeit.',
    'features.f1.title': 'Militärische AES-256-GCM Sicherheit',
    'features.f1.desc':
      'Galois/Counter Mode bietet authentifizierte Verschlüsselung mit automatischer Integritätsprüfung. Schlüsselableitung mit 600.000 PBKDF2-Runden widersteht Brute-Force-Angriffen.',
    'features.f2.title': '100% Privatsphäre im Browser',
    'features.f2.desc':
      'Nutzt ausschließlich die native Web Crypto API Ihres Browsers. Sensible Dateien und Passwörter erreichen niemals Server oder die Cloud.',
    'features.f3.title': 'Beliebige Dateiformate & Größen',
    'features.f3.desc':
      'Sichern Sie PDFs, Dokumente, Fotos in voller Auflösung, Videos, ZIP-Archive oder Datenträgerabbilder ohne künstliche Beschränkungen.',
    'features.f4.title': 'Keine Installation, Offline-fähig',
    'features.f4.desc':
      'Funktioniert auf jedem modernen Desktop- und Mobilbrowser. Nach dem Laden können Sie die Internetverbindung trennen und offline verschlüsseln.',

    'howItWorks.title': 'So funktioniert es',
    'howItWorks.subtitle': 'Sichern oder entschlüsseln Sie jede Datei in drei Schritten.',
    'howItWorks.step1.title': '1. Datei auswählen',
    'howItWorks.step1.desc': 'Ziehen Sie ein beliebiges Dokument, Bild oder Archiv per Drag & Drop hinein.',
    'howItWorks.step2.title': '2. Passwort festlegen',
    'howItWorks.step2.desc': 'Geben Sie ein sicheres Passwort ein. Der Browser berechnet 600.000 PBKDF2-Runden lokal.',
    'howItWorks.step3.title': '3. Sichere Datei speichern',
    'howItWorks.step3.desc': 'Laden Sie die verschlüsselte .enc-Datei herunter. Entschlüsseln Sie sie jederzeit mit demselben Passwort.',

    'faq.title': 'Häufig gestellte Fragen',
    'faq.subtitle': 'Alles Wissenswerte über dateibasierte Verschlüsselung im Webbrowser.',
    'faq.q1': 'Ist meine Datei wirklich privat und wird niemals an einen Server gesendet?',
    'faq.a1':
      'Ja, zu 100 %. Alle Berechnungen finden direkt im Arbeitsspeicher Ihres Browsers über die standardisierte W3C Web Crypto API (window.crypto.subtle) statt. Sie können dies im Netzwerk-Tab überprüfen oder offline arbeiten.',
    'faq.q2': 'Welcher Verschlüsselungsalgorithmus wird verwendet?',
    'faq.a2':
      'Wir verwenden AES-256-GCM mit 256-Bit-Schlüsseln. Die Schlüsselableitung erfolgt über PBKDF2 mit SHA-256, 600.000 Iterationen und einem kryptografisch sicheren 16-Byte-Zufallssalz pro Datei gemäß OWASP-Vorgaben.',
    'faq.q3': 'Was passiert, wenn ich mein Passwort vergesse?',
    'faq.a3':
      'Da EncryptFile nach dem Zero-Knowledge-Prinzip arbeitet, wird Ihr Passwort nirgends gespeichert. Wenn Sie es vergessen, ist eine Wiederherstellung mathematisch unmöglich.',
    'faq.q4': 'Gibt es Beschränkungen bei der Dateigröße?',
    'faq.a4':
      'Es gibt keine Serverbeschränkungen, da keine Uploads stattfinden. Die einzige Grenze ist der verfügbare RAM-Speicher Ihres Geräts.',
    'faq.q5': 'Wie ist die verschlüsselte .enc-Datei aufgebaut?',
    'faq.a5':
      'Die resultierende .enc-Datei enthält ein 16-Byte-Zufallssalz, einen 12-Byte-Initialisierungsvektor (IV) und den mit 128-Bit-Authentifizierungs-Tag geschützten AES-256-GCM-Chiffretext.',
    'faq.q6': 'Kann ich meine Dateien auf einem anderen Gerät entschlüsseln?',
    'faq.a6':
      'Ja! EncryptFile läuft auf allen modernen Webbrowsern unter Windows, macOS, Linux, iOS und Android. Jede .enc-Datei kann überall mit dem richtigen Passwort entschlüsselt werden.',

    'support.title': 'Unabhängiges Open Source unterstützen',
    'support.desc':
      'EncryptFile ist 100 % kostenlos, werbefrei und privat. Wenn Ihnen das Tool geholfen hat, unterstützen Sie die Weiterentwicklung gerne mit einem Kaffee.',
    'support.button': 'Kauf mir einen Kaffee',

    'footer.rights': 'Alle Rechte vorbehalten.',
    'footer.tagline': '100% browserbasierte Dateiverschlüsselung & -entschlüsselung.',
    'footer.disclaimer':
      'EncryptFile arbeitet ausschließlich lokal in Ihrem Webbrowser. Es werden keinerlei Telemetrie- oder Dateidaten gesammelt oder gespeichert.',

    'seo.title': 'EncryptFile | Kostenloser Online-Dateiverschlüssler & -Entschlüssler (AES-256)',
    'seo.description':
      'Passwortschutz für PDFs, Bilder, ZIPs und Dokumente im Browser mit AES-256-GCM-Verschlüsselung. 100% privat, keine Server-Uploads.',
    'seo.keywords':
      'Dateiverschlüsselung, Datei online verschlüsseln, PDF mit Passwort schützen, AES-256 Dateiverschlüsselung, Client-seitige Verschlüsselung, Datei online entschlüsseln',
  },

  fr: {
    'nav.title': 'EncryptFile',
    'nav.tagline': 'Sécurité dans le Navigateur',
    'nav.support': 'Soutenir le Développeur',
    'nav.themeToggle': 'Changer de Thème',
    'nav.features': 'Fonctionnalités',
    'nav.howItWorks': 'Comment Ça Marche',
    'nav.faq': 'FAQ',
    'nav.language': 'Langue',

    'hero.title': 'Chiffreur et Déchiffreur de Fichiers en Ligne Gratuit',
    'hero.subtitle':
      'Protégez vos fichiers avec un chiffrement militaire AES-256-GCM par mot de passe. Fonctionne à 100 % localement dans votre navigateur : zéro transfert serveur, confidentialité absolue.',
    'hero.badge.clientSide': '100% dans le Navigateur',
    'hero.badge.zeroUploads': 'Zéro Envoi sur Serveur',
    'hero.badge.encryption': 'AES-256-GCM + PBKDF2',
    'hero.badge.free': 'Gratuit et Open Source',

    'workspace.tab.encrypt': 'Chiffrer le Fichier',
    'workspace.tab.decrypt': 'Déchiffrer le Fichier',
    'workspace.dropzone.title': 'Glissez et déposez votre fichier ici',
    'workspace.dropzone.subtitle': 'ou cliquez pour parcourir votre appareil',
    'workspace.dropzone.supports': 'Prend en charge tous les types (PDF, Images, ZIP, Office, Vidéo, Audio)',
    'workspace.dropzone.selectedFile': 'Fichier Sélectionné',
    'workspace.dropzone.change': 'Changer de Fichier',
    'workspace.dropzone.remove': 'Supprimer',
    'workspace.dropzone.size': 'Taille',
    'workspace.password.labelEncrypt': 'Choisissez un Mot de Passe Robuste',
    'workspace.password.labelDecrypt': 'Entrez le Mot de Passe de Déchiffrement',
    'workspace.password.placeholderEncrypt': 'Entrez un mot de passe sécurisé...',
    'workspace.password.placeholderDecrypt': 'Entrez le mot de passe d’origine...',
    'workspace.password.show': 'Afficher le mot de passe',
    'workspace.password.hide': 'Masquer le mot de passe',
    'workspace.password.confirmLabel': 'Confirmer le Mot de Passe',
    'workspace.password.confirmPlaceholder': 'Confirmez votre mot de passe...',
    'workspace.password.strength.label': 'Force du Mot de Passe',
    'workspace.password.strength.veryWeak': 'Très Faible',
    'workspace.password.strength.weak': 'Faible',
    'workspace.password.strength.fair': 'Moyen',
    'workspace.password.strength.strong': 'Fort',
    'workspace.password.strength.veryStrong': 'Très Fort',
    'workspace.password.strength.tip': 'Conseil : Utilisez au moins 12 caractères combinant majuscules, minuscules, chiffres et symboles.',
    'workspace.action.encrypt': 'Chiffrer le Fichier Maintenant',
    'workspace.action.decrypt': 'Déchiffrer le Fichier Maintenant',
    'workspace.status.reading': 'Lecture du fichier en mémoire...',
    'workspace.status.deriving': 'Dérivation de la clé 256 bits (600 000 itérations PBKDF2)...',
    'workspace.status.encrypting': 'Chiffrement du fichier avec AES-256-GCM...',
    'workspace.status.decrypting': 'Déchiffrement et vérification de l’intégrité...',
    'workspace.status.successEncrypt': 'Fichier chiffré avec succès !',
    'workspace.status.successDecrypt': 'Fichier déchiffré avec succès !',
    'workspace.action.download': 'Télécharger le Fichier',
    'workspace.action.reset': 'Traiter un Autre Fichier',
    'workspace.error.noFile': 'Veuillez sélectionner ou déposer un fichier d’abord.',
    'workspace.error.noPassword': 'Veuillez saisir un mot de passe.',
    'workspace.error.passwordMismatch': 'Les mots de passe ne correspondent pas. Veuillez vérifier.',
    'workspace.error.fileTooSmall': 'Le fichier est trop petit pour être un conteneur EncryptFile valide.',
    'workspace.error.decryptFailed': 'Échec du déchiffrement ! Mot de passe erroné ou fichier endommagé.',
    'workspace.error.generic': 'Une erreur est survenue lors du traitement cryptographique.',
    'workspace.securityNotice':
      'Confidentialité Zero-Knowledge : Votre mot de passe et vos données ne quittent jamais votre navigateur. En cas d’oubli du mot de passe, les données sont irrécupérables.',

    'features.title': 'Pourquoi Choisir EncryptFile ?',
    'features.subtitle': 'Conçu pour une garantie cryptographique maximale, une confidentialité absolue et une rapidité native.',
    'features.f1.title': 'Sécurité Militaire AES-256-GCM',
    'features.f1.desc':
      'Le mode Galois/Counter assure un chiffrement authentifié avec contrôle d’intégrité automatique. Clé dérivée avec 600 000 itérations PBKDF2 SHA-256.',
    'features.f2.title': 'Confidentialité 100% Locale',
    'features.f2.desc':
      'Fonctionne exclusivement via la Web Crypto API native de votre navigateur. Vos données et mots de passe ne transitent jamais sur un serveur.',
    'features.f3.title': 'Tous Formats et Tailles',
    'features.f3.desc':
      'Protégez des PDF, documents, photos haute résolution, vidéos, archives ZIP ou images disques sans restrictions arbitraires.',
    'features.f4.title': 'Zéro Installation, Mode Hors-Ligne',
    'features.f4.desc':
      'Aucun plugin ni logiciel requis. Une fois la page chargée, vous pouvez déconnecter Internet et chiffrer totalement hors-ligne.',

    'howItWorks.title': 'Comment Ça Marche',
    'howItWorks.subtitle': 'Protégez ou restaurez vos fichiers en trois étapes simples.',
    'howItWorks.step1.title': '1. Sélectionnez le Fichier',
    'howItWorks.step1.desc': 'Glissez-déposez n’importe quel document, image ou archive dans l’espace sécurisé.',
    'howItWorks.step2.title': '2. Définissez le Mot de Passe',
    'howItWorks.step2.desc': 'Saisissez un mot de passe robuste. Le navigateur calcule 600 000 itérations PBKDF2 localement.',
    'howItWorks.step3.title': '3. Enregistrez le Fichier Chiffré',
    'howItWorks.step3.desc': 'Téléchargez votre fichier .enc inviolable. Déchiffrez-le à tout moment avec ce même mot de passe.',

    'faq.title': 'Questions Fréquentes',
    'faq.subtitle': 'Tout ce que vous devez savoir sur le chiffrement de fichiers dans votre navigateur.',
    'faq.q1': 'Mon fichier est-il vraiment privé et jamais téléversé sur un serveur ?',
    'faq.a1':
      'Oui, à 100 %. Tous les calculs sont exécutés directement dans la mémoire de votre navigateur à l’aide de la Web Crypto API standardisée (window.crypto.subtle). Vous pouvez le vérifier via l’onglet Réseau ou en coupant votre connexion.',
    'faq.q2': 'Quel algorithme de chiffrement est utilisé ?',
    'faq.a2':
      'Nous utilisons AES-256-GCM avec des clés de 256 bits. La clé est dérivée par PBKDF2 avec SHA-256, 600 000 itérations et un sel cryptographique aléatoire de 16 octets, conformément aux recommandations de l’OWASP.',
    'faq.q3': 'Que se passe-t-il si j’oublie mon mot de passe ?',
    'faq.a3':
      'EncryptFile appliquant le principe du zéro-connaissance, votre mot de passe n’est jamais enregistré ni envoyé. En cas d’oubli, la récupération est mathématiquement impossible.',
    'faq.q4': 'Existe-t-il des limites de taille de fichier ?',
    'faq.a4':
      'Aucune limite côté serveur n’existe car aucun transfert n’a lieu. La seule contrainte est la mémoire vive (RAM) disponible sur votre appareil.',
    'faq.q5': 'Quelle est la structure du fichier chiffré .enc ?',
    'faq.a5':
      'Le fichier .enc généré est un conteneur binaire contenant un sel de 16 octets, un vecteur d’initialisation (IV) de 12 octets et le texte chiffré avec une balise d’authentification de 128 bits.',
    'faq.q6': 'Puis-je déchiffrer mes fichiers sur un autre appareil ?',
    'faq.a6':
      'Oui ! EncryptFile étant compatible avec tous les navigateurs récents sur Windows, macOS, Linux, iOS et Android, vos fichiers .enc peuvent être déchiffrés partout avec le mot de passe adéquat.',

    'support.title': 'Soutenez l’Open Source Indépendant',
    'support.desc':
      'EncryptFile est 100 % gratuit, respectueux de votre vie privée et sans publicité. Si cet outil vous a été utile, vous pouvez offrir un café au développeur.',
    'support.button': 'Offrez-moi un Café',

    'footer.rights': 'Tous droits réservés.',
    'footer.tagline': 'Chiffrement et Déchiffrement de Fichiers 100% dans le Navigateur.',
    'footer.disclaimer':
      'EncryptFile s’exécute exclusivement dans votre navigateur local. Aucune télémétrie, cookie ou donnée n’est collectée ni enregistrée.',

    'seo.title': 'EncryptFile | Chiffreur et Déchiffreur de Fichiers en Ligne Gratuit (AES-256)',
    'seo.description':
      'Protégez par mot de passe vos PDF, images, zips et documents dans votre navigateur avec le chiffrement AES-256-GCM. 100% privé, sans aucun envoi serveur.',
    'seo.keywords':
      'chiffreur de fichier, chiffrement de fichier en ligne, protéger pdf par mot de passe, chiffrement AES-256, chiffrement navigateur, déchiffrer fichier en ligne',
  },

  ja: {
    'nav.title': 'EncryptFile',
    'nav.tagline': 'ブラウザ完結セキュリティ',
    'nav.support': '開発者を支援する',
    'nav.themeToggle': 'テーマ切り替え',
    'nav.features': '特徴',
    'nav.howItWorks': '使い方',
    'nav.faq': 'よくある質問',
    'nav.language': '言語',

    'hero.title': '無料オンラインファイル暗号化・復号ツール',
    'hero.subtitle':
      '軍用規格AES-256-GCM暗号化で大切なファイルをパスワード保護。処理は100%お使いのブラウザ内で完結し、サーバーへのアップロードは一切ありません。完全なプライバシーを保証します。',
    'hero.badge.clientSide': '100%ブラウザ処理',
    'hero.badge.zeroUploads': 'サーバー送信ゼロ',
    'hero.badge.encryption': 'AES-256-GCM + PBKDF2',
    'hero.badge.free': '完全無料・オープンソース',

    'workspace.tab.encrypt': 'ファイルを暗号化',
    'workspace.tab.decrypt': 'ファイルを復号',
    'workspace.dropzone.title': 'ここにファイルをドラッグ＆ドロップ',
    'workspace.dropzone.subtitle': 'またはクリックして端末から選択',
    'workspace.dropzone.supports': 'すべてのファイル形式に対応（PDF、画像、ZIP、Office、動画、音声）',
    'workspace.dropzone.selectedFile': '選択されたファイル',
    'workspace.dropzone.change': 'ファイルを変更',
    'workspace.dropzone.remove': '削除',
    'workspace.dropzone.size': 'サイズ',
    'workspace.password.labelEncrypt': '強力なパスワードを設定',
    'workspace.password.labelDecrypt': '復号パスワードを入力',
    'workspace.password.placeholderEncrypt': '安全なパスワードを入力...',
    'workspace.password.placeholderDecrypt': '元のパスワードを入力...',
    'workspace.password.show': 'パスワードを表示',
    'workspace.password.hide': 'パスワードを隠す',
    'workspace.password.confirmLabel': 'パスワードの再確認',
    'workspace.password.confirmPlaceholder': '確認のためもう一度入力...',
    'workspace.password.strength.label': 'パスワード強度',
    'workspace.password.strength.veryWeak': '非常に弱い',
    'workspace.password.strength.weak': '弱い',
    'workspace.password.strength.fair': '普通',
    'workspace.password.strength.strong': '強い',
    'workspace.password.strength.veryStrong': '非常に強い',
    'workspace.password.strength.tip': 'ヒント: 英大文字・小文字・数字・記号を組み合わせた12文字以上を推奨します。',
    'workspace.action.encrypt': 'ファイルを暗号化する',
    'workspace.action.decrypt': 'ファイルを復号する',
    'workspace.status.reading': 'ファイルをメモリに読み込み中...',
    'workspace.status.deriving': '256ビット暗号化キーを生成中（PBKDF2 600,000回計算）...',
    'workspace.status.encrypting': 'AES-256-GCMでファイルを暗号化中...',
    'workspace.status.decrypting': 'ファイルを復号し改ざん検証中...',
    'workspace.status.successEncrypt': 'ファイルの暗号化が完了しました！',
    'workspace.status.successDecrypt': 'ファイルの復号が完了しました！',
    'workspace.action.download': 'ファイルをダウンロード',
    'workspace.action.reset': '別のファイルを処理する',
    'workspace.error.noFile': '処理するファイルを選択またはドロップしてください。',
    'workspace.error.noPassword': 'パスワードを入力してください。',
    'workspace.error.passwordMismatch': 'パスワードが一致しません。入力内容をご確認ください。',
    'workspace.error.fileTooSmall': '選択されたファイルは有効なEncryptFileデータとして小さすぎます。',
    'workspace.error.decryptFailed': '復号に失敗しました。パスワードが誤っているか、ファイルが破損・改ざんされています。',
    'workspace.error.generic': '暗号化処理中にエラーが発生しました。',
    'workspace.securityNotice':
      'ゼロ知識プライバシー保証：パスワードやファイルがブラウザ外へ送信されることは決してありません。パスワードを紛失した場合、いかなる方法でも復元できません。',

    'features.title': 'EncryptFileが選ばれる理由',
    'features.subtitle': '最高水準の暗号化セキュリティ、プライバシー保護、ブラウザ本来の高速処理を実現。',
    'features.f1.title': '軍用レベルAES-256-GCM',
    'features.f1.desc':
      '改ざん検知機能を備えたGalois/Counter Mode認証付き暗号化を採用。600,000回のPBKDF2 SHA-256ハッシュ計算で総当たり攻撃を完全に防ぎます。',
    'features.f2.title': '100%クライアントサイド処理',
    'features.f2.desc':
      'ブラウザ標準のWeb Crypto APIのみを使用。機密ファイル、暗号化キー、パスワードがサーバーやクラウドに送られることは一切ありません。',
    'features.f3.title': 'あらゆるファイル形式・サイズに対応',
    'features.f3.desc':
      'PDF、写真、動画、ZIP、Office文書、ディスクイメージなど、拡張子の制限なくあらゆるファイルを保護できます。',
    'features.f4.title': 'インストール不要・オフライン動作',
    'features.f4.desc':
      '拡張機能やソフトのインストールは不要。一度ページを読み込めば、インターネット接続を切断した完全オフライン状態でも暗号化可能です。',

    'howItWorks.title': '3ステップで簡単暗号化',
    'howItWorks.subtitle': '誰でも迷わず使える直感的なセキュリティワークスペース。',
    'howItWorks.step1.title': '1. ファイルを選択',
    'howItWorks.step1.desc': '暗号化または復号したいファイルをドラッグ＆ドロップするか選択します。',
    'howItWorks.step2.title': '2. パスワードを設定',
    'howItWorks.step2.desc': '安全なパスワードを入力。端末上で600,000回のPBKDF2計算が実行されます。',
    'howItWorks.step3.title': '3. 安全なファイルを保存',
    'howItWorks.step3.desc': '生成された強固な .enc ファイルをダウンロード。同じパスワードでいつでも復号できます。',

    'faq.title': 'よくあるご質問 (FAQ)',
    'faq.subtitle': 'ブラウザ上でのファイル暗号化に関する安全性と仕組みについて。',
    'faq.q1': 'ファイルは本当にサーバーへ送信されませんか？',
    'faq.a1':
      'はい、完全にブラウザ内のみで処理されます。W3C標準のWeb Crypto API (window.crypto.subtle) を使用し、お使いの端末のメモリ上でのみ暗号化・復号を行います。ブラウザの開発者ツールでネットワーク通信を確認したり、オフラインで実行しても検証可能です。',
    'faq.q2': 'どのような暗号化アルゴリズムが使われていますか？',
    'faq.a2':
      '256ビット鍵長を持つAES-256-GCM（Galois/Counter Mode）を採用しています。鍵導出にはOWASP推奨基準に準拠し、ファイルごとに生成される16バイトの暗号学的乱数ソルト、SHA-256、600,000回のPBKDF2イテレーションを用いています。',
    'faq.q3': 'パスワードを忘れた場合、復元できますか？',
    'faq.a3':
      'いいえ、復元できません。EncryptFileは完全なゼロ知識設計であり、バックドアやパスワード保存の仕組みを持ちません。パスワードを紛失した場合、数学的にデータを復元することは不可能です。',
    'faq.q4': 'ファイルサイズに制限はありますか？',
    'faq.a4':
      'サーバーへのアップロードがないため、人為的なファイル制限はありません。お使いのパソコンやスマートフォンの空きメモリ（RAM）の範囲内であれば、数キロバイトから数ギガバイトのファイルまで処理可能です。',
    'faq.q5': '暗号化された .enc ファイルの構造はどうなっていますか？',
    'faq.a5':
      '生成される .enc ファイルは、先頭16バイトのランダムソルト、続く12バイトの初期化ベクトル（IV）、そして128ビット認証タグを含むAES-256-GCM暗号化データで構成されています。',
    'faq.q6': '別のパソコンやスマートフォンでも復号できますか？',
    'faq.a6':
      'はい、可能です。EncryptFileはWindows、macOS、Linux、iOS、Androidの主要ブラウザで動作するため、同じパスワードを入力すればどの端末からでも復号できます。',

    'support.title': 'オープンソース開発を支援する',
    'support.desc':
      'EncryptFileは完全無料・広告なし・プライバシー重視で提供されています。このツールがお役に立ちましたら、ぜひ開発者のサポート（コーヒーの寄付）をお願いいたします。',
    'support.button': '開発者にコーヒーをおごる',

    'footer.rights': 'All rights reserved.',
    'footer.tagline': '100% ブラウザ完結型ファイル暗号化・復号ツール',
    'footer.disclaimer':
      'EncryptFileは完全にお使いのローカルブラウザ環境でのみ動作します。テレメトリ、Cookie、ファイルデータ等の収集・保存は一切行いません。',

    'seo.title': 'EncryptFile | 無料オンラインファイル暗号化・復号ツール (AES-256)',
    'seo.description':
      'PDF、画像、ZIP、各種書類を軍用レベルのAES-256-GCMでブラウザ上で安全に暗号化。100%プライベート、サーバー送信一切なし。',
    'seo.keywords':
      'ファイル暗号化, オンラインファイル暗号化, PDF パスワード保護, AES-256 暗号化, ブラウザ暗号化, ファイル復号, Web Crypto API',
  },
} as const;

export type UIKey = keyof typeof ui[typeof defaultLang];

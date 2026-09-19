<div align="center">

# EncryptFile | Free Online File Encryptor & Decryptor

[![Live Demo](https://img.shields.io/badge/Live%20Demo-encryptfile.github.io-2A6B5C?style=for-the-badge&logo=googlechrome&logoColor=white)](https://encryptfile.github.io)
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Support-C49A45?style=for-the-badge&logo=buymeacoffee&logoColor=123F36)](https://buymeacoffee.com/kisharadilz)
[![License: MIT](https://img.shields.io/badge/License-MIT-123F36?style=for-the-badge)](LICENSE)

<br />

<img src="https://res.cloudinary.com/dpx6w78bt/image/upload/f_auto/q_auto/v1786342039/Online_Tool_rc1ybr.png" alt="EncryptFile Banner" width="100%" />

<br />
<br />

**An ultra-minimal, high-performance, 100% browser-based file encryption and decryption utility.**  
Password-protect any file (PDF, images, archives, video, documents) using military-grade **AES-256-GCM** encryption powered directly by the native **W3C Web Crypto API**.

**Zero server uploads. Zero telemetry. Zero cookies. 100% Client-Side Privacy.**

[🌐 Explore Live Utility](https://encryptfile.github.io) • [📖 Documentation](#cryptographic-architecture) • [☕ Support Developer](https://buymeacoffee.com/kisharadilz)

</div>

---

## 🌟 Key Highlights

- 🔒 **Military-Grade AES-256-GCM**: Authenticated Galois/Counter Mode encryption guarantees both data confidentiality and automatic tamper detection.
- 🛡️ **600,000 PBKDF2 Iterations**: Derives 256-bit keys using SHA-256 and unique 16-byte random salts, conforming to the latest OWASP security standards.
- ⚡ **100% Client-Side Execution**: All processing happens exclusively inside your browser's local memory (`window.crypto.subtle`). Files never leave your device.
- 📦 **Supports Any File Format & Size**: Encrypt PDFs, photos, videos, ZIP archives, spreadsheets, or disk images with zero arbitrary restrictions.
- ✈️ **Offline Capable**: Works without an internet connection. Once the static site is cached, you can disconnect your Wi-Fi and encrypt/decrypt completely offline.
- 🌍 **6-Language i18n Subpath Routing**: Complete native translations for English (`/`), Spanish (`/es/`), Portuguese (`/pt/`), German (`/de/`), French (`/fr/`), and Japanese (`/ja/`).
- 🎨 **Minimalist Security Theme**: Custom palette (`#123F36`, `#2A6B5C`, `#C49A45`, `#E8DCC4`) with high-contrast light and dark modes and an inline anti-FOUC script.
- 📱 **Mobile & Tablet Optimized**: Responsive sticky top navbar featuring a clean icon-only mode for touch viewports.
- 🚀 **100% Technical SEO**: Triple JSON-LD schemas (`WebApplication`, `HowTo`, `FAQPage`, `BreadcrumbList`, `Organization`), 7 bidirectional `hreflang` alternates, and XML sitemaps.

---

## 🔐 Cryptographic Architecture

EncryptFile strictly adheres to modern cryptographic standards and zero-knowledge principles.

```
+-------------------------------------------------------------------------------+
|                       ENCRYPTFILE CONTAINER STRUCTURE (.enc)                  |
+---------------------+---------------------+-----------------------------------+
|  16 Bytes: Salt     |   12 Bytes: IV      | Variable Length: AES-GCM Payload  |
|  (Random PBKDF2)    |   (Random GCM IV)   | (Ciphertext + 128-bit Auth Tag)   |
+---------------------+---------------------+-----------------------------------+
 0                   15 16                 27 28                             EOF
```

### 1. Key Derivation (`PBKDF2`)
- **Algorithm**: `PBKDF2` (Password-Based Key Derivation Function 2)
- **Hash Function**: `SHA-256`
- **Iteration Count**: `600,000` rounds (OWASP recommended standard)
- **Salt**: 16 bytes generated cryptographically via `crypto.getRandomValues(new Uint8Array(16))`
- **Derived Key**: 256-bit AES-GCM `CryptoKey`

### 2. Authenticated Encryption (`AES-256-GCM`)
- **Cipher**: `AES-GCM` (Galois/Counter Mode)
- **Initialization Vector (IV)**: 12 bytes generated via `crypto.getRandomValues(new Uint8Array(12))`
- **Authentication Tag**: 128-bit GCM authentication tag appended automatically to the ciphertext
- **Output Container**:
  - Bytes `0..15`: 16-byte random salt
  - Bytes `16..27`: 12-byte random IV
  - Bytes `28..end`: AES-256-GCM ciphertext + 128-bit authentication tag
  - Saved as: `filename.extension.enc`

### 3. Authenticated Decryption
- Reads the front 28 bytes of the uploaded `.enc` container to extract the original 16-byte salt and 12-byte IV.
- Re-derives the 256-bit `CryptoKey` using the provided password and extracted salt.
- Decrypts and authenticates via `crypto.subtle.decrypt()`.
- **Integrity Validation**: If an incorrect password is typed or a single bit of the file has been tampered with, the AES-GCM authentication tag verification will fail with an `OperationError`. EncryptFile immediately catches this and alerts the user.

---

## 🛠️ Technical Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Astro 5](https://astro.build/) (Static Site Generation mode) |
| **UI Components** | [React 19](https://react.dev/) (Hydrated Astro Islands with `client:load`) |
| **Cryptography** | Standard W3C [Web Crypto API](https://www.w3.org/TR/WebCryptoAPI/) (`crypto.subtle`) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) with class-based dark mode (`darkMode: 'class'`) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Type Safety** | TypeScript 5 |
| **CI/CD** | GitHub Actions (`actions/deploy-pages@v4`) |
| **Deployment** | [GitHub Pages](https://pages.github.com/) |

---

## 🎨 Theme Color Palette

| Name | Hex Code | Purpose |
| :--- | :---: | :--- |
| **Brand Dark** | `#123F36` | Primary brand authority, dark panels, primary light-mode buttons |
| **Brand Teal** | `#2A6B5C` | Interactive highlights, active tabs, focus rings, dark-mode buttons |
| **Brand Gold** | `#C49A45` | Support the Developer CTA, security badges, accent highlights |
| **Brand Sand** | `#E8DCC4` | Subtle borders, light-mode warm neutral surface accents |
| **Dark Page BG** | `#081412` | Deep forest dark background for high-contrast dark mode |
| **Light Page BG** | `#FBF9F5` | Crisp, warm cream light-mode background |

---

## 🌐 Multi-Language Subpath Routing

EncryptFile provides 100% native translations with zero placeholders across 6 global languages:

| Locale | Language | Subpath Route | Status |
| :---: | :--- | :--- | :---: |
| `en` | **English** | `https://encryptfile.github.io/` | Default |
| `es` | **Español** | `https://encryptfile.github.io/es/` | Complete |
| `pt` | **Português** | `https://encryptfile.github.io/pt/` | Complete |
| `de` | **Deutsch** | `https://encryptfile.github.io/de/` | Complete |
| `fr` | **Français** | `https://encryptfile.github.io/fr/` | Complete |
| `ja` | **日本語** | `https://encryptfile.github.io/ja/` | Complete |

Includes full bidirectional `hreflang` alternate tags in `<head>` plus `x-default`, and a Google-compliant XML sitemap.

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- **Node.js**: `v20+` or `v22+` (v24 tested)
- **npm**: `v10+` or `v11+`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/encryptfile/encryptfile.github.io.git
cd encryptfile.github.io

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit `http://localhost:4321` in your browser.

### Building for Production

```bash
# Typecheck and build static HTML output to dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Project Structure

```
encryptfile.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Pages CI/CD workflow
├── public/
│   ├── favicon.svg              # Scalable SVG brand shield icon
│   ├── robots.txt               # Crawler directives & sitemap link
│   └── sitemap.xml              # Multilingual XML sitemap with hreflang
├── src/
│   ├── components/
│   │   ├── CryptoWorkspace.tsx  # React Island: Web Crypto PBKDF2/AES-GCM engine
│   │   ├── Features.astro       # 4 security pillars
│   │   ├── Faq.astro            # Interactive animated FAQ accordion
│   │   ├── Footer.astro         # Minimalist footer with locale links
│   │   ├── Header.astro         # Responsive sticky header (icon-only on mobile)
│   │   ├── HowItWorks.astro     # 3-step visual workflow
│   │   ├── LanguagePicker.astro # Route-preserving language switcher dropdown
│   │   └── ThemeToggle.astro    # Accessible dark/light mode toggle
│   ├── i18n/
│   │   ├── ui.ts                # Complete 6-language translation dictionaries
│   │   └── utils.ts             # i18n route handlers & path utilities
│   ├── layouts/
│   │   └── Layout.astro         # Master HTML, anti-FOUC, 5 schemas, OpenGraph, GA4
│   ├── pages/
│   │   ├── [lang]/
│   │   │   └── index.astro      # Subpath dynamic SSG routes (/es/, /pt/, etc.)
│   │   ├── 404.astro            # Branded 404 error page
│   │   └── index.astro          # Root English entrypoint (/)
│   └── styles/
│       └── global.css           # Tailwind base styles and custom scrollbars
├── .gitignore                   # Comprehensive ignore rules
├── astro.config.mjs             # Astro 5 configuration with i18n routing
├── package.json                 # Project dependencies & scripts
├── tailwind.config.mjs          # Security theme color palette tokens
└── tsconfig.json                # Strict TypeScript configuration
```

---

## 🔒 Zero-Knowledge Privacy Guarantee

- **No Server Processing**: Files selected in the tool are read exclusively into your device's RAM memory and encrypted/decrypted on your CPU/GPU.
- **No Password Retention**: Your password is never logged, cached, or transmitted over any network.
- **Unrecoverable if Lost**: Because no backdoor exists, it is mathematically impossible to recover an encrypted file if the password is forgotten.

---

## ☕ Support the Developer

If EncryptFile saved you time or protected your confidential documents, consider supporting continued open-source development:

<div align="left">
  <a href="https://buymeacoffee.com/kisharadilz" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="50" width="210" />
  </a>
</div>

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — free for personal and commercial use.

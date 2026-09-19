import { ui, defaultLang, languages, type SupportedLocale, type UIKey } from './ui';

export { languages, defaultLang, type SupportedLocale, type UIKey };

/**
 * Extracts the current locale from the Astro URL.
 */
export function getLangFromUrl(url: URL): SupportedLocale {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) {
    return lang as SupportedLocale;
  }
  return defaultLang;
}

/**
 * Provides a type-safe translation helper for a given locale.
 */
export function useTranslations(lang: SupportedLocale) {
  return function t(key: UIKey): string {
    const localeDict = ui[lang] as Record<string, string>;
    const defaultDict = ui[defaultLang] as Record<string, string>;

    return localeDict[key] ?? defaultDict[key] ?? key;
  };
}

/**
 * Generates properly localized pathnames for internal links.
 */
export function useTranslatedPath(lang: SupportedLocale) {
  return function translatePath(path: string = '/'): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;

    if (lang === defaultLang) {
      return cleanPath;
    }

    if (cleanPath === '/') {
      return `/${lang}/`;
    }

    return `/${lang}${cleanPath}`;
  };
}

/**
 * Given the current URL and a target locale, computes the localized equivalent URL.
 */
export function getTargetLocaleUrl(currentUrl: URL, targetLang: SupportedLocale): string {
  const currentLang = getLangFromUrl(currentUrl);
  let pathname = currentUrl.pathname;

  // Strip current language prefix if non-default
  if (currentLang !== defaultLang) {
    const prefix = `/${currentLang}`;
    if (pathname.startsWith(prefix)) {
      pathname = pathname.slice(prefix.length) || '/';
    }
  }

  // Format new pathname
  let newPath: string;
  if (targetLang === defaultLang) {
    newPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  } else {
    newPath = `/${targetLang}${pathname.startsWith('/') ? pathname : `/${pathname}`}`;
  }

  // Ensure trailing slash on root-level directory routes
  if (newPath === `/${targetLang}`) {
    newPath = `/${targetLang}/`;
  }

  return `${newPath}${currentUrl.search}${currentUrl.hash}`;
}

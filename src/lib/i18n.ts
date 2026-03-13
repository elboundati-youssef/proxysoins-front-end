export type Locale = "fr" | "ar" | "en" | "es";

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  ar: "العربية",
  en: "English",
  es: "Español",
};

export const rtlLocales: Locale[] = ["ar"];

export const isRtl = (locale: Locale) => rtlLocales.includes(locale);

// Split translations into separate files for maintainability
import { fr } from "./i18n/fr";
import { ar } from "./i18n/ar";
import { en } from "./i18n/en";
import { es } from "./i18n/es";

export const translations: Record<Locale, Record<string, string>> = { fr, ar, en, es };

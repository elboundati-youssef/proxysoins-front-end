import { useState, useCallback, useEffect } from "react";
import { type Locale, translations, isRtl } from "@/lib/i18n";

export function useI18n() {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem("proxysoins-locale");
    return (saved as Locale) || "fr";
  });

  const t = useCallback(
    (key: string) => translations[locale]?.[key] || key,
    [locale]
  );

  const changeLocale = useCallback((newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("proxysoins-locale", newLocale);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("dir", isRtl(locale) ? "rtl" : "ltr");
    html.setAttribute("lang", locale);
  }, [locale]);

  return { locale, t, changeLocale, isRtl: isRtl(locale) };
}

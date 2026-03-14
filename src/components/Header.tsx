import { useState } from "react";
import { Globe, Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { type Locale, localeNames } from "@/lib/i18n";

interface HeaderProps {
  t: (key: string) => string;
  locale: Locale;
  changeLocale: (locale: Locale) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export function Header({ t, locale, changeLocale, isDark, toggleTheme }: HeaderProps) {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { key: "nav.home", href: "#" },
    { key: "nav.about", href: "#about" },
    { key: "nav.services", href: "#services" },
    { key: "nav.contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-4 lg:mx-8 mt-3">
        <div className="glass-card rounded-2xl">
          <div className="container mx-auto flex items-center justify-between h-16 px-5">
            {/* Logo */}
            <a href="#" className="flex items-center gap-1.5 font-extrabold text-xl tracking-tight">
              <span className="text-gradient">Proxy</span>
              <span className="text-foreground">Soins</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-all"
                >
                  {t(link.key)}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1.5">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-all"
                >
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline text-xs">{localeNames[locale]}</span>
                  <ChevronDown className="w-3 h-3 hidden sm:block" />
                </button>
                {langOpen && (
                  <div className="absolute end-0 top-full mt-2 w-44 rounded-2xl bg-card shadow-elevated border border-border overflow-hidden p-1.5">
                    {(Object.keys(localeNames) as Locale[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => { changeLocale(l); setLangOpen(false); }}
                        className={`w-full text-start px-4 py-2.5 rounded-xl text-sm transition-all ${
                          l === locale
                            ? "text-primary font-semibold bg-accent"
                            : "text-foreground hover:bg-accent/60"
                        }`}
                      >
                        {localeNames[l]}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-all"
              >
                {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
              </button>

              {/* CTA */}
              <a
                href="http://proxysoins.ma/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold hero-gradient-bg text-primary-foreground hover:opacity-90 hover:scale-[1.03] transition-all active:scale-[0.98] shadow-soft"
              >
                {t("nav.cta")}
              </a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2.5 rounded-xl text-muted-foreground hover:bg-accent/60 transition-all"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="md:hidden border-t border-border px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-accent/60 transition-all"
                >
                  {t(link.key)}
                </a>
              ))}
              <a
                href="http://proxysoins.ma/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center mt-2 px-4 py-3 rounded-xl text-sm font-semibold hero-gradient-bg text-primary-foreground"
              >
                {t("nav.cta")}
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

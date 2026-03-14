import { useState } from "react";
import { Globe, Sun, Moon, Menu, X } from "lucide-react";
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
    <header className="fixed top-0 inset-x-0 z-50 glass-card">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 font-bold text-xl tracking-tight">
          <span className="text-gradient">Proxy</span>
          <span className="text-foreground">Soins</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:bottom-0 after:start-0 after:w-0 after:h-0.5 after:hero-gradient-bg after:transition-all hover:after:w-full"
            >
              {t(link.key)}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{localeNames[locale]}</span>
            </button>
            {langOpen && (
              <div className="absolute end-0 top-full mt-1 w-40 rounded-xl bg-card shadow-elevated border border-border overflow-hidden">
                {(Object.keys(localeNames) as Locale[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { changeLocale(l); setLangOpen(false); }}
                    className={`w-full text-start px-4 py-2.5 text-sm hover:bg-accent transition-colors ${
                      l === locale ? "text-primary font-semibold bg-accent" : "text-foreground"
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
            className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* CTA */}
          <a
            href="http://proxysoins.ma/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold hero-gradient-bg text-primary-foreground hover:opacity-90 hover:scale-105 transition-all"
          >
            {t("nav.cta")}
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl text-muted-foreground hover:bg-accent"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-foreground hover:bg-accent transition-colors"
            >
              {t(link.key)}
            </a>
          ))}
          <a
            href="http://proxysoins.ma/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-4 py-2.5 rounded-xl text-sm font-semibold hero-gradient-bg text-primary-foreground"
          >
            {t("nav.cta")}
          </a>
        </div>
      )}
    </header>
  );
}

interface FooterProps {
  t: (key: string) => string;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-bold text-xl">
              <span className="text-gradient">Proxy</span>
              <span className="text-secondary">Soins</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t("nav.services")}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{t("footer.legal")}</p>
              <p>{t("footer.privacy")}</p>
              <p>{t("footer.terms")}</p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t("footer.followUs")}</h4>
            <div className="flex gap-3">
              {["Facebook", "Instagram", "YouTube"].map((s) => (
                <span
                  key={s}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  {s[0]}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} ProxySoins. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}

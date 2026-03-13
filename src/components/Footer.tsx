import { Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

interface FooterProps {
  t: (key: string) => string;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="font-bold text-2xl">
              <span className="text-gradient">Proxy</span>
              <span className="text-foreground">Soins</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              {t("footer.desc")}
            </p>
            <p className="text-xs text-muted-foreground">
              {t("footer.app")}
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t("footer.quickLinks")}</h4>
            <div className="space-y-2.5 text-sm text-muted-foreground">
              <a href="#about" className="block hover:text-foreground transition-colors">{t("nav.about")}</a>
              <a href="#services" className="block hover:text-foreground transition-colors">{t("nav.services")}</a>
              <a href="#contact" className="block hover:text-foreground transition-colors">{t("nav.contact")}</a>
              <p>{t("footer.legal")}</p>
              <p>{t("footer.privacy")}</p>
            </div>
          </div>

          {/* Contact & social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">{t("footer.callUs")}</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="tel:+212539331539" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                +212 5 39 33 15 39
              </a>
              <a href="tel:+212606060640" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                +212 6 06 06 06 40
              </a>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Tanger, Maroc</span>
              </div>
            </div>

            <h4 className="font-semibold text-foreground pt-2">{t("footer.followUs")}</h4>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map((s) => (
                <span
                  key={s.label}
                  className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:hero-gradient-bg hover:text-primary-foreground transition-all cursor-pointer hover:scale-110"
                >
                  <s.icon className="w-4 h-4" />
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

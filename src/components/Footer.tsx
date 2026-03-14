import { Phone, MapPin, Facebook, Instagram, Youtube, ArrowUpRight } from "lucide-react";

interface FooterProps {
  t: (key: string) => string;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute bottom-0 start-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[100px] -z-10" />
      <div className="absolute top-0 end-0 w-[300px] h-[300px] rounded-full bg-secondary/[0.03] blur-[100px] -z-10" />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-5">
            <div className="font-extrabold text-2xl">
              <span className="text-gradient">Proxy</span>
              <span className="text-foreground">Soins</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              {t("footer.desc")}
            </p>
            <p className="text-xs text-muted-foreground/70">
              {t("footer.app")}
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-5">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">{t("footer.quickLinks")}</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              {[
                { href: "#about", label: t("nav.about") },
                { href: "#services", label: t("nav.services") },
                { href: "#contact", label: t("nav.contact") },
              ].map((link) => (
                <a key={link.href} href={link.href} className="group flex items-center gap-1 hover:text-foreground transition-colors">
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                </a>
              ))}
              <p className="text-muted-foreground/60">{t("footer.legal")}</p>
              <p className="text-muted-foreground/60">{t("footer.privacy")}</p>
            </div>
          </div>

          {/* Contact & social */}
          <div className="space-y-5">
            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">{t("footer.callUs")}</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="tel:+212539331539" className="flex items-center gap-2.5 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                +212 5 39 33 15 39
              </a>
              <a href="tel:+212606060640" className="flex items-center gap-2.5 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                +212 6 06 06 06 40
              </a>
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Tanger, Maroc</span>
              </div>
            </div>

            <h4 className="font-bold text-foreground text-sm uppercase tracking-wider pt-2">{t("footer.followUs")}</h4>
            <div className="flex gap-2.5">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map((s) => (
                <span
                  key={s.label}
                  className="w-10 h-10 rounded-xl bg-muted/80 flex items-center justify-center text-muted-foreground hover:hero-gradient-bg hover:text-primary-foreground transition-all cursor-pointer hover:scale-110 hover:shadow-soft"
                >
                  <s.icon className="w-4 h-4" />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} ProxySoins. {t("footer.rights")}</span>
          <span className="text-xs text-muted-foreground/50">Made with ♥ in Tanger</span>
        </div>
      </div>
    </footer>
  );
}

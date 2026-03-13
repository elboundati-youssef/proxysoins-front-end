import { Home, Ambulance, Building2, Stethoscope, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface ServicesSectionProps {
  t: (key: string) => string;
}

export function ServicesSection({ t }: ServicesSectionProps) {
  const services = [
    { icon: Home, key: "home", itemsKey: "homeItems" },
    { icon: Ambulance, key: "transport", itemsKey: "transportItems" },
    { icon: Building2, key: "corporate", itemsKey: "corporateItems" },
    { icon: Stethoscope, key: "extra", itemsKey: "extraItems" },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              {t("services.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              {t("services.title")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s, i) => {
            const items = t(`services.${s.itemsKey}`).split("|");
            return (
              <ScrollReveal key={s.key} delay={i * 100}>
                <div className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 shadow-soft hover:shadow-elevated transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl hero-gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <s.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {t(`services.${s.key}`)}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

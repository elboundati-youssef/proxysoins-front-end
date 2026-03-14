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
    <section id="services" className="py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              {t("services.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              {t("services.title")}
            </h2>
          </div>
        </ScrollReveal>

        {/* Alternating feature showcase with large numbers */}
        <div className="space-y-16">
          {services.map((s, i) => {
            const items = t(`services.${s.itemsKey}`).split("|");
            const isReversed = i % 2 === 1;

            return (
              <ScrollReveal key={s.key} delay={i * 80}>
                <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 lg:gap-16 items-start`}>
                  {/* Number + Icon block */}
                  <div className="shrink-0 lg:w-1/3 flex items-start gap-5">
                    <span className="text-7xl font-black text-gradient leading-none select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="pt-2">
                      <div className="w-12 h-12 rounded-xl hero-gradient-bg flex items-center justify-center mb-3">
                        <s.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {t(`services.${s.key}`)}
                      </h3>
                    </div>
                  </div>

                  {/* Items as inline flow */}
                  <div className="flex-1">
                    <div className="bg-card rounded-2xl border border-border p-6 lg:p-8">
                      <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                        {items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-muted-foreground group/item">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                            <span className="text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

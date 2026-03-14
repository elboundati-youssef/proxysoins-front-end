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
    <section id="services" className="py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 start-0 w-[500px] h-[500px] rounded-full bg-secondary/[0.04] blur-3xl" />
        <div className="absolute top-0 end-0 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-tag mb-5">
              {t("services.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-5 tracking-tight">
              {t("services.title")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((s, i) => {
            const items = t(`services.${s.itemsKey}`).split("|");
            return (
              <ScrollReveal key={s.key} delay={i * 100}>
                <div className="group premium-card rounded-2xl p-8 lg:p-10 h-full gradient-border">
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-7">
                      <div className="icon-box icon-box-gradient w-12 h-12 rounded-xl">
                        <s.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {t(`services.${s.key}`)}
                      </h3>
                    </div>
                    <ul className="space-y-3.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-muted-foreground group/item">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5 transition-transform group-hover/item:scale-110" />
                          <span className="text-[0.938rem] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
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

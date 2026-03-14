import { Shield, LayoutGrid, Clock, Gauge, UserCog } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface WhySectionProps {
  t: (key: string) => string;
}

export function WhySection({ t }: WhySectionProps) {
  const reasons = [
    { icon: Shield, key: "comfort" },
    { icon: LayoutGrid, key: "offer" },
    { icon: Clock, key: "availability" },
    { icon: Gauge, key: "optimization" },
    { icon: UserCog, key: "personalized" },
  ];

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 end-0 w-[600px] h-[600px] rounded-full bg-primary/[0.03] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-tag mb-5">
              {t("why.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-5 tracking-tight">
              {t("why.title")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.key} delay={i * 80}>
              <div className="group glow-card rounded-2xl p-6 text-center h-full">
                <div className="relative z-10">
                  <div className="icon-box icon-box-soft w-14 h-14 mx-auto rounded-2xl mb-5">
                    <r.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {t(`why.${r.key}`)}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t(`why.${r.key}Desc`)}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              {t("why.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              {t("why.title")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.key} delay={i * 80}>
              <div className="group bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/30 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 mx-auto rounded-2xl hero-gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <r.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-1">
                  {t(`why.${r.key}`)}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {t(`why.${r.key}Desc`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

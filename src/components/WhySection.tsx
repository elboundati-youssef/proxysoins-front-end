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
    <section className="py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Heading */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-32 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                {t("why.tag")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
                {t("why.title")}
              </h2>
              <div className="w-20 h-1.5 rounded-full hero-gradient-bg" />
            </div>
          </ScrollReveal>

          {/* Right: Structured benefits list */}
          <div className="space-y-4">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.key} delay={i * 80}>
                <div className="group flex items-start gap-5 p-5 rounded-2xl border border-transparent hover:border-border hover:bg-card transition-all duration-300">
                  <div className="shrink-0 w-12 h-12 rounded-xl hero-gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <r.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-base font-bold text-foreground mb-1">
                      {t(`why.${r.key}`)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {t(`why.${r.key}Desc`)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

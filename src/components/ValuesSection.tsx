import { Ear, ShieldCheck, Handshake, Lightbulb } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface ValuesSectionProps {
  t: (key: string) => string;
}

export function ValuesSection({ t }: ValuesSectionProps) {
  const values = [
    { icon: Ear, key: "proximity", color: "from-primary to-primary/70" },
    { icon: ShieldCheck, key: "quality", color: "from-secondary to-secondary/70" },
    { icon: Handshake, key: "trust", color: "from-primary to-secondary" },
    { icon: Lightbulb, key: "innovation", color: "from-secondary to-primary" },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              {t("values.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
              {t("values.title")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.key} delay={i * 100}>
              <div className="group relative bg-card rounded-2xl p-8 text-center border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 shadow-soft">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${v.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <v.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t(`values.${v.key}`)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(`values.${v.key}Desc`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

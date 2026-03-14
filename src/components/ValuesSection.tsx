import { Ear, ShieldCheck, Handshake, Lightbulb } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface ValuesSectionProps {
  t: (key: string) => string;
}

export function ValuesSection({ t }: ValuesSectionProps) {
  const values = [
    { icon: Ear, key: "proximity" },
    { icon: ShieldCheck, key: "quality" },
    { icon: Handshake, key: "trust" },
    { icon: Lightbulb, key: "innovation" },
  ];

  // Bento box: first item spans 2 cols, rest are single
  return (
    <section className="py-28">
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

        {/* Bento asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
          {values.map((v, i) => {
            // Asymmetric: 0→span4, 1→span2, 2→span2, 3→span4
            const spanClass = i === 0 || i === 3
              ? "md:col-span-4"
              : "md:col-span-2";

            return (
              <ScrollReveal key={v.key} delay={i * 100} className={spanClass}>
                <div className="group relative h-full bg-card rounded-3xl p-8 border border-border hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                  {/* Gradient glow on hover */}
                  <div className="absolute inset-0 hero-gradient-bg opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-3xl" />
                  <div className="relative flex items-start gap-5">
                    <div className="shrink-0 w-14 h-14 rounded-2xl hero-gradient-bg flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <v.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div className="pt-1">
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {t(`values.${v.key}`)}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t(`values.${v.key}Desc`)}
                      </p>
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

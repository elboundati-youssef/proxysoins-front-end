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

  return (
    <section className="py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.03] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-tag mb-5">
              {t("values.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-5 tracking-tight">
              {t("values.title")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.key} delay={i * 100}>
              <div className="group glow-card rounded-2xl p-8 text-center h-full">
                <div className="relative z-10">
                  <div className="icon-box icon-box-soft w-16 h-16 mx-auto rounded-2xl mb-6">
                    <v.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {t(`values.${v.key}`)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`values.${v.key}Desc`)}
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

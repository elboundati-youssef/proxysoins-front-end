import { Award, ShieldCheck, GraduationCap } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface QualitySectionProps {
  t: (key: string) => string;
}

export function QualitySection({ t }: QualitySectionProps) {
  return (
    <section className="py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-3xl hero-gradient-bg opacity-[0.06]" />
            <div className="absolute inset-[1px] rounded-3xl bg-card" />
            <div className="absolute inset-0 rounded-3xl gradient-border" style={{ opacity: 0.4 }} />

            <div className="relative z-10 p-12 md:p-20">
              <div className="text-center max-w-3xl mx-auto space-y-8">
                <span className="section-tag">
                  {t("quality.tag")}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
                  {t("quality.title")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  {t("quality.desc")}
                </p>
                <div className="flex flex-wrap justify-center gap-6 pt-6">
                  {[
                    { icon: ShieldCheck, label: "Normes internationales" },
                    { icon: Award, label: "Équipements de pointe" },
                    { icon: GraduationCap, label: "Formation continue" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-muted/50 border border-border transition-all hover:border-primary/20 hover:bg-muted">
                      <div className="icon-box icon-box-gradient w-10 h-10 rounded-xl">
                        <item.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

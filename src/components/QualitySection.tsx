import { Award, ShieldCheck, GraduationCap } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface QualitySectionProps {
  t: (key: string) => string;
}

export function QualitySection({ t }: QualitySectionProps) {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-20">
            {/* Background */}
            <div className="absolute inset-0 hero-gradient-bg opacity-[0.07]" />
            <div className="absolute inset-0 gradient-border rounded-3xl" />

            <div className="relative z-10 text-center max-w-3xl mx-auto space-y-8">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                {t("quality.tag")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground">
                {t("quality.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("quality.desc")}
              </p>
              <div className="flex flex-wrap justify-center gap-8 pt-4">
                {[
                  { icon: ShieldCheck, label: "Normes internationales" },
                  { icon: Award, label: "Équipements de pointe" },
                  { icon: GraduationCap, label: "Formation continue" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg hero-gradient-bg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

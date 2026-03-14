import { Hospital, Award, UserCheck } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface AboutSectionProps {
  t: (key: string) => string;
}

export function AboutSection({ t }: AboutSectionProps) {
  const items = [
    { icon: Hospital, key: "alt1" },
    { icon: Award, key: "alt2" },
    { icon: UserCheck, key: "alt3" },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              {t("about.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
              {t("about.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("about.desc")}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-xl font-bold text-foreground mb-2">{t("about.mission")}</h3>
            <p className="text-muted-foreground">{t("about.missionDesc")}</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <ScrollReveal key={item.key} delay={i * 150}>
              <div className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border border-border gradient-border">
                <div className="w-14 h-14 rounded-xl hero-gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t(`about.${item.key}`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`about.${item.key}Desc`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

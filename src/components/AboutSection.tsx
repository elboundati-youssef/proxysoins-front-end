import { Hospital, Award, UserCheck, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface AboutSectionProps {
  t: (key: string) => string;
}

export function AboutSection({ t }: AboutSectionProps) {
  const items = [
    { icon: Hospital, key: "alt1", accent: "from-primary to-secondary" },
    { icon: Award, key: "alt2", accent: "from-secondary to-primary" },
    { icon: UserCheck, key: "alt3", accent: "from-primary to-secondary" },
  ];

  return (
    <section id="about" className="py-28 relative">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 start-1/4 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-3xl" />
        <div className="absolute bottom-0 end-1/4 w-[400px] h-[400px] rounded-full bg-secondary/[0.03] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="section-tag mb-5">
              {t("about.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-5 mb-6 tracking-tight">
              {t("about.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("about.desc")}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="max-w-2xl mx-auto mb-20 text-center">
            <div className="inline-block px-6 py-4 rounded-2xl bg-muted/50 border border-border">
              <h3 className="text-lg font-bold text-foreground mb-1">{t("about.mission")}</h3>
              <p className="text-muted-foreground text-sm">{t("about.missionDesc")}</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, i) => (
            <ScrollReveal key={item.key} delay={i * 150}>
              <div className="group premium-card rounded-2xl p-8 lg:p-10 h-full gradient-border">
                <div className="relative z-10">
                  <div className="icon-box icon-box-gradient w-14 h-14 rounded-2xl mb-7">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {t(`about.${item.key}`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[0.938rem]">
                    {t(`about.${item.key}Desc`)}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>{t("nav.about")}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

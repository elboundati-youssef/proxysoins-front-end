import { Hospital, Award, UserCheck, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface AboutSectionProps {
  t: (key: string) => string;
}

export function AboutSection({ t }: AboutSectionProps) {
  return (
    <section id="about" className="py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Split-screen narrative */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <ScrollReveal>
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium">
                {t("about.tag")}
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
                {t("about.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("about.desc")}
              </p>
              <div className="pt-4">
                <a href="#services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  {t("services.tag")} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative">
              {/* Large decorative icon block */}
              <div className="relative bg-card rounded-3xl p-10 border border-border shadow-soft overflow-hidden">
                <div className="absolute top-0 end-0 w-40 h-40 hero-gradient-bg opacity-10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {t("about.mission")}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t("about.missionDesc")}
                </p>
                {/* Stacked items instead of card grid */}
                <div className="space-y-5">
                  {[
                    { icon: Hospital, key: "alt1" },
                    { icon: Award, key: "alt2" },
                    { icon: UserCheck, key: "alt3" },
                  ].map((item, i) => (
                    <div key={item.key} className="flex items-start gap-4 group">
                      <div className="shrink-0 w-11 h-11 rounded-xl hero-gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground mb-0.5">
                          {t(`about.${item.key}`)}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t(`about.${item.key}Desc`)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

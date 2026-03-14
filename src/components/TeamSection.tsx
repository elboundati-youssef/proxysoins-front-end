import { ScrollReveal } from "./ScrollReveal";
import { Stethoscope, HeartPulse, Siren } from "lucide-react";

interface TeamSectionProps {
  t: (key: string) => string;
}

const teamMembers = [
  {
    key: "doctors",
    icon: Stethoscope,
    img: "https://ams.proxysoins.ma/wp-content/uploads/2024/03/closeup-portrait-friendly-smiling-confident-muslim-female-doctor-1-683x1024.jpg",
  },
  {
    key: "nurses",
    icon: HeartPulse,
    img: "https://ams.proxysoins.ma/wp-content/uploads/2025/03/portrait-happy-biracial-male-doctor-reading-document-sunny-hospital-room-683x1024.jpg",
  },
  {
    key: "ambulances",
    icon: Siren,
    img: "https://ams.proxysoins.ma/wp-content/uploads/2025/03/doctor-using-stretcher-from-ambulance-outdoors-683x1024.jpg",
  },
];

export function TeamSection({ t }: TeamSectionProps) {
  return (
    <section className="py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 start-1/3 w-[500px] h-[500px] rounded-full bg-secondary/[0.04] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-tag mb-5">
              {t("team.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-5 mb-6 tracking-tight">
              {t("team.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {t("team.desc")}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-full hero-gradient-bg text-primary-foreground text-sm font-semibold shadow-elevated">
              {t("team.stat")}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {teamMembers.map((m, i) => (
            <ScrollReveal key={m.key} delay={i * 150}>
              <div className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2">
                <img
                  src={m.img}
                  alt={t(`team.${m.key}`)}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/10 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-center">
                  <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl glass-card backdrop-blur-xl">
                    <div className="icon-box icon-box-gradient w-8 h-8 rounded-lg">
                      <m.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="font-bold text-foreground text-sm">
                      {t(`team.${m.key}`)}
                    </span>
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

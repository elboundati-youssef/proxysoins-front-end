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
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              {t("team.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
              {t("team.title")}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("team.desc")}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full hero-gradient-bg text-primary-foreground text-sm font-semibold">
              {t("team.stat")}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((m, i) => (
            <ScrollReveal key={m.key} delay={i * 150}>
              <div className="group relative rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                <img
                  src={m.img}
                  alt={t(`team.${m.key}`)}
                  className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
                    <m.icon className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground text-sm">
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

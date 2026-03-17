import { Award, ShieldCheck, GraduationCap } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface QualitySectionProps {
  t: (key: string) => string;
}

export function QualitySection({ t }: QualitySectionProps) {
  const features = [
    // Retrait des offsets pour mobile (ils seront gérés dans le JSX pour Desktop uniquement)
    { icon: ShieldCheck, label: "Normes internationales" },
    { icon: Award, label: "Équipements de pointe" },
    { icon: GraduationCap, label: "Formation continue" },
  ];

  return (
    // Padding vertical ajusté pour mobile (py-16 au lieu de py-24)
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>

          {/* Conteneur principal : Paddings réduits sur mobile (p-6/p-8), variables CSS utilisées */}
          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden hero-gradient-bg shadow-elevated p-6 sm:p-8 md:p-16 lg:p-20">

            {/* Décoration d'arrière-plan : Taille réduite sur mobile pour ne pas déborder */}
            <ShieldCheck className="absolute -left-10 -bottom-10 md:-left-20 md:-bottom-20 w-[15rem] md:w-[30rem] h-[15rem] md:h-[30rem] text-primary-foreground opacity-[0.05] -rotate-12 pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/10 blur-[60px] md:blur-[100px] rounded-full pointer-events-none" />

            {/* Gap réduit sur mobile entre le texte et les cartes */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* Colonne Gauche : Texte (Centré sur mobile, aligné à gauche sur Desktop) */}
              <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-start flex flex-col items-center lg:items-start">
                {/* Badge utilisant le Design System */}
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-primary-foreground text-xs md:text-sm font-medium tracking-wider uppercase mb-6 md:mb-8 border border-white/30 shadow-sm">
                  <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary-foreground shrink-0" />
                  {t("quality.tag")}
                </span>

                {/* Titre responsive */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight md:leading-[1.1] mb-4 md:mb-6 tracking-tight">
                  {t("quality.title")}
                </h2>

                {/* Description responsive */}
                <p className="text-base md:text-lg lg:text-xl text-primary-foreground/90 leading-relaxed font-light whitespace-pre-line">
                  <span className="block md:hidden">
                    {t("quality.descMobile")}
                  </span>
                  <span className="hidden md:block">
                    {t("quality.desc")}
                  </span>
                </p>
              </div>

              {/* Colonne Droite : Cartes Glassmorphism */}
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 w-full">
                {features.map((item, index) => {
                  // L'asymétrie (offset) n'est appliquée QUE sur Desktop (md:)
                  const offsetClass = index === 1 ? "md:ml-12" : index === 2 ? "md:ml-6" : "md:ml-0";

                  return (
                    <div
                      key={item.label}
                      // Padding réduit sur mobile (p-4)
                      className={`group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-6 flex items-center gap-4 md:gap-6 hover:bg-white/20 transition-all duration-500 hover:-translate-y-1 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] ${offsetClass} w-full`}
                    >
                      {/* Boîte de l'icône : Plus petite sur mobile */}
                      <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-card text-primary flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <item.icon className="w-6 h-6 md:w-8 md:h-8" />
                      </div>

                      {/* Texte */}
                      <div>
                        {/* Taille de texte réduite sur mobile */}
                        <span className="text-base md:text-xl font-bold text-primary-foreground block mb-1">
                          {item.label}
                        </span>
                        {/* Ligne décorative */}
                        <div className="h-[2px] w-6 md:w-8 bg-white/50 group-hover:w-12 md:group-hover:w-16 transition-all duration-500 rounded-full" />
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
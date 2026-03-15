import { Hospital, Award, UserCheck, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface AboutSectionProps {
  t: (key: string) => string;
}

export function AboutSection({ t }: AboutSectionProps) {
  // Ajustement du padding vertical : py-16 sur mobile, py-28 sur desktop
  return (
    <section id="about" className="py-16 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 end-0 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full hero-gradient-bg opacity-[0.03] blur-3xl pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Gap réduit sur mobile (gap-12) pour éviter un trop grand vide entre les deux blocs */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Colonne Gauche : Le Récit */}
          <ScrollReveal>
            <div className="space-y-6 md:space-y-8 flex flex-col items-start">
              
              {/* Badge harmonisé avec ton design system (Hero) */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card gradient-border text-xs sm:text-sm font-medium text-foreground mb-2">
                <span className="w-2 h-2 rounded-full hero-gradient-bg shrink-0" />
                {t("about.tag")}
              </div>
              
              {/* Typographie fluide : text-3xl sur mobile, jusqu'à 5xl sur grand écran */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
                {t("about.title")}
              </h2>
              
              {/* Description plus lisible sur petit écran */}
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t("about.desc")}
              </p>
              
              {/* CTA Link */}
              <div className="pt-2 md:pt-6">
                <a 
                  href="#services" 
                  className="group inline-flex items-center gap-3 md:gap-4 text-foreground font-semibold transition-all"
                >
                  <span className="text-base md:text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:hero-gradient-bg transition-all duration-300">
                    {t("services.tag")}
                  </span>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center group-hover:border-transparent group-hover:hero-gradient-bg transition-all duration-300 shadow-sm shrink-0">
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-primary-foreground group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Colonne Droite : La Carte Mission */}
          <ScrollReveal delay={200}>
            <div className="relative">
              
              {/* Le blur derrière la carte est légèrement réduit sur mobile pour ne pas baver hors de l'écran */}
              <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-transparent via-primary/5 to-transparent rounded-[2rem] md:rounded-[2.5rem] blur-lg md:blur-xl -z-10 opacity-50" />

              {/* Padding interne adapté : p-6 sur mobile, p-12 sur desktop */}
              <div className="relative bg-card rounded-[2rem] md:rounded-3xl p-6 sm:p-8 md:p-12 border border-border shadow-elevated overflow-hidden group">
                
                <div className="absolute -top-12 -end-12 md:-top-24 md:-end-24 w-40 h-40 md:w-64 md:h-64 hero-gradient-bg opacity-[0.07] rounded-full blur-2xl md:blur-3xl transition-transform duration-700 group-hover:scale-150" />
                
                <div className="relative z-10 mb-8 md:mb-10">
                  <h3 className="text-xl md:text-3xl font-extrabold text-foreground mb-3 md:mb-4 tracking-tight">
                    {t("about.mission")}
                  </h3>
                  <div className="w-12 md:w-16 h-1 md:h-1.5 rounded-full hero-gradient-bg mb-4 md:mb-6" />
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {t("about.missionDesc")}
                  </p>
                </div>

                {/* Liste des avantages interactive - gap réduit sur mobile */}
                <div className="space-y-2 md:space-y-3 relative z-10">
                  {[
                    { icon: Hospital, key: "alt1" },
                    { icon: Award, key: "alt2" },
                    { icon: UserCheck, key: "alt3" },
                  ].map((item, i) => (
                    <div 
                      key={item.key} 
                      /* Padding réduit (p-3 au lieu de p-4) sur mobile pour laisser plus de place au texte */
                      className="flex items-start gap-4 md:gap-5 p-3 md:p-4 rounded-xl md:rounded-2xl border border-transparent hover:border-border hover:bg-background/50 transition-all duration-300 group/item cursor-default"
                    >
                      {/* Icône légèrement redimensionnée pour mobile */}
                      <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-accent flex items-center justify-center group-hover/item:hero-gradient-bg transition-colors duration-500 shadow-sm">
                        <item.icon className="w-5 h-5 md:w-6 md:h-6 text-foreground group-hover/item:text-primary-foreground transition-colors duration-500" />
                      </div>
                      <div className="pt-0.5 md:pt-1">
                        <h4 className="text-base md:text-lg font-bold text-foreground mb-0.5 md:mb-1 group-hover/item:text-gradient transition-all duration-300">
                          {t(`about.${item.key}`)}
                        </h4>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
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
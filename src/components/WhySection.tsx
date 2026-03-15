import { Shield, LayoutGrid, Clock, Gauge, UserCog } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface WhySectionProps {
  t: (key: string) => string;
}

export function WhySection({ t }: WhySectionProps) {
  const reasons = [
    { icon: Shield, key: "comfort" },
    { icon: LayoutGrid, key: "offer" },
    { icon: Clock, key: "availability" },
    { icon: Gauge, key: "optimization" },
    { icon: UserCog, key: "personalized" },
  ];

  return (
    <section className="py-16 md:py-32 relative overflow-hidden bg-background">
      {/* Texture de fond */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02] pointer-events-none z-0" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Colonne Gauche : Titre (Sticky seulement sur Desktop) */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 relative z-20">
            {/* Halo lumineux réduit sur mobile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-[120%] md:h-[120%] bg-primary/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none -z-10" />
            
            <ScrollReveal>
              <div className="space-y-6 md:space-y-8 flex flex-col items-center text-center lg:items-start lg:text-start">
                {/* Badge harmonisé avec le design system */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card gradient-border text-xs sm:text-sm font-medium text-foreground mb-2">
                  <span className="w-2 h-2 rounded-full hero-gradient-bg shrink-0" />
                  {t("why.tag")}
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
                  {t("why.title")}
                </h2>
                
                <div className="w-20 h-1.5 rounded-full hero-gradient-bg relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-1/2 h-full bg-white/50 blur-[2px] animate-[translateX_2s_ease-in-out_infinite]" />
                </div>

                <p className="text-base md:text-xl text-muted-foreground font-light max-w-sm">
                  Des solutions pensées pour votre excellence. Découvrez ce qui fait notre différence.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Colonne Droite : Liste des cartes */}
          <div className="lg:col-span-7 space-y-4 md:space-y-8 relative z-10">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.key} delay={i * 100}>
                {/* Carte Premium : Adaptée pour mobile */}
                <div className="group relative bg-card/60 backdrop-blur-xl p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-elevated overflow-hidden flex flex-col sm:flex-row gap-5 md:gap-8 items-center sm:items-start text-center sm:text-start">
                  
                  {/* Numéro Filigrane réduit sur mobile */}
                  <div className="absolute -right-4 -top-4 md:-right-8 md:-top-8 text-6xl md:text-[10rem] font-black text-foreground/[0.03] md:text-foreground/[0.05] leading-none select-none group-hover:scale-110 group-hover:text-primary/10 transition-all duration-700 pointer-events-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Icône avec effet "Fill" */}
                  <div className="shrink-0 relative w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl hero-gradient-bg p-[1.5px] group-hover:-translate-y-1 transition-transform duration-500">
                    <div className="w-full h-full rounded-[calc(0.75rem-1.5px)] md:rounded-[calc(1rem-1.5px)] bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-500 relative z-10">
                      <r.icon className="w-7 h-7 md:w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Zone de Texte */}
                  <div className="relative z-10 flex-1">
                    <h3 className="text-lg md:text-2xl font-bold text-foreground mb-2 md:mb-3 tracking-tight group-hover:text-gradient transition-all duration-300">
                      {t(`why.${r.key}`)}
                    </h3>
                    <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                      {t(`why.${r.key}Desc`)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
        </div>
      </div>

      <style>{`
        @keyframes translateX {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
}
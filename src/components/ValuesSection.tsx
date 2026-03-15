import { Ear, ShieldCheck, Handshake, Lightbulb } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface ValuesSectionProps {
  t: (key: string) => string;
}

export function ValuesSection({ t }: ValuesSectionProps) {
  return (
    <section className="py-16 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full hero-gradient-bg opacity-[0.03] blur-2xl md:blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card gradient-border text-xs sm:text-sm font-medium text-foreground mb-4 md:mb-6">
              <span className="w-2 h-2 rounded-full hero-gradient-bg" />
              {t("values.tag")}
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
              {t("values.title")}
            </h2>
          </div>
        </ScrollReveal>

        {/* GRILLE BENTO CORRIGÉE : 
            L'ajout de md:grid-rows-2 et h-full sur les parents ScrollReveal 
            garantit que les cartes s'alignent parfaitement.
        */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 sm:gap-4 md:gap-8 md:grid-rows-2">
          
          {/* Carte 1 : Proximity */}
          <ScrollReveal delay={100} className="col-span-1 md:col-span-4 md:row-span-1 h-full">
            <div className="group h-full hero-gradient-bg rounded-2xl md:rounded-[2.5rem] p-5 md:p-10 relative overflow-hidden transition-all duration-300 hover:scale-[1.01] shadow-elevated flex flex-col justify-between min-h-[200px]">
              <Ear className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 w-32 h-32 md:w-64 md:h-64 text-primary-foreground opacity-10 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700" />
              
              <div className="relative z-10 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl glass-card border border-white/20 flex items-center justify-center mb-6 shadow-sm">
                <Ear className="w-5 h-5 md:w-7 md:h-7 text-primary-foreground" />
              </div>
              <div className="relative z-10">
                <h3 className="text-base md:text-3xl font-extrabold text-primary-foreground mb-1 md:mb-3 tracking-tight">
                  {t(`values.proximity`)}
                </h3>
                <p className="text-primary-foreground/90 text-xs md:text-lg max-w-lg leading-relaxed line-clamp-3 md:line-clamp-none">
                  {t(`values.proximityDesc`)}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Carte 2 : Quality */}
          <ScrollReveal delay={200} className="col-span-1 md:col-span-2 md:row-span-1 h-full">
            <div className="group h-full bg-card rounded-2xl md:rounded-[2.5rem] p-5 md:p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated flex flex-col justify-between min-h-[200px]">
              <div className="flex justify-end w-full mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-accent flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-base md:text-xl font-bold text-foreground mb-1 md:mb-2">
                  {t(`values.quality`)}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-none">
                  {t(`values.qualityDesc`)}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Carte 3 : Trust */}
          <ScrollReveal delay={300} className="col-span-1 md:col-span-2 md:row-span-1 h-full">
            <div className="group h-full bg-transparent rounded-2xl md:rounded-[2.5rem] p-5 md:p-8 border-2 border-dashed border-border hover:border-primary/50 hover:bg-card transition-all duration-300 flex flex-col justify-center items-center text-center min-h-[200px]">
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl hero-gradient-bg flex items-center justify-center mb-4 shadow-md group-hover:-translate-y-1 transition-transform duration-300">
                <Handshake className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-foreground mb-1 md:mb-2">
                {t(`values.trust`)}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-none">
                {t(`values.trustDesc`)}
              </p>
            </div>
          </ScrollReveal>

          {/* Carte 4 : Innovation */}
          <ScrollReveal delay={400} className="col-span-1 md:col-span-4 md:row-span-1 h-full">
            <div className="group h-full bg-card rounded-2xl md:rounded-[2.5rem] p-5 md:p-10 border border-border relative overflow-hidden transition-all duration-300 hover:shadow-elevated flex items-center min-h-[200px]">
              <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-primary/5 blur-3xl rounded-full pointer-events-none group-hover:bg-primary/10 transition-colors duration-500" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4 md:gap-8">
                <div className="flex-1">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl border border-border bg-background flex items-center justify-center mb-4 md:mb-6">
                    <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                  </div>
                  <h3 className="text-base md:text-3xl font-extrabold text-gradient mb-1 md:mb-3 tracking-tight">
                    {t(`values.innovation`)}
                  </h3>
                  <p className="text-xs md:text-base text-muted-foreground leading-relaxed max-w-md line-clamp-3 md:line-clamp-none">
                    {t(`values.innovationDesc`)}
                  </p>
                </div>
                
                <div className="hidden md:flex w-32 h-32 shrink-0 items-center justify-center rounded-full border border-border relative">
                   <div className="absolute inset-2 rounded-full border border-dashed border-border animate-[spin_12s_linear_infinite]" />
                   <Lightbulb className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors duration-300 z-10" />
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
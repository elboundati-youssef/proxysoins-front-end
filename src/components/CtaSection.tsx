import { Phone, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface CtaSectionProps {
  t: (key: string) => string;
}

export function CtaSection({ t }: CtaSectionProps) {
  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          {/* Ajustement du padding : p-6 sur mobile, p-20 sur desktop */}
          <div className="relative rounded-3xl hero-gradient-bg p-6 sm:p-12 md:p-20 text-center overflow-hidden shadow-elevated">
            
            {/* Decorative - Halos réduits sur mobile pour éviter les taches de couleur */}
            <div className="absolute top-0 end-0 w-32 md:w-64 h-32 md:h-64 rounded-full bg-primary-foreground/10 blur-2xl md:blur-3xl" />
            <div className="absolute bottom-0 start-0 w-24 md:w-48 h-24 md:h-48 rounded-full bg-primary-foreground/5 blur-xl md:blur-2xl" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6 md:space-y-8">
              {/* Taille de police fluide : text-2xl sur mobile */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight">
                {t("cta.title")}
              </h2>
              
              <p className="text-sm sm:text-lg text-primary-foreground/80 leading-relaxed">
                {t("cta.subtitle")}
              </p>

              {/* Boutons : flex-col sur mobile (un sous l'autre), flex-row sur desktop */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="http://proxysoins.ma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-card text-foreground font-semibold hover:scale-105 transition-all shadow-elevated"
                >
                  {t("cta.button")}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+212606060640"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {t("cta.call")}
                </a>
              </div>

              {/* Numéros de téléphone mieux espacés sur mobile */}
              <p className="text-primary-foreground/70 text-xs sm:text-sm pt-2">
                +212 5 39 33 15 39 <span className="hidden sm:inline">|</span> <br className="sm:hidden" /> +212 6 06 06 06 40
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
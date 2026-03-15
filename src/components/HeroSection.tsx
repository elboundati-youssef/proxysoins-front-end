import heroImg from "@/assets/img 1-t.jpg";

interface HeroSectionProps {
  t: (key: string) => string;
}

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 md:pt-28 pb-10 md:pb-20 overflow-hidden">
      
      {/* Background decoration (réduit sur mobile pour éviter les bugs) */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 start-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 end-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[400px] md:h-[800px] rounded-full hero-gradient-bg opacity-[0.04] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Gap réduit drastiquement sur mobile (gap-6) pour coller l'image au texte */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          
          {/* Text Block - Centré sur mobile, aligné à gauche sur Desktop */}
          <div className="space-y-4 md:space-y-8 animate-fade-up flex flex-col items-center text-center lg:items-start lg:text-start">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full glass-card gradient-border text-xs md:text-sm font-medium text-foreground">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full hero-gradient-bg" />
              ProxySoins
            </div>
            
            {/* Taille de texte réduite et interligne resserré sur mobile */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
              {t("hero.title")}
              <br className="hidden sm:block" />
              <span className="text-gradient"> {t("hero.titleHighlight")}</span>
            </h1>
            
            <p className="text-sm md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              {t("hero.subtitle")}
            </p>
            
            {/* Boutons : Plus fins sur mobile, côte à côte si possible */}
            <div className="flex flex-row justify-center lg:justify-start gap-3 w-full sm:w-auto mt-2">
              <a
                href="http://proxysoins.ma/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold hero-gradient-bg text-primary-foreground hover:opacity-90 transition-all hover:scale-105 shadow-elevated flex-1 sm:flex-none"
              >
                {t("hero.cta1")}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-2.5 md:px-8 md:py-3.5 rounded-xl md:rounded-2xl text-sm md:text-base font-semibold border-2 border-border text-foreground hover:bg-accent transition-all hover:scale-105 flex-1 sm:flex-none"
              >
                {t("hero.cta2")}
              </a>
            </div>

            {/* Stats : Flex centré, tailles réduites pour tenir sur une ligne */}
            <div className="flex justify-center lg:justify-start gap-4 md:gap-8 pt-2 md:pt-4">
              {[
                { val: t("hero.stat1"), label: t("hero.stat1Label") },
                { val: t("hero.stat2"), label: t("hero.stat2Label") },
                { val: t("hero.stat3"), label: t("hero.stat3Label") },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3">
                  {i > 0 && <div className="w-px h-6 md:h-8 bg-border" />}
                  <div className={i > 0 ? "ps-1 md:ps-3" : ""}>
                    <div className="text-xl md:text-3xl font-extrabold text-gradient">{s.val}</div>
                    <div className="text-[9px] md:text-xs text-muted-foreground uppercase">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Block - C'est ici que la magie opère pour mobile */}
          <div className="relative flex justify-center animate-fade-up mt-2 lg:mt-0" style={{ animationDelay: "0.2s" }}>
            {/* max-w-[220px] restreint sévèrement la taille de l'image sur téléphone ! */}
            <div className="relative w-full max-w-[220px] sm:max-w-sm md:max-w-md">
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl hero-gradient-bg opacity-20 blur-xl md:blur-2xl scale-110" />
              
              {/* L'image nettoyée de tout commentaire interne */}
              <img
                src={heroImg}
                alt="ProxySoins - Expert médical"
                className="relative rounded-2xl md:rounded-3xl shadow-elevated w-full object-cover aspect-[4/5] md:aspect-[5/6]"
                loading="eager"
              />
              
              {/* Floating card - Éléments rétrécis et replacés à l'intérieur (-start-2 au lieu de -start-4) */}
              <div className="absolute -bottom-3 -start-2 md:-bottom-4 md:-start-4 glass-card rounded-xl md:rounded-2xl p-2 md:p-4 animate-float shadow-lg">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-6 h-6 md:w-10 md:h-10 rounded-full hero-gradient-bg flex items-center justify-center text-primary-foreground text-xs md:text-lg">✓</div>
                  <div>
                    <div className="text-[10px] md:text-sm font-semibold text-foreground">Certifié</div>
                    <div className="text-[8px] md:text-xs text-muted-foreground line-clamp-1">Standards internationaux</div>
                  </div>
                </div>
              </div>
              
              {/* Top floating card */}
              <div className="absolute -top-2 -end-2 md:-top-3 md:-end-3 glass-card rounded-xl md:rounded-2xl p-1.5 md:p-3 animate-float shadow-lg" style={{ animationDelay: "3s" }}>
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-5 h-5 md:w-8 md:h-8 rounded-md md:rounded-lg hero-gradient-bg flex items-center justify-center text-primary-foreground text-[10px] md:text-sm">♥</div>
                  <div className="text-[9px] md:text-xs font-semibold text-foreground pr-1">9+ pros</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
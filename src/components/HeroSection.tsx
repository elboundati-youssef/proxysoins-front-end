import heroImg from "@/assets/hero-doctor.jpg";

interface HeroSectionProps {
  t: (key: string) => string;
}

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 start-0 w-[600px] h-[600px] rounded-full hero-gradient-bg opacity-10 blur-3xl" />
        <div className="absolute bottom-0 end-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium">
              <span className="w-2 h-2 rounded-full hero-gradient-bg" />
              ProxySoins
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground">
              {t("hero.title")}
              <br />
              <span className="text-gradient">{t("hero.titleHighlight")}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="http://proxysoins.ma/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3.5 rounded-xl text-base font-semibold hero-gradient-bg text-primary-foreground hover:opacity-90 transition-all hover:scale-105 shadow-soft"
              >
                {t("hero.cta1")}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3.5 rounded-xl text-base font-semibold border-2 border-border text-foreground hover:bg-accent transition-all hover:scale-105"
              >
                {t("hero.cta2")}
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-extrabold text-gradient">9+</div>
                <div className="text-sm text-muted-foreground">Professionnels</div>
              </div>
              <div className="w-px bg-border" />
              <div>
                <div className="text-3xl font-extrabold text-gradient">24/7</div>
                <div className="text-sm text-muted-foreground">Disponibilité</div>
              </div>
              <div className="w-px bg-border" />
              <div>
                <div className="text-3xl font-extrabold text-gradient">360°</div>
                <div className="text-sm text-muted-foreground">Services</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl hero-gradient-bg opacity-20 blur-2xl scale-110" />
              <img
                src={heroImg}
                alt="ProxySoins - Expert médical"
                className="relative rounded-3xl shadow-elevated w-full object-cover aspect-[5/6]"
                loading="eager"
              />
              {/* Floating card */}
              <div className="absolute -bottom-4 -start-4 glass-card rounded-2xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full hero-gradient-bg flex items-center justify-center text-primary-foreground text-lg">✓</div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">Certifié</div>
                    <div className="text-xs text-muted-foreground">Standards internationaux</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

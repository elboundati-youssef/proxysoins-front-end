import heroImg from "@/assets/img 1-t.jpg";

interface HeroSectionProps {
  t: (key: string) => string;
}

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-28 md:pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 start-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 end-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full hero-gradient-bg opacity-[0.04] blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card gradient-border text-sm font-medium text-foreground">
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
                className="inline-flex items-center px-8 py-3.5 rounded-2xl text-base font-semibold hero-gradient-bg text-primary-foreground hover:opacity-90 transition-all hover:scale-105 shadow-elevated"
              >
                {t("hero.cta1")}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3.5 rounded-2xl text-base font-semibold border-2 border-border text-foreground hover:bg-accent transition-all hover:scale-105"
              >
                {t("hero.cta2")}
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              {[
                { val: t("hero.stat1"), label: t("hero.stat1Label") },
                { val: t("hero.stat2"), label: t("hero.stat2Label") },
                { val: t("hero.stat3"), label: t("hero.stat3Label") },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i > 0 && <div className="w-px h-8 bg-border" />}
                  <div className={i > 0 ? "ps-3" : ""}>
                    <div className="text-3xl font-extrabold text-gradient">{s.val}</div>
                    <div className="text-xs text-muted-foreground">{s.label}</div>
                  </div>
                </div>
              ))}
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
              {/* Top floating card */}
              <div className="absolute -top-3 -end-3 glass-card rounded-2xl p-3 animate-float" style={{ animationDelay: "3s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg hero-gradient-bg flex items-center justify-center text-primary-foreground text-sm">♥</div>
                  <div className="text-xs font-semibold text-foreground">9+ pros</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

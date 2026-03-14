import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/img 1-t.jpg";

interface HeroSectionProps {
  t: (key: string) => string;
}

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-28 md:pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 start-0 w-[600px] h-[600px] rounded-full bg-primary/[0.07] blur-[100px]" />
        <div className="absolute bottom-0 end-0 w-[500px] h-[500px] rounded-full bg-secondary/[0.07] blur-[100px]" />
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full hero-gradient-bg opacity-[0.03] blur-[120px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'radial-gradient(circle, hsl(225 85% 53%) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-8 animate-fade-up">
            <div className="section-tag">
              ProxySoins — {t("hero.stat3Label")}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold leading-[1.1] tracking-tight text-foreground">
              {t("hero.title")}
              <br />
              <span className="text-gradient">{t("hero.titleHighlight")}</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="http://proxysoins.ma/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold hero-gradient-bg text-primary-foreground hover:opacity-90 transition-all hover:scale-[1.03] shadow-elevated active:scale-[0.98]"
              >
                {t("hero.cta1")}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-base font-semibold border-2 border-border text-foreground hover:bg-accent hover:border-primary/20 transition-all hover:scale-[1.03] active:scale-[0.98]"
              >
                <Play className="w-4 h-4" />
                {t("hero.cta2")}
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-6">
              {[
                { val: t("hero.stat1"), label: t("hero.stat1Label") },
                { val: t("hero.stat2"), label: t("hero.stat2Label") },
                { val: t("hero.stat3"), label: t("hero.stat3Label") },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i > 0 && <div className="w-px h-10 bg-border" />}
                  <div className={i > 0 ? "ps-3" : ""}>
                    <div className="text-3xl lg:text-4xl font-extrabold text-gradient">{s.val}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full max-w-lg">
              {/* Glow */}
              <div className="absolute inset-0 rounded-[2rem] hero-gradient-bg opacity-15 blur-3xl scale-110 animate-pulse-soft" />

              <img
                src={heroImg}
                alt="ProxySoins - Expert médical"
                className="relative rounded-[2rem] shadow-elevated w-full object-cover aspect-[4/5] ring-1 ring-border"
                loading="eager"
              />

              {/* Bottom floating card */}
              <div className="absolute -bottom-4 -start-4 glass-card rounded-2xl p-4 animate-float shadow-card">
                <div className="flex items-center gap-3">
                  <div className="icon-box icon-box-gradient w-11 h-11 rounded-xl">
                    <span className="text-primary-foreground text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Certifié</div>
                    <div className="text-xs text-muted-foreground">Standards internationaux</div>
                  </div>
                </div>
              </div>

              {/* Top floating card */}
              <div className="absolute -top-3 -end-3 glass-card rounded-2xl p-3 animate-float shadow-card" style={{ animationDelay: "3s" }}>
                <div className="flex items-center gap-2.5">
                  <div className="icon-box icon-box-gradient w-9 h-9 rounded-lg">
                    <span className="text-primary-foreground text-sm">♥</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-foreground">9+ pros</div>
                    <div className="text-[10px] text-muted-foreground">Qualifiés</div>
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

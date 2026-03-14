import { Phone, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface CtaSectionProps {
  t: (key: string) => string;
}

export function CtaSection({ t }: CtaSectionProps) {
  return (
    <section id="contact" className="py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Full gradient bg */}
            <div className="absolute inset-0 hero-gradient-bg" />
            {/* Decorative shapes */}
            <div className="absolute top-0 end-0 w-80 h-80 rounded-full bg-primary-foreground/10 blur-[80px]" />
            <div className="absolute bottom-0 start-0 w-60 h-60 rounded-full bg-primary-foreground/5 blur-[60px]" />
            <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary-foreground/5 blur-[100px]" />
            {/* Pattern */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '32px 32px'
            }} />

            <div className="relative z-10 p-12 md:p-20 text-center">
              <div className="max-w-2xl mx-auto space-y-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground tracking-tight">
                  {t("cta.title")}
                </h2>
                <p className="text-lg text-primary-foreground/80 leading-relaxed">
                  {t("cta.subtitle")}
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-2">
                  <a
                    href="http://proxysoins.ma/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-card text-foreground font-semibold hover:scale-[1.03] transition-all shadow-elevated active:scale-[0.98]"
                  >
                    {t("cta.button")}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="tel:+212606060640"
                    className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-primary-foreground/25 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all hover:scale-[1.03] active:scale-[0.98]"
                  >
                    <Phone className="w-5 h-5" />
                    {t("cta.call")}
                  </a>
                </div>
                <p className="text-primary-foreground/60 text-sm font-medium">
                  +212 5 39 33 15 39 &nbsp;•&nbsp; +212 6 06 06 06 40
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import { Phone, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface CtaSectionProps {
  t: (key: string) => string;
}

export function CtaSection({ t }: CtaSectionProps) {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-3xl hero-gradient-bg p-12 md:p-20 text-center overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 end-0 w-64 h-64 rounded-full bg-primary-foreground/10 blur-3xl" />
            <div className="absolute bottom-0 start-0 w-48 h-48 rounded-full bg-primary-foreground/5 blur-2xl" />
            <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground">
                {t("cta.title")}
              </h2>
              <p className="text-lg text-primary-foreground/80">
                {t("cta.subtitle")}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="http://proxysoins.ma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-card text-foreground font-semibold hover:scale-105 transition-transform shadow-elevated"
                >
                  {t("cta.button")}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+212606060640"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {t("cta.call")}
                </a>
              </div>
              <p className="text-primary-foreground/70 text-sm">
                +212 5 39 33 15 39 | +212 6 06 06 06 40
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

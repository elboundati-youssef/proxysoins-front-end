import { ScrollReveal } from "./ScrollReveal";

interface PartnersSectionProps {
  t: (key: string) => string;
}

const partners = [
  { name: "Eurogate", src: "https://ams.proxysoins.ma/wp-content/uploads/2025/11/eurogate-1.webp" },
  { name: "RG", src: "https://ams.proxysoins.ma/wp-content/uploads/2025/11/rg-1.webp" },
  { name: "Marsa Maroc", src: "https://ams.proxysoins.ma/wp-content/uploads/2025/11/pngwing.com_-1-1024x173.webp" },
  { name: "Willemen", src: "https://ams.proxysoins.ma/wp-content/uploads/2025/11/willemen-1-1024x175.webp" },
  { name: "Partenaire", src: "https://ams.proxysoins.ma/wp-content/uploads/2025/11/c8f6c062-a4a4-477c-8596-fe13d875aa9f_removalai_preview.png" },
  { name: "TMSA", src: "https://ams.proxysoins.ma/wp-content/uploads/2025/11/tmsa-default-news-md-1.webp" },
  { name: "TMPA", src: "https://ams.proxysoins.ma/wp-content/uploads/2025/11/logo_tmpa-1.webp" },
  { name: "APM Terminals", src: "https://ams.proxysoins.ma/wp-content/uploads/2025/11/apm-terminals-logo-vector-2023-1.webp" },
  { name: "Partenaire 2", src: "https://ams.proxysoins.ma/wp-content/uploads/2025/11/images-1.webp" },
];

export function PartnersSection({ t }: PartnersSectionProps) {
  // Triple pour garantir un défilement infini sans trou sur les écrans très larges
  const allPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-16 md:py-24 overflow-hidden bg-background">
      <div className="container mx-auto px-4 lg:px-8 mb-16 md:mb-20">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
            {/* Tag harmonisé avec ton design system */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card gradient-border text-xs sm:text-sm font-medium text-foreground mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full hero-gradient-bg shrink-0" />
              {t("partners.tag")}
            </div>
            
            {/* Titre proportionnel au Hero */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
              {t("partners.title")}
            </h2>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee Container */}
      <div className="relative flex">
        {/* Masques de dégradé pour le fondu (Vignetting) */}
        <div className="absolute inset-y-0 start-0 w-20 md:w-64 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 end-0 w-20 md:w-64 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

        {/* Animation Marquee */}
        <div className="flex animate-marquee items-center gap-12 md:gap-20 w-max py-4">
          {allPartners.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex-shrink-0 h-12 md:h-16 w-32 md:w-48 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default"
            >
              <img
                src={p.src}
                alt={p.name}
                className="max-h-full max-w-full object-contain pointer-events-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Styles inline pour l'animation si non définie dans ton Tailwind config */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}
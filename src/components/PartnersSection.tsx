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
  const allPartners = [...partners, ...partners];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 mb-14">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <span className="section-tag mb-5">
              {t("partners.tag")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mt-5 tracking-tight">
              {t("partners.title")}
            </h2>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute inset-y-0 start-0 w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 end-0 w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee items-center gap-20 w-max py-4">
          {allPartners.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex-shrink-0 h-14 w-36 flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0"
            >
              <img
                src={p.src}
                alt={p.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

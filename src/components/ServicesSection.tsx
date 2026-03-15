import { Home, Ambulance, Building2, Stethoscope, CheckCircle2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

interface ServicesSectionProps {
  t: (key: string) => string;
}

export function ServicesSection({ t }: ServicesSectionProps) {
  const services = [
    { 
      icon: Home, 
      key: "home", 
      itemsKey: "homeItems",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80&w=1200"
    },
    { 
      icon: Ambulance, 
      key: "transport", 
      itemsKey: "transportItems",
      image: "https://www.centremjmedical.com/wp-content/uploads/2022/05/Transport-Medicalise-Par-Ambulance-Centre-Mj-Medical-Marrakech-1.jpg"
    },
    { 
      icon: Building2, 
      key: "corporate", 
      itemsKey: "corporateItems",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
    },
    { 
      icon: Stethoscope, 
      key: "extra", 
      itemsKey: "extraItems",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200"
    },
  ];

  return (
    // Padding vertical réduit sur mobile (py-16 au lieu de py-28)
    <section id="services" className="py-16 md:py-28 relative overflow-hidden">
      
      {/* Background decoration (Cohérent avec le Hero, réduit sur mobile) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] rounded-full hero-gradient-bg opacity-[0.03] blur-2xl md:blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header de la section aligné sur l'échelle globale */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-32 flex flex-col items-center">
            {/* Tag harmonisé avec le design system */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card gradient-border text-xs sm:text-sm font-medium text-foreground mb-4 md:mb-6">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full hero-gradient-bg" />
              {t("services.tag")}
            </span>
            
            {/* Titre responsive */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-foreground">
              {t("services.title")}
            </h2>
          </div>
        </ScrollReveal>

        {/* Liste des services en mode "Editorial Overlap" mis à l'échelle */}
        {/* Espacement entre les services réduit sur mobile (space-y-16) */}
        <div className="space-y-16 md:space-y-32">
          {services.map((s, i) => {
            const translationString = t(`services.${s.itemsKey}`);
            const items = typeof translationString === 'string' ? translationString.split("|") : [];
            
            // Alternance stricte Gauche / Droite
            const isReversed = i % 2 === 1;

            return (
              <ScrollReveal key={s.key} delay={100}>
                {/* Structure empilée (colonne) sur mobile, alternée sur desktop */}
                <div className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center relative`}>
                  
                  {/* BLOC 1 : L'Image */}
                  <div className="w-full lg:w-7/12 relative z-0 group px-2 sm:px-0">
                    {/* Aspect ratio plus carré sur mobile (4/3) pour que l'image ne prenne pas tout l'écran */}
                    <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-2xl md:rounded-3xl overflow-hidden shadow-elevated">
                      <img 
                        src={s.image} 
                        alt={t(`services.${s.key}`)}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Filtre utilisant la variable de couleur du Hero */}
                      <div className="absolute inset-0 hero-gradient-bg mix-blend-overlay opacity-40 group-hover:opacity-60 transition-opacity duration-700" />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                  </div>

                  {/* BLOC 2 : La Carte de Contenu */}
                  {/* Sur mobile : On la centre (-mt-8) pour qu'elle chevauche légèrement l'image par le bas */}
                  {/* Sur ordinateur : On applique l'asymétrie (lg:-ml-16 ou lg:-mr-16) */}
                  <div className={`w-[92%] sm:w-full lg:w-6/12 relative z-10 ${isReversed ? "lg:-mr-16" : "lg:-ml-16"} -mt-8 sm:-mt-12 lg:mt-0 mx-auto lg:mx-0`}>
                    
                    {/* Padding réduit sur mobile (p-5 sm:p-8) */}
                    <div className="bg-card/95 backdrop-blur-xl p-5 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-elevated border border-border relative overflow-hidden group/card hover:border-primary/40 transition-colors duration-500">
                      
                      {/* En-tête de la carte : Icône + Numéro */}
                      <div className="flex justify-between items-start mb-6 md:mb-8 relative z-10">
                        {/* Taille de l'icône réduite sur mobile */}
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl hero-gradient-bg text-primary-foreground flex items-center justify-center shadow-md group-hover/card:scale-110 group-hover/card:rotate-3 transition-transform duration-500">
                          <s.icon className="w-5 h-5 md:w-7 md:h-7" />
                        </div>
                        {/* Chiffre réduit sur mobile */}
                        <span className="text-4xl md:text-6xl font-extrabold text-muted-foreground/20 leading-none select-none">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Titre au format Hero */}
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground mb-4 md:mb-6 tracking-tight relative z-10">
                        {t(`services.${s.key}`)}
                      </h3>

                      {/* Liste des éléments */}
                      <ul className="space-y-2 md:space-y-3 relative z-10">
                        {items.map((item, idx) => (
                          item.trim() !== "" && (
                            <li key={idx} className="flex items-start gap-3 md:gap-4 text-muted-foreground group/item">
                              <div className="mt-0.5 md:mt-1 flex-shrink-0">
                                {/* Puce interactive alignée sur les variables */}
                                <div className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-border md:border-2 flex items-center justify-center group-hover/item:border-transparent group-hover/item:bg-primary transition-all duration-300">
                                  <CheckCircle2 className="w-2.5 h-2.5 md:w-3 md:h-3 text-transparent group-hover/item:text-primary-foreground transition-colors duration-300" />
                                </div>
                              </div>
                              {/* Taille de texte réduite sur mobile */}
                              <span className="text-sm md:text-base leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                                {item}
                              </span>
                            </li>
                          )
                        ))}
                      </ul>

                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
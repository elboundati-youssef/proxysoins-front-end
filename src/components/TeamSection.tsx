import { ScrollReveal } from "./ScrollReveal";
import { Stethoscope, HeartPulse, Siren } from "lucide-react";

interface TeamSectionProps {
  t: (key: string) => string;
}

const teamMembers = [
  {
    key: "doctors",
    icon: Stethoscope,
    img: "https://ams.proxysoins.ma/wp-content/uploads/2024/03/closeup-portrait-friendly-smiling-confident-muslim-female-doctor-1-683x1024.jpg",
  },
  {
    key: "nurses",
    icon: HeartPulse,
    img: "https://ams.proxysoins.ma/wp-content/uploads/2025/03/portrait-happy-biracial-male-doctor-reading-document-sunny-hospital-room-683x1024.jpg",
  },
  {
    key: "ambulances",
    icon: Siren,
    img: "https://ams.proxysoins.ma/wp-content/uploads/2025/03/doctor-using-stretcher-from-ambulance-outdoors-683x1024.jpg",
  },
];

export function TeamSection({ t }: TeamSectionProps) {
  return (
    // Padding ajusté pour mobile (py-16 au lieu de py-32)
    <section className="py-16 md:py-28 relative overflow-hidden">
      
      {/* Background decoration (Style Hero aligné) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full hero-gradient-bg opacity-[0.03] blur-2xl md:blur-3xl" />
      </div>

      {/* Texte Géant en Arrière-plan (Éditorial) - Discret et fluide */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full text-center overflow-hidden pointer-events-none z-0">
        <h2 className="text-[20vw] md:text-[15vw] font-black text-muted-foreground/5 leading-none whitespace-nowrap select-none">
          EXPERTISE
        </h2>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollReveal>
          {/* Espacements réduits sur mobile (mb-12 au lieu de mb-32) */}
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-24 flex flex-col items-center">
            
            {/* Tag harmonisé avec le design system (Hero) */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card gradient-border text-xs sm:text-sm font-medium text-foreground mb-4 md:mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full hero-gradient-bg shrink-0" />
              {t("team.tag")}
            </div>
            
            {/* Titre et description responsives */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-foreground mb-4 md:mb-6">
              {t("team.title")}
            </h2>
            <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
              {t("team.desc")}
            </p>
            
            {/* Bouton de statistique animé - Taille adaptée pour mobile */}
            <div className="mt-6 md:mt-8 inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 rounded-full hero-gradient-bg text-primary-foreground text-xs sm:text-sm font-bold shadow-elevated hover:scale-105 transition-transform duration-300">
              <span className="relative flex h-2 w-2 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-3 md:w-3 bg-white"></span>
              </span>
              {t("team.stat")}
            </div>
          </div>
        </ScrollReveal>

        {/* Grille Décalée (Staggered Grid) */}
        {/* Sur mobile: gap vertical léger. Sur Desktop: gap-8 avec grid-cols-3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-2 sm:px-0">
          {teamMembers.map((m, i) => {
             // Sur desktop, la carte du milieu descend (mt-16), les côtés montent (-mt-8)
             const isMiddle = i === 1;
             
             return (
              <ScrollReveal key={m.key} delay={i * 100}>
                {/* Sur mobile : Pas de marge négative compliquée, juste une carte classique.
                  Sur desktop : L'effet en "V" avec md:mt-16 et md:-mt-8 
                */}
                <div className={`group relative rounded-3xl md:rounded-[2.5rem] overflow-hidden ${isMiddle ? 'md:mt-16' : 'md:-mt-8'} transition-all duration-700 hover:-translate-y-2 hover:shadow-elevated`}>
                  
                  {/* Conteneur de l'image */}
                  {/* aspect-[4/5] sur mobile pour ne pas prendre tout l'écran, aspect-[3/4] sur desktop */}
                  <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-card border border-border">
                    <img
                      src={m.img}
                      alt={t(`team.${m.key}`)}
                      // Grayscale subtil par défaut, couleur au survol
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[20%] group-hover:grayscale-0"
                      loading="lazy"
                    />
                    
                    {/* Dégradé noir en bas pour que le texte (Glassmorphism) ressorte toujours */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                    
                    {/* Filtre de couleur du thème au survol */}
                    <div className="absolute inset-0 hero-gradient-bg mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                  </div>

                  {/* Contenu positionné sur l'image */}
                  {/* Sur mobile, le texte est toujours visible. Sur desktop, petit effet de translation */}
                  <div className="absolute bottom-0 inset-x-0 p-4 md:p-8 flex flex-col items-center justify-end md:translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    
                    {/* Pilule en Verre Dépoli (Glassmorphism) - Réduite sur mobile */}
                    <div className="flex items-center gap-3 md:gap-4 px-4 py-2 md:px-6 md:py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md group-hover:bg-white/20 transition-colors duration-500">
                      
                      {/* Pastille Icône */}
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center shadow-inner text-foreground">
                        <m.icon className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      
                      {/* Texte */}
                      <span className="font-bold text-white tracking-wide text-sm md:text-lg whitespace-nowrap">
                        {t(`team.${m.key}`)}
                      </span>
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
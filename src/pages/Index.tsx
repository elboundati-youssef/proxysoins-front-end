import { useI18n } from "@/hooks/useI18n";
import { useTheme } from "@/hooks/useTheme";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ValuesSection } from "@/components/ValuesSection";
import { QualitySection } from "@/components/QualitySection";
import { ServicesSection } from "@/components/ServicesSection";
import { TeamSection } from "@/components/TeamSection";
import { PartnersSection } from "@/components/PartnersSection";
import { WhySection } from "@/components/WhySection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  const { locale, t, changeLocale } = useI18n();
  const { isDark, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-background">
      {/* SEO TIP: Le Header contient souvent la navigation principale. 
        S'assurer qu'il utilise la balise <header> 
      */}
      <Header t={t} locale={locale} changeLocale={changeLocale} isDark={isDark} toggleTheme={toggle} />
      
      <main id="main-content">
        {/* SEO TIP: On peut envelopper certaines sections dans des balises <article> 
          si elles sont indépendantes, ou garder des <section> avec des IDs clairs.
        */}
        
        <HeroSection t={t} />
        
        {/* On regroupe parfois les sections de présentation pour que Google 
          comprenne que c'est le "corps" de ton argumentaire 
        */}
        <div className="relative">
          <AboutSection t={t} />
          <ValuesSection t={t} />
          <QualitySection t={t} />
        </div>

        <ServicesSection t={t} />
        <TeamSection t={t} />
        
        <div className="bg-muted/30 dark:bg-zinc-900/20">
          <PartnersSection t={t} />
          <WhySection t={t} />
        </div>

        <CtaSection t={t} />
      </main>

      <Footer t={t} />
    </div>
  );
};

export default Index;
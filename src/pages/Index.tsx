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
      <Header t={t} locale={locale} changeLocale={changeLocale} isDark={isDark} toggleTheme={toggle} />
      <main>
        <HeroSection t={t} />
        <AboutSection t={t} />
        <ValuesSection t={t} />
        <QualitySection t={t} />
        <ServicesSection t={t} />
        <TeamSection t={t} />
        <PartnersSection t={t} />
        <WhySection t={t} />
        <CtaSection t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
};

export default Index;

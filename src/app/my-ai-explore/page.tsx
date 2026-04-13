'use client';

import LiquidMetalHero from '@/components/ui/liquid-metal-hero';
import IASections from '@/components/ai-sections';
import { darkThemeStyle } from '@/lib/dark-theme';

export default function MyAIExplorePage() {

  const handleExploreClick = () => {
    const element = document.getElementById('ia-content-section');
    if (!element) {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      return;
    }
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="dark-theme" style={darkThemeStyle}>
      {/* Hero Section — has its own black bg + shader */}
      <LiquidMetalHero
        title={"Design in\nthe Age of AI"}
        subtitle="I share practical methodologies, Claude skills, and AI-native workflows — built from real projects, to help designers work better in the age of AI."
        primaryCtaLabel="Explore Below"
        secondaryCtaLabel="Back to Portfolio"
        secondaryCtaHref="/"
        onPrimaryCtaClick={handleExploreClick}
      />

      {/* IA Sections */}
      <div id="ia-content-section" className="pt-20" style={{ position: 'relative', zIndex: 2, background: '#0a0a0a' }}>
        <IASections />
      </div>

    </main>
  );
}

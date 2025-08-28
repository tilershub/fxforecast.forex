import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import RiskDisclaimer from './components/RiskDisclaimer';
import ValuePillars from './components/ValuePillars';
import FrameworkPreview from './components/FrameworkPreview';
import PositionCalculatorWidget from './components/PositionCalculatorWidget';
import SuccessMetrics from './components/SuccessMetrics';
import BlogPreview from './components/BlogPreview';
import SocialProof from './components/SocialProof';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <ValuePillars />
        <FrameworkPreview />
        <PositionCalculatorWidget />
        <SuccessMetrics />
        <BlogPreview />
        <SocialProof />
        <CTASection />
      </main>
      
      <Footer />
      <RiskDisclaimer />
    </div>
  );
};

export default Homepage;
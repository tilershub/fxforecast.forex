import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import FrameworkHero from './components/FrameworkHero';
import FrameworkOverview from './components/FrameworkOverview';
import DetailedBreakdown from './components/DetailedBreakdown';
import CaseStudies from './components/CaseStudies';
import ComparisonTable from './components/ComparisonTable';
import VideoTestimonials from './components/VideoTestimonials';
import ConversionSection from './components/ConversionSection';

const FrameworkDeepDive = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement?.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    document.getElementById('framework-overview')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <>
      <Helmet>
        <title>OUR Framework Deep Dive - Systematic Trading Methodology | FXFORECAST</title>
        <meta 
          name="description" 
          content="Master the complete OUR Framework methodology. Transform forex trading from gambling into systematic business practice with our proven approach to FTMO challenges." 
        />
        <meta name="keywords" content="OUR Framework, systematic trading, FTMO challenge, forex methodology, trading system, risk management" />
        <meta property="og:title" content="OUR Framework Deep Dive - Systematic Trading Methodology" />
        <meta property="og:description" content="Complete breakdown of the OUR Framework with interactive elements, case studies, and implementation guides." />
        <meta property="og:type" content="article" />
        <link rel="canonical" href="https://fxforecast.com/framework-deep-dive" />
      </Helmet>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <FrameworkHero onGetStarted={handleGetStarted} />
          <FrameworkOverview />
          <DetailedBreakdown />
          <CaseStudies />
          <ComparisonTable />
          <VideoTestimonials />
          <ConversionSection />
        </main>

        {/* Risk Disclaimer */}
        <div className="bg-muted border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Risk Warning:</strong> Trading foreign exchange and contracts for difference carries a high level of risk 
                and may not be suitable for all investors. Past performance does not guarantee future results. 
                The OUR Framework is an educational methodology and does not constitute financial advice.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-foreground text-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-brand-royal rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">FX</span>
                </div>
                <span className="text-xl font-bold">FXFORECAST</span>
              </div>
              
              <p className="text-background/80 mb-6">
                Transforming forex trading through systematic methodology and disciplined execution.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-background/60">
                <span>© {new Date()?.getFullYear()} FXFORECAST</span>
                <span>•</span>
                <span>Educational Content Only</span>
                <span>•</span>
                <span>Not Financial Advice</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FrameworkDeepDive;
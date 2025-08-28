import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import PreparationChecklist from './components/PreparationChecklist';
import ChallengeDetails from './components/ChallengeDetails';
import FrameworkSummary from './components/FrameworkSummary';
import TrustElements from './components/TrustElements';
import SocialProof from './components/SocialProof';
import ContactSupport from './components/ContactSupport';

const FTMOAffiliateGateway = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [redirectCountdown, setRedirectCountdown] = useState(null);

  const handleFTMORedirect = () => {
    setIsLoading(true);
    
    // Simulate loading state
    setTimeout(() => {
      setIsLoading(false);
      setRedirectCountdown(5);
      
      // Countdown timer
      const countdownInterval = setInterval(() => {
        setRedirectCountdown(prev => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            // Redirect to FTMO with affiliate parameters
            const ftmoUrl = 'https://ftmo.com/?affilid=fxforecast&utm_source=fxforecast&utm_medium=affiliate&utm_campaign=our_framework';
            window.open(ftmoUrl, '_blank');
            setRedirectCountdown(null);
            return null;
          }
          return prev - 1;
        });
      }, 1000);
    }, 1500);
  };

  const quickStats = [
    {
      icon: 'Users',
      value: '247',
      label: 'Framework Users',
      description: 'Active traders using OUR methodology'
    },
    {
      icon: 'Trophy',
      value: '68',
      label: 'Challenges Passed',
      description: 'Successful FTMO completions this year'
    },
    {
      icon: 'TrendingUp',
      value: '27.5%',
      label: 'Success Rate',
      description: 'Above industry average'
    }
  ];

  return (
    <>
      <Helmet>
        <title>FTMO Challenge Gateway - Apply OUR Framework | FXFORECAST</title>
        <meta name="description" content="Ready to apply the OUR framework to funded challenges? Get prepared for FTMO success with our systematic trading approach and comprehensive challenge guide." />
        <meta name="keywords" content="FTMO challenge, funded trading, OUR framework, systematic trading, risk management, trading education" />
        <meta property="og:title" content="FTMO Challenge Gateway - Apply OUR Framework" />
        <meta property="og:description" content="Transform your trading with systematic approach. Get prepared for FTMO challenge success." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://fxforecast.com/ftmo-affiliate-gateway" />
      </Helmet>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <Icon name="Zap" size={16} />
                <span>Ready for Funded Trading</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Apply the <span className="text-primary">OUR Framework</span>
                <br />to Funded Challenges
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Transform your systematic trading approach into FTMO challenge success. 
                Get prepared with our comprehensive guide and proven methodology.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
                {quickStats?.map((stat, index) => (
                  <div key={index} className="bg-card border border-border rounded-lg p-4">
                    <div className="flex items-center justify-center space-x-3 mb-2">
                      <Icon name={stat?.icon} size={20} className="text-primary" />
                      <span className="text-2xl font-bold text-foreground">{stat?.value}</span>
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1">{stat?.label}</div>
                    <div className="text-xs text-muted-foreground">{stat?.description}</div>
                  </div>
                ))}
              </div>

              {/* Main CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg"
                  onClick={handleFTMORedirect}
                  loading={isLoading}
                  disabled={redirectCountdown !== null}
                  iconName={redirectCountdown ? "Clock" : "ExternalLink"}
                  iconPosition="right"
                  className="px-8 py-4 text-lg"
                >
                  {redirectCountdown 
                    ? `Redirecting in ${redirectCountdown}s` 
                    : isLoading 
                    ? 'Preparing...' :'Start FTMO Challenge'
                  }
                </Button>
                
                <Link to="/framework-deep-dive">
                  <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                    Review Framework First
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-muted-foreground mt-4">
                <Icon name="Shield" size={14} className="inline mr-1" />
                Affiliate partnership disclosed • Risk disclaimer applies
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Preparation & Framework */}
              <div className="lg:col-span-2 space-y-8">
                <PreparationChecklist />
                <ChallengeDetails />
                <FrameworkSummary />
              </div>

              {/* Right Column - Support & Trust */}
              <div className="space-y-8">
                <ContactSupport />
                <SocialProof />
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Transparency Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface/50">
          <div className="max-w-7xl mx-auto">
            <TrustElements />
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-brand-royal">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Turn Trading into Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Apply the OUR framework systematically. Trade with discipline. Pass with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                variant="secondary"
                size="lg"
                onClick={handleFTMORedirect}
                loading={isLoading}
                disabled={redirectCountdown !== null}
                iconName={redirectCountdown ? "Clock" : "ExternalLink"}
                iconPosition="right"
                className="px-8 py-4 text-lg bg-white text-primary hover:bg-white/90"
              >
                {redirectCountdown 
                  ? `Redirecting in ${redirectCountdown}s` 
                  : isLoading 
                  ? 'Preparing...' :'Start Your Challenge Now'
                }
              </Button>
              
              <div className="flex items-center space-x-4 text-white/80">
                <div className="flex items-center space-x-1">
                  <Icon name="Shield" size={16} />
                  <span className="text-sm">Transparent Partnership</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="Users" size={16} />
                  <span className="text-sm">Community Support</span>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <p className="text-sm text-white/80">
                <strong>Important:</strong> Trading involves substantial risk of loss. 
                The OUR framework is educational content, not financial advice. 
                Only trade with capital you can afford to lose.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-surface border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-brand-royal rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" size={20} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <span className="text-lg font-bold text-primary">FXFORECAST</span>
                  <div className="text-xs text-muted-foreground">Systematic Trading Education</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <Link to="/framework-deep-dive" className="hover:text-foreground transition-colors">
                  Framework
                </Link>
                <Link to="/position-size-calculator" className="hover:text-foreground transition-colors">
                  Calculator
                </Link>
                <Link to="/blog-hub" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
                <span>© {new Date()?.getFullYear()} FXFORECAST</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default FTMOAffiliateGateway;
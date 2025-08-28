import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ConversionSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSignup = (e) => {
    e?.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Mock subscription logic
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const downloadableResources = [
    {
      title: "OUR Framework Checklist",
      description: "Complete implementation checklist for systematic trading",
      icon: "CheckSquare",
      fileSize: "PDF • 2.4 MB"
    },
    {
      title: "Risk Management Calculator",
      description: "Excel template for position sizing and risk calculation",
      icon: "Calculator",
      fileSize: "XLSX • 1.8 MB"
    },
    {
      title: "Trade Journal Template",
      description: "Structured template for tracking and analyzing trades",
      icon: "FileText",
      fileSize: "PDF • 1.2 MB"
    }
  ];

  const nextSteps = [
    {
      title: "Try the Position Calculator",
      description: "Practice risk management with our interactive tool",
      icon: "Calculator",
      link: "/position-size-calculator",
      color: "blue"
    },
    {
      title: "Explore Trading Tools",
      description: "Access our complete suite of trading utilities",
      icon: "Wrench",
      link: "/trading-tools-suite",
      color: "purple"
    },
    {
      title: "Read Success Stories",
      description: "Learn from other traders\' framework implementations",
      icon: "BookOpen",
      link: "/blog-hub",
      color: "green"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-brand-royal to-primary">
      <div className="absolute inset-0 noise-overlay"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Take the next step in your trading journey with proven tools and resources.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Newsletter Signup */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} color="white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Advanced Framework Updates
              </h3>
              <p className="text-white/80">
                Get exclusive insights, advanced techniques, and framework updates delivered to your inbox.
              </p>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleNewsletterSignup} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e?.target?.value)}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder-white/60"
                />
                <Button 
                  type="submit"
                  variant="secondary"
                  size="lg"
                  fullWidth
                  iconName="Send"
                  iconPosition="right"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Subscribe for Free Updates
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <Icon name="CheckCircle" size={48} color="white" className="mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-white mb-2">Successfully Subscribed!</h4>
                <p className="text-white/80">Check your email for the welcome message and first framework insights.</p>
              </div>
            )}

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-white/60 text-center">
                Join 2,500+ traders receiving weekly framework insights. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Downloadable Resources */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Download" size={24} color="white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Free Implementation Resources
              </h3>
              <p className="text-white/80">
                Download practical templates and tools to implement the framework immediately.
              </p>
            </div>

            <div className="space-y-4">
              {downloadableResources?.map((resource, index) => (
                <button
                  key={index}
                  className="w-full p-4 bg-white/10 hover:bg-white/20 rounded-lg border border-white/20 transition-all duration-200 text-left"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name={resource?.icon} size={20} color="white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white mb-1">{resource?.title}</h4>
                      <p className="text-sm text-white/70 mb-2">{resource?.description}</p>
                      <span className="text-xs text-white/50">{resource?.fileSize}</span>
                    </div>
                    <Icon name="Download" size={16} color="white" className="flex-shrink-0" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Continue Your Framework Journey
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {nextSteps?.map((step, index) => (
              <Link
                key={index}
                to={step?.link}
                className="group p-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-200"
              >
                <div className={`w-12 h-12 bg-${step?.color}-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon name={step?.icon} size={20} color="white" />
                </div>
                <h4 className="font-semibold text-white mb-2">{step?.title}</h4>
                <p className="text-sm text-white/70 mb-4">{step?.description}</p>
                <div className="flex items-center text-white/80 text-sm group-hover:text-white transition-colors duration-200">
                  <span>Get Started</span>
                  <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Primary CTA */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Pass Your FTMO Challenge?
            </h3>
            <p className="text-white/80 mb-6">
              Apply the OUR Framework with a funded account challenge and start your journey to consistent profitability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary"
                size="lg"
                onClick={() => window.open('https://ftmo.com', '_blank')}
                iconName="ExternalLink"
                iconPosition="right"
                className="bg-white text-primary hover:bg-white/90"
              >
                Start FTMO Challenge
              </Button>
              
              <Link to="/position-size-calculator">
                <Button 
                  variant="ghost"
                  size="lg"
                  iconName="Calculator"
                  iconPosition="left"
                  className="text-white hover:bg-white/10 border-white/30"
                >
                  Try Position Calculator
                </Button>
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-white/60">
                <Icon name="Shield" size={16} className="inline mr-2" />
                Risk Warning: Trading involves substantial risk. Past performance does not guarantee future results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;
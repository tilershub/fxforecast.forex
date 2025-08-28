import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CTASection = () => {
  const actionPaths = [
    {
      id: 1,
      title: "Master the Framework",
      description: "Deep dive into our complete OUR methodology with implementation guides and real-world examples.",
      icon: "BookOpen",
      path: "/framework-deep-dive",
      buttonText: "Explore Framework",
      color: "from-primary to-brand-royal",
      textColor: "text-white"
    },
    {
      id: 2,
      title: "Try Our Tools",
      description: "Experience professional-grade position sizing and risk management calculators used by funded traders.",
      icon: "Calculator",
      path: "/position-size-calculator",
      buttonText: "Access Calculator",
      color: "from-accent to-yellow-500",
      textColor: "text-slate-900"
    },
    {
      id: 3,
      title: "Start FTMO Challenge",
      description: "Ready to put your skills to the test? Begin your funded trading journey with proper preparation.",
      icon: "ExternalLink",
      path: "/ftmo-affiliate-gateway",
      buttonText: "Start Challenge",
      color: "from-success to-emerald-500",
      textColor: "text-white"
    }
  ];

  const whatsappNumber = "+1234567890"; // Mock WhatsApp number
  const whatsappMessage = encodeURIComponent("Hi! I'm interested in learning more about the FXFORECAST trading framework.");

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose your path to systematic trading success. Whether you're just starting or ready to take the challenge, we have the tools and guidance you need.
          </p>
          
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2">
            <Icon name="Clock" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Join 2,847+ traders already using our framework</span>
          </div>
        </div>
        
        {/* Action Paths */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {actionPaths?.map((path) => (
            <div 
              key={path?.id}
              className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${path?.color} p-8 text-center hover:scale-105 transition-all duration-300 group`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-16 h-16 border border-current rounded-lg rotate-12"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border border-current rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={path?.icon} size={32} className={path?.textColor} />
                </div>
                
                <h3 className={`text-2xl font-bold ${path?.textColor} mb-4`}>
                  {path?.title}
                </h3>
                
                <p className={`${path?.textColor} opacity-90 mb-8 leading-relaxed`}>
                  {path?.description}
                </p>
                
                <Link to={path?.path}>
                  <Button 
                    variant="secondary"
                    size="lg"
                    className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 font-semibold"
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    {path?.buttonText}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact Options */}
        <div className="bg-card rounded-xl p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Need Personal Guidance?
            </h3>
            <p className="text-muted-foreground">
              Connect with our team for personalized support and framework implementation assistance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* WhatsApp Contact */}
            <div className="bg-surface rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageCircle" size={32} className="text-green-600" />
              </div>
              
              <h4 className="text-lg font-semibold text-foreground mb-2">
                WhatsApp Support
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Get instant answers to your questions about the framework and implementation
              </p>
              
              <Button 
                variant="outline"
                size="sm"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                iconName="ExternalLink"
                iconPosition="right"
                className="border-green-200 text-green-600 hover:bg-green-50"
              >
                Chat on WhatsApp
              </Button>
            </div>
            
            {/* Email Contact */}
            <div className="bg-surface rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={32} className="text-blue-600" />
              </div>
              
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Email Support
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Detailed questions and comprehensive framework discussions
              </p>
              
              <Button 
                variant="outline"
                size="sm"
                onClick={() => window.location.href = 'mailto:support@fxforecast.com'}
                iconName="Send"
                iconPosition="right"
                className="border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                Send Email
              </Button>
            </div>
          </div>
        </div>
        
        {/* Final Encouragement */}
        <div className="mt-12 text-center">
          <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
            <Icon name="Target" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Your Systematic Trading Journey Starts Here
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of traders who've moved beyond emotional decision-making to build sustainable, profitable trading businesses. The framework is proven—now it's time to implement it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
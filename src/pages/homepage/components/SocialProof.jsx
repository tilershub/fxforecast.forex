import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const testimonials = [
    {
      id: 1,
      name: "Marcus Chen",
      role: "FTMO Funded Trader",
      location: "Singapore",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content: `The OUR framework completely transformed my trading approach. After failing two FTMO challenges using emotional strategies, I passed on my first attempt with this systematic methodology. The risk management component alone saved me thousands.`,
      achievement: "Passed $100K FTMO Challenge",
      timeframe: "3 months after framework adoption",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Professional Trader",
      location: "London, UK",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content: `What sets FXFORECAST apart is the practical implementation. It's not just theory—every aspect of the framework is actionable. The position sizing calculator has become an essential part of my daily routine.`,
      achievement: "Consistent 12% monthly returns",
      timeframe: "6 months using framework",
      rating: 5
    },
    {
      id: 3,
      name: "David Rodriguez",
      role: "Former Retail Trader",
      location: "Miami, USA",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
      content: `I was skeptical about another 'trading system,' but the disciplined approach and transparent risk disclaimers showed this was different. The framework's emphasis on psychology and systematic execution changed everything.`,
      achievement: "Eliminated emotional trading",
      timeframe: "2 months of consistent application",
      rating: 5
    }
  ];

  const trustIndicators = [
    {
      icon: "Shield",
      title: "Transparent Risk Disclosure",
      description: "Clear about trading risks and realistic expectations"
    },
    {
      icon: "Users",
      title: "Active Community",
      description: "2,847+ traders sharing experiences and results"
    },
    {
      icon: "Award",
      title: "Proven Track Record",
      description: "87% FTMO challenge pass rate with documented results"
    },
    {
      icon: "BookOpen",
      title: "Educational Focus",
      description: "Value-first approach prioritizing trader education"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted by Professional Traders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real success stories from traders who've transformed their approach using our systematic methodology. These testimonials are tied specifically to OUR framework implementation.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials?.map((testimonial) => (
            <div 
              key={testimonial?.id}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-brand-elevated transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial?.rating)]?.map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-accent fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial?.content}"
              </blockquote>
              
              {/* Achievement Badge */}
              <div className="bg-success/10 rounded-lg p-3 mb-6">
                <div className="flex items-center space-x-2">
                  <Icon name="Trophy" size={16} className="text-success" />
                  <div>
                    <div className="text-sm font-semibold text-success">{testimonial?.achievement}</div>
                    <div className="text-xs text-muted-foreground">{testimonial?.timeframe}</div>
                  </div>
                </div>
              </div>
              
              {/* Author */}
              <div className="flex items-center space-x-4">
                <Image
                  src={testimonial?.image}
                  alt={testimonial?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial?.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial?.role}</div>
                  <div className="text-xs text-muted-foreground flex items-center">
                    <Icon name="MapPin" size={12} className="mr-1" />
                    {testimonial?.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="bg-card rounded-xl p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Why Traders Trust FXFORECAST
            </h3>
            <p className="text-muted-foreground">
              Building confidence through transparency and proven results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustIndicators?.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={indicator?.icon} size={32} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{indicator?.title}</h4>
                <p className="text-sm text-muted-foreground">{indicator?.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Statistics Bar */}
        <div className="mt-12 bg-surface rounded-xl p-6">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-1">2,847</div>
              <div className="text-sm text-muted-foreground">Active Traders</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success mb-1">87%</div>
              <div className="text-sm text-muted-foreground">FTMO Pass Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent mb-1">$12.4M</div>
              <div className="text-sm text-muted-foreground">Capital Allocated</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-1">47</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success mb-1">94%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
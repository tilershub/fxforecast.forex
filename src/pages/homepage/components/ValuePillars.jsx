import React from 'react';
import Icon from '../../../components/AppIcon';

const ValuePillars = () => {
  const pillars = [
    {
      id: 1,
      icon: "Target",
      title: "Disciplined Methodology",
      description: "Our systematic OUR framework eliminates emotional trading decisions through structured, repeatable processes that professional traders rely on.",
      features: [
        "Objective market analysis",
        "Unified risk management",
        "Repeatable execution patterns"
      ]
    },
    {
      id: 2,
      icon: "Shield",
      title: "Risk Management Mastery",
      description: "Advanced position sizing and risk control techniques that protect capital while maximizing growth potential in funded account challenges.",
      features: [
        "Dynamic position sizing",
        "Multi-timeframe risk assessment",
        "Drawdown protection strategies"
      ]
    },
    {
      id: 3,
      icon: "Trophy",
      title: "FTMO Challenge Success",
      description: "Proven track record of helping traders pass FTMO evaluations through systematic preparation and disciplined execution strategies.",
      features: [
        "87% challenge pass rate",
        "Structured preparation plans",
        "Real-time performance tracking"
      ]
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Traders Choose FXFORECAST
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your trading approach with our systematic methodology that turns market uncertainty into consistent, profitable opportunities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pillars?.map((pillar) => (
            <div 
              key={pillar?.id}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-brand-elevated transition-all duration-300 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={pillar?.icon} size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{pillar?.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar?.description}</p>
              </div>
              
              <ul className="space-y-3">
                {pillar?.features?.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                    <span className="text-sm text-foreground font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-6 bg-card rounded-xl p-6 border border-border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">2,847</div>
              <div className="text-sm text-muted-foreground">Traders Trained</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success mb-1">$12.4M</div>
              <div className="text-sm text-muted-foreground">Capital Allocated</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">94%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePillars;
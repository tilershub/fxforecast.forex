import React from 'react';
import Icon from '../../../components/AppIcon';

const FrameworkSummary = () => {
  const frameworkPillars = [
    {
      letter: 'O',
      title: 'Opportunity',
      description: 'Identify high-probability trading setups using technical analysis and market structure',
      steps: [
        'Market structure analysis',
        'Support/resistance identification',
        'Trend confirmation signals',
        'Entry point optimization'
      ],
      color: 'bg-primary',
      textColor: 'text-primary'
    },
    {
      letter: 'U',
      title: 'Understanding',
      description: 'Confirm trade validity through multiple timeframe analysis and confluence factors',
      steps: [
        'Multiple timeframe alignment',
        'Volume confirmation',
        'Fundamental backdrop check',
        'Risk-reward assessment'
      ],
      color: 'bg-accent',
      textColor: 'text-accent'
    },
    {
      letter: 'R',
      title: 'Risk',
      description: 'Implement proper position sizing and risk management for consistent profitability',
      steps: [
        'Position size calculation',
        'Stop loss placement',
        'Take profit targets',
        'Portfolio risk monitoring'
      ],
      color: 'bg-success',
      textColor: 'text-success'
    }
  ];

  const challengeApplication = [
    {
      icon: 'Target',
      title: 'Phase 1 Strategy',
      description: 'Focus on 1-2% risk per trade to reach 8% target safely while preserving capital'
    },
    {
      icon: 'Shield',
      title: 'Risk Management',
      description: 'Never exceed 2% risk per trade and maintain daily loss limits below 3%'
    },
    {
      icon: 'TrendingUp',
      title: 'Consistency Focus',
      description: 'Prioritize consistent small wins over large risky trades for sustainable growth'
    },
    {
      icon: 'Clock',
      title: 'Patience Discipline',
      description: 'Wait for clear OUR framework signals rather than forcing trades to meet deadlines'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-foreground mb-2">Apply the OUR Framework</h3>
        <p className="text-muted-foreground">Your systematic approach to FTMO challenge success</p>
      </div>
      {/* Framework Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {frameworkPillars?.map((pillar, index) => (
          <div key={index} className="text-center">
            <div className={`w-16 h-16 ${pillar?.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
              <span className="text-2xl font-bold text-white">{pillar?.letter}</span>
            </div>
            
            <h4 className={`text-lg font-semibold ${pillar?.textColor} mb-2`}>{pillar?.title}</h4>
            <p className="text-sm text-muted-foreground mb-4">{pillar?.description}</p>
            
            <div className="space-y-2">
              {pillar?.steps?.map((step, stepIndex) => (
                <div key={stepIndex} className="flex items-center space-x-2 text-sm">
                  <Icon name="Check" size={14} className={pillar?.textColor} />
                  <span className="text-muted-foreground">{step}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Challenge Application */}
      <div className="border-t border-border pt-6">
        <h4 className="font-semibold text-foreground mb-4 text-center">Framework Application in FTMO Challenge</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {challengeApplication?.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 p-4 bg-surface rounded-lg">
              <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={item?.icon} size={20} className="text-primary" />
              </div>
              <div>
                <h5 className="font-medium text-foreground mb-1">{item?.title}</h5>
                <p className="text-sm text-muted-foreground">{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Quick Reference */}
      <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Icon name="BookOpen" size={20} className="text-primary" />
          <h5 className="font-medium text-primary">Quick Framework Reference</h5>
        </div>
        <p className="text-sm text-muted-foreground">
          Before each trade: <strong>Opportunity</strong> identified? <strong>Understanding</strong> confirmed? 
          <strong>Risk</strong> calculated? Only trade when all three pillars align perfectly.
        </p>
      </div>
    </div>
  );
};

export default FrameworkSummary;
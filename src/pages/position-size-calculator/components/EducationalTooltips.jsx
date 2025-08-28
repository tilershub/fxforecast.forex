import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const EducationalTooltips = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const tooltips = [
    {
      id: 'position-sizing',
      title: 'Position Sizing Fundamentals',
      icon: 'Target',
      content: `Position sizing is the cornerstone of risk management. It determines how much of your account you're willing to risk on each trade. The FXFORECAST methodology emphasizes that position size should be calculated based on your predetermined risk amount, not on gut feeling or arbitrary lot sizes.`
    },
    {
      id: 'risk-percentage',title: 'Risk Percentage Guidelines',icon: 'Shield',content: `Professional traders typically risk 1-3% of their account per trade. This ensures that even a series of losses won't devastate your account. FTMO challenges often require strict risk management - understanding this principle is crucial for passing funded account evaluations.`
    },
    {
      id: 'stop-loss',
      title: 'Stop Loss Strategy',
      icon: 'TrendingDown',
      content: `Your stop loss should be placed at a technically significant level, not just based on how much you're willing to lose. First determine your stop loss based on market structure, then calculate your position size to match your risk tolerance.`
    },
    {
      id: 'currency-pairs',title: 'Currency Pair Selection',icon: 'Globe',
      content: `Different currency pairs have different pip values and volatility characteristics. Major pairs like EUR/USD typically have lower spreads and more predictable movements, making them ideal for systematic trading approaches.`
    },
    {
      id: 'leverage',title: 'Leverage Understanding',icon: 'Zap',
      content: `Leverage amplifies both profits and losses. While higher leverage allows for larger positions with less capital, it also increases risk. The key is using leverage responsibly as part of a systematic risk management approach.`
    },
    {
      id: 'risk-reward',title: 'Risk-Reward Ratios',icon: 'BarChart3',
      content: `A positive risk-reward ratio means your potential profit is greater than your potential loss. Aiming for at least 1:2 risk-reward ratios allows you to be profitable even with a 40% win rate, which is the foundation of systematic trading success.`
    }
  ];

  const toggleTooltip = (id) => {
    setActiveTooltip(activeTooltip === id ? null : id);
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-brand">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="BookOpen" size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground">Trading Education</h3>
          <p className="text-sm text-muted-foreground">Learn the principles behind each calculation</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tooltips?.map((tooltip) => (
          <div key={tooltip?.id} className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleTooltip(tooltip?.id)}
              className="w-full p-4 text-left hover:bg-surface transition-colors duration-200 flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={tooltip?.icon} size={16} className="text-primary" />
                </div>
                <span className="font-medium text-foreground">{tooltip?.title}</span>
              </div>
              <Icon 
                name={activeTooltip === tooltip?.id ? "ChevronUp" : "ChevronDown"} 
                size={16} 
                className="text-muted-foreground" 
              />
            </button>
            
            {activeTooltip === tooltip?.id && (
              <div className="px-4 pb-4 border-t border-border bg-surface/50">
                <p className="text-sm text-muted-foreground leading-relaxed pt-3">
                  {tooltip?.content}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-brand-royal/5 rounded-lg border border-primary/20">
        <div className="flex items-start space-x-3">
          <Icon name="GraduationCap" size={20} className="text-primary mt-0.5" />
          <div>
            <h4 className="font-medium text-primary mb-2">FXFORECAST Methodology</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              These principles form the foundation of our systematic trading approach. By mastering position sizing 
              and risk management, you're building the discipline needed to succeed in funded trading challenges 
              and develop a sustainable trading business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationalTooltips;
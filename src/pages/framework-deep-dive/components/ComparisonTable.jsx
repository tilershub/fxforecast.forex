import React from 'react';
import Icon from '../../../components/AppIcon';

const ComparisonTable = () => {
  const comparisons = [
    {
      category: "Decision Making",
      emotional: "Based on feelings and market noise",
      systematic: "Based on predetermined criteria and data",
      icon: "Brain"
    },
    {
      category: "Risk Management",
      emotional: "Inconsistent, often too high or too low",
      systematic: "Fixed percentage per trade (1-2%)",
      icon: "Shield"
    },
    {
      category: "Trade Frequency",
      emotional: "Overtrading or revenge trading",
      systematic: "Quality over quantity approach",
      icon: "Activity"
    },
    {
      category: "Market Analysis",
      emotional: "Reactive to recent price movements",
      systematic: "Multi-timeframe structured analysis",
      icon: "TrendingUp"
    },
    {
      category: "Entry Criteria",
      emotional: "FOMO-driven, impulsive entries",
      systematic: "Checklist-based confirmation system",
      icon: "CheckSquare"
    },
    {
      category: "Position Sizing",
      emotional: "Gut feeling or round numbers",
      systematic: "Calculated based on account risk",
      icon: "Calculator"
    },
    {
      category: "Stop Loss Management",
      emotional: "Moved or removed when losing",
      systematic: "Set before entry, never moved against",
      icon: "StopCircle"
    },
    {
      category: "Performance Review",
      emotional: "Focuses on individual wins/losses",
      systematic: "Analyzes patterns and processes",
      icon: "BarChart3"
    },
    {
      category: "Emotional State",
      emotional: "High stress, fear, and greed cycles",
      systematic: "Calm, disciplined execution",
      icon: "Heart"
    },
    {
      category: "Long-term Results",
      emotional: "Inconsistent, often unprofitable",
      systematic: "Steady growth and consistency",
      icon: "Target"
    }
  ];

  return (
    <section id="comparison-table" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Emotional vs Systematic Trading
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how the OUR Framework transforms chaotic emotional trading into systematic business practice.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-brand-royal p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold">Trading Aspect</h3>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Icon name="Zap" size={20} className="text-error" />
                  <h3 className="text-lg font-semibold">Emotional Trading</h3>
                </div>
                <p className="text-sm text-white/80">Reactive & Inconsistent</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Icon name="Target" size={20} className="text-success" />
                  <h3 className="text-lg font-semibold">OUR Framework</h3>
                </div>
                <p className="text-sm text-white/80">Systematic & Disciplined</p>
              </div>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-border">
            {comparisons?.map((comparison, index) => (
              <div key={index} className="p-6 hover:bg-surface/50 transition-colors duration-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  {/* Category */}
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={comparison?.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{comparison?.category}</h4>
                    </div>
                  </div>

                  {/* Emotional Approach */}
                  <div className="text-center md:text-left">
                    <div className="flex items-start space-x-2">
                      <Icon name="X" size={16} className="text-error mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{comparison?.emotional}</span>
                    </div>
                  </div>

                  {/* Systematic Approach */}
                  <div className="text-center md:text-left">
                    <div className="flex items-start space-x-2">
                      <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground font-medium">{comparison?.systematic}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="bg-surface p-6">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                The Framework Advantage
              </h4>
              <p className="text-muted-foreground mb-4">
                Systematic trading removes emotional bias and creates consistent, repeatable results that help traders pass FTMO challenges.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon name="TrendingUp" size={20} className="text-success" />
                  </div>
                  <div className="text-sm font-medium text-foreground">Higher Win Rate</div>
                  <div className="text-xs text-muted-foreground">65-75% vs 45-55%</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon name="Shield" size={20} className="text-primary" />
                  </div>
                  <div className="text-sm font-medium text-foreground">Better Risk Control</div>
                  <div className="text-xs text-muted-foreground">1-2% vs 3-5% per trade</div>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon name="Target" size={20} className="text-accent" />
                  </div>
                  <div className="text-sm font-medium text-foreground">Consistent Results</div>
                  <div className="text-xs text-muted-foreground">Steady growth vs volatility</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      trader: "Marcus Chen",
      challenge: "FTMO $100K Challenge",
      timeframe: "14 Days",
      result: "Passed Phase 1 & 2",
      profit: "+$8,240",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      story: `Marcus struggled with emotional trading for 2 years before discovering the OUR Framework. His biggest challenge was overtrading and revenge trading after losses.\n\nUsing the Objective component, he learned to set daily profit targets and stick to them. The Unified approach helped him maintain consistent position sizing, while the Repeatable system allowed him to track and improve his performance systematically.`,
      keyInsights: [
        "Reduced trading frequency by 60% while increasing profitability",
        "Maintained 1.5% daily risk limit throughout the challenge",
        "Used framework checklist to avoid emotional decisions",
        "Achieved 2.1:1 average risk-reward ratio"
      ],
      beforeAfter: {
        before: {
          winRate: "45%",
          avgRisk: "3.2%",
          tradesPerDay: "12-15",
          emotionalState: "High stress, revenge trading"
        },
        after: {
          winRate: "68%",
          avgRisk: "1.5%",
          tradesPerDay: "4-6",
          emotionalState: "Calm, systematic execution"
        }
      }
    },
    {
      id: 2,
      trader: "Sarah Rodriguez",
      challenge: "FTMO $50K Challenge",
      timeframe: "18 Days",
      result: "Passed Both Phases",
      profit: "+$4,180",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      story: `Sarah was a part-time trader juggling a full-time job. She needed a systematic approach that worked with limited screen time.\n\nThe OUR Framework's emphasis on higher timeframe analysis and predetermined setups was perfect for her schedule. She could analyze markets in the morning and execute trades during lunch breaks.`,
      keyInsights: [
        "Focused on H4 and Daily timeframes for better work-life balance",
        "Used framework\'s setup criteria to filter high-probability trades",
        "Maintained detailed trade journal using framework templates",
        "Achieved consistency despite limited trading hours"
      ],
      beforeAfter: {
        before: {
          winRate: "52%",
          avgRisk: "2.8%",
          tradesPerDay: "8-10",
          emotionalState: "Rushed decisions, FOMO"
        },
        after: {
          winRate: "71%",
          avgRisk: "1.8%",
          tradesPerDay: "2-3",
          emotionalState: "Patient, selective trading"
        }
      }
    },
    {
      id: 3,
      trader: "David Thompson",
      challenge: "FTMO $200K Challenge",
      timeframe: "21 Days",
      result: "Passed Phase 1 & 2",
      profit: "+$16,890",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      story: `David had technical analysis skills but lacked a systematic approach to risk management. He frequently blew accounts due to position sizing errors.\n\nThe Framework's Unified component transformed his trading by standardizing his approach to position sizing and risk management. The systematic nature helped him scale up to larger account sizes confidently.`,
      keyInsights: [
        "Implemented strict 1% risk rule across all trades",
        "Used position size calculator for precise risk management",
        "Developed consistent pre-market routine using framework",
        "Scaled trading approach successfully to larger account"
      ],
      beforeAfter: {
        before: {
          winRate: "58%",
          avgRisk: "4.5%",
          tradesPerDay: "6-8",
          emotionalState: "Confident but reckless"
        },
        after: {
          winRate: "64%",
          avgRisk: "1.0%",
          tradesPerDay: "3-4",
          emotionalState: "Disciplined, process-focused"
        }
      }
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Framework Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real traders who transformed their results using the OUR Framework to pass FTMO challenges.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8 mb-12">
          {caseStudies?.map((study, index) => (
            <button
              key={study?.id}
              onClick={() => setActiveCase(index)}
              className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                activeCase === index
                  ? 'bg-primary text-primary-foreground shadow-brand'
                  : 'bg-card text-foreground hover:bg-muted border border-border'
              }`}
            >
              <img
                src={study?.avatar}
                alt={study?.trader}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold">{study?.trader}</div>
                <div className={`text-sm ${activeCase === index ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {study?.challenge}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Case Study */}
        <div className="bg-card rounded-2xl border border-border overflow-hidden">
          <div className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Trader Info */}
              <div className="text-center lg:text-left">
                <img
                  src={caseStudies?.[activeCase]?.avatar}
                  alt={caseStudies?.[activeCase]?.trader}
                  className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0 mb-4"
                />
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {caseStudies?.[activeCase]?.trader}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {caseStudies?.[activeCase]?.challenge}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <Icon name="Clock" size={16} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{caseStudies?.[activeCase]?.timeframe}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-success" />
                    <span className="text-sm font-medium text-success">{caseStudies?.[activeCase]?.result}</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-2">
                    <Icon name="TrendingUp" size={16} className="text-accent" />
                    <span className="text-sm font-bold text-accent">{caseStudies?.[activeCase]?.profit}</span>
                  </div>
                </div>
              </div>

              {/* Story */}
              <div className="lg:col-span-2">
                <h4 className="text-xl font-semibold text-foreground mb-4">Success Story</h4>
                <div className="prose prose-slate max-w-none">
                  {caseStudies?.[activeCase]?.story?.split('\n\n')?.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center space-x-2">
                <Icon name="Lightbulb" size={20} />
                <span>Key Framework Applications</span>
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudies?.[activeCase]?.keyInsights?.map((insight, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-surface rounded-lg">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{insight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Before/After Comparison */}
            <div className="bg-surface rounded-xl p-6">
              <h4 className="text-xl font-semibold text-foreground mb-6 text-center">
                Transformation Results
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="TrendingDown" size={24} className="text-error" />
                  </div>
                  <h5 className="font-semibold text-foreground mb-4">Before Framework</h5>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Win Rate:</span>
                      <span className="text-sm font-medium text-error">
                        {caseStudies?.[activeCase]?.beforeAfter?.before?.winRate}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Avg Risk:</span>
                      <span className="text-sm font-medium text-error">
                        {caseStudies?.[activeCase]?.beforeAfter?.before?.avgRisk}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Trades/Day:</span>
                      <span className="text-sm font-medium text-error">
                        {caseStudies?.[activeCase]?.beforeAfter?.before?.tradesPerDay}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <span className="text-xs text-muted-foreground">
                        {caseStudies?.[activeCase]?.beforeAfter?.before?.emotionalState}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="TrendingUp" size={24} className="text-success" />
                  </div>
                  <h5 className="font-semibold text-foreground mb-4">After Framework</h5>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Win Rate:</span>
                      <span className="text-sm font-medium text-success">
                        {caseStudies?.[activeCase]?.beforeAfter?.after?.winRate}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Avg Risk:</span>
                      <span className="text-sm font-medium text-success">
                        {caseStudies?.[activeCase]?.beforeAfter?.after?.avgRisk}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Trades/Day:</span>
                      <span className="text-sm font-medium text-success">
                        {caseStudies?.[activeCase]?.beforeAfter?.after?.tradesPerDay}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <span className="text-xs text-muted-foreground">
                        {caseStudies?.[activeCase]?.beforeAfter?.after?.emotionalState}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('comparison-table')?.scrollIntoView({ behavior: 'smooth' })}
            iconName="ArrowDown"
            iconPosition="right"
          >
            Compare Trading Approaches
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
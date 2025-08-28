import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DetailedBreakdown = () => {
  const [activeSection, setActiveSection] = useState('objective');
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const sections = {
    objective: {
      title: 'Objective: Define & Analyze',
      icon: 'Target',
      color: 'blue',
      description: 'The foundation of successful trading starts with clear objectives and thorough market analysis.',
      subsections: [
        {
          title: 'Goal Setting Framework',
          content: `Establish specific, measurable trading objectives that align with your risk tolerance and capital requirements.\n\nDaily targets should be realistic and based on historical performance data. Weekly and monthly goals provide broader perspective while maintaining focus on consistent execution.`,
          checklist: [
            'Set daily profit target (1-2% of account)',
            'Define maximum daily loss limit',
            'Establish weekly performance goals',
            'Document risk tolerance parameters'
          ]
        },
        {
          title: 'Market Structure Analysis',
          content: `Understanding market structure is crucial for identifying high-probability trading opportunities.\n\nAnalyze higher timeframes first to understand the overall trend, then drill down to lower timeframes for precise entry points. This top-down approach ensures alignment with market momentum.`,
          checklist: [
            'Identify overall market trend (H4/Daily)',
            'Mark key support and resistance levels',
            'Analyze market sentiment indicators',
            'Check economic calendar for events'
          ]
        },
        {
          title: 'Setup Identification',
          content: `Develop a systematic approach to recognizing high-probability trading setups.\n\nFocus on 2-3 reliable patterns rather than trying to trade every opportunity. Quality over quantity is the key to consistent profitability in funded account challenges.`,
          checklist: [
            'Define your core trading patterns',
            'Create setup confirmation criteria',
            'Establish minimum risk-reward ratios',
            'Document entry trigger conditions'
          ]
        }
      ]
    },
    unified: {
      title: 'Unified: Consistent Approach',
      icon: 'Layers',
      color: 'purple',
      description: 'Consistency in execution eliminates emotional decision-making and creates predictable results.',
      subsections: [
        {
          title: 'Standardized Entry Criteria',
          content: `Create a checklist-based approach to trade entries that removes emotional bias.\n\nEvery trade must meet the same criteria regardless of market conditions or recent performance. This systematic approach is essential for passing FTMO challenges consistently.`,
          checklist: [
            'Confirm trend alignment across timeframes',
            'Verify setup meets all criteria',
            'Check risk-reward ratio requirements',
            'Ensure proper market timing'
          ]
        },
        {
          title: 'Position Sizing Rules',
          content: `Implement consistent position sizing based on account balance and risk parameters.\n\nNever risk more than 1-2% of account balance per trade. Use our position size calculator to ensure precise risk management across all trades.`,
          checklist: [
            'Calculate position size before entry',
            'Verify risk percentage is within limits',
            'Account for spread and slippage',
            'Document position size rationale'
          ]
        },
        {
          title: 'Risk Management Protocol',
          content: `Establish non-negotiable rules for managing risk on every trade.\n\nStop losses must be set before entry and never moved against your position. Take profits should follow predetermined levels based on technical analysis.`,
          checklist: [
            'Set stop loss before market entry',
            'Define take profit levels in advance',
            'Never move stops against position',
            'Follow predetermined exit strategy'
          ]
        }
      ]
    },
    repeatable: {
      title: 'Repeatable: Systematic Execution',
      icon: 'RotateCcw',
      color: 'green',
      description: 'Create processes that can be replicated consistently for long-term trading success.',
      subsections: [
        {
          title: 'Trade Documentation System',
          content: `Maintain detailed records of every trading decision and outcome.\n\nProper documentation allows for objective performance analysis and continuous improvement. This data becomes invaluable for refining your strategy over time.`,
          checklist: [
            'Record entry and exit reasons',
            'Document market conditions',
            'Note emotional state during trade',
            'Track setup success rates'
          ]
        },
        {
          title: 'Performance Review Process',
          content: `Conduct regular reviews of trading performance to identify patterns and areas for improvement.\n\nWeekly reviews focus on recent trades and immediate adjustments. Monthly reviews provide broader perspective on strategy effectiveness.`,
          checklist: [
            'Analyze weekly performance metrics',
            'Identify recurring mistakes',
            'Review successful trade patterns',
            'Adjust strategy based on data'
          ]
        },
        {
          title: 'Continuous Improvement Framework',
          content: `Implement a systematic approach to strategy refinement based on objective data.\n\nSmall, incremental improvements compound over time to create significant performance gains. Focus on process improvement rather than outcome optimization.`,
          checklist: [
            'Track key performance indicators',
            'Test strategy modifications carefully',
            'Maintain discipline during changes',
            'Document improvement results'
          ]
        }
      ]
    }
  };

  const toggleStep = (stepIndex) => {
    const stepId = `${activeSection}-${stepIndex}`;
    const newCompleted = new Set(completedSteps);
    
    if (newCompleted?.has(stepId)) {
      newCompleted?.delete(stepId);
    } else {
      newCompleted?.add(stepId);
    }
    
    setCompletedSteps(newCompleted);
  };

  const getProgressPercentage = () => {
    const totalSteps = Object.values(sections)?.reduce((total, section) => 
      total + section?.subsections?.reduce((subTotal, subsection) => subTotal + subsection?.checklist?.length, 0), 0
    );
    return Math.round((completedSteps?.size / totalSteps) * 100);
  };

  return (
    <section id="detailed-breakdown" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Detailed Framework Breakdown
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Master each component with practical implementation guides and track your progress.
          </p>
          
          {/* Progress Tracker */}
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">Framework Mastery</span>
              <span className="text-sm font-medium text-primary">{getProgressPercentage()}%</span>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-primary to-brand-royal h-2 rounded-full transition-all duration-300"
                style={{ width: `${getProgressPercentage()}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              {Object.entries(sections)?.map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                    activeSection === key
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-card text-foreground hover:bg-muted border border-border'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon 
                      name={section?.icon} 
                      size={20} 
                      color={activeSection === key ? 'white' : 'currentColor'} 
                    />
                    <div>
                      <div className="font-medium">{section?.title?.split(':')?.[0]}</div>
                      <div className={`text-sm ${activeSection === key ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                        {section?.title?.split(':')?.[1]}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-xl border border-border p-8">
              <div className="flex items-start space-x-4 mb-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-${sections?.[activeSection]?.color}-500 to-${sections?.[activeSection]?.color}-600 flex items-center justify-center`}>
                  <Icon name={sections?.[activeSection]?.icon} size={24} color="white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {sections?.[activeSection]?.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {sections?.[activeSection]?.description}
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {sections?.[activeSection]?.subsections?.map((subsection, index) => (
                  <div key={index} className="border border-border rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      {subsection?.title}
                    </h4>
                    
                    <div className="prose prose-slate max-w-none mb-6">
                      {subsection?.content?.split('\n\n')?.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="bg-surface rounded-lg p-4">
                      <h5 className="font-medium text-foreground mb-3 flex items-center space-x-2">
                        <Icon name="CheckSquare" size={16} />
                        <span>Implementation Checklist</span>
                      </h5>
                      
                      <div className="space-y-2">
                        {subsection?.checklist?.map((item, itemIndex) => {
                          const stepId = `${activeSection}-${index}-${itemIndex}`;
                          const isCompleted = completedSteps?.has(stepId);
                          
                          return (
                            <label
                              key={itemIndex}
                              className="flex items-start space-x-3 cursor-pointer group"
                            >
                              <button
                                onClick={() => toggleStep(`${index}-${itemIndex}`)}
                                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-200 mt-0.5 ${
                                  isCompleted
                                    ? 'bg-success border-success' :'border-border group-hover:border-primary'
                                }`}
                              >
                                {isCompleted && (
                                  <Icon name="Check" size={12} color="white" />
                                )}
                              </button>
                              <span className={`text-sm transition-colors duration-200 ${
                                isCompleted 
                                  ? 'text-muted-foreground line-through' 
                                  : 'text-foreground group-hover:text-primary'
                              }`}>
                                {item}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="default" 
            size="lg"
            onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
            iconName="ArrowDown"
            iconPosition="right"
          >
            See Framework in Action
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DetailedBreakdown;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FrameworkPreview = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const frameworkComponents = [
    {
      id: 'objective',
      letter: 'O',
      title: 'Objective',
      subtitle: 'Data-Driven Analysis',
      description: 'Remove emotional bias through systematic market analysis using proven technical and fundamental indicators.',
      details: `Our Objective component focuses on eliminating subjective decision-making through:\n\n• Multi-timeframe technical analysis using confluence zones\n• Economic calendar integration for fundamental bias\n• Market structure identification and trend confirmation\n• Risk-reward assessment before trade execution\n• Backtested entry and exit criteria\n\nThis systematic approach ensures every trading decision is based on measurable data rather than emotions or hunches.`,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    {
      id: 'unified',
      letter: 'U',
      title: 'Unified',
      subtitle: 'Consistent Risk Management',
      description: 'Standardized position sizing and risk control across all trades, regardless of market conditions or timeframes.',
      details: `The Unified component creates consistency through:\n\n• Dynamic position sizing based on account equity\n• Fixed risk percentage per trade (typically 1-2%)\n• Standardized stop-loss and take-profit ratios\n• Portfolio correlation analysis to avoid overexposure\n• Daily and weekly risk limits with automatic cutoffs\n\nThis unified approach protects capital while maximizing growth potential across all trading scenarios.`,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    {
      id: 'repeatable',
      letter: 'R',
      title: 'Repeatable',
      subtitle: 'Systematic Execution',
      description: 'Standardized processes that can be executed consistently, creating predictable results over time.',
      details: `Repeatable execution ensures long-term success through:\n\n• Documented trading checklists for every market session\n• Standardized pre-market analysis routines\n• Consistent trade management and exit strategies\n• Regular performance review and optimization cycles\n• Automated alerts and execution where appropriate\n\nBy making every aspect of trading repeatable, we eliminate the guesswork and create sustainable, profitable habits.`,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600'
    }
  ];

  const toggleExpansion = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The OUR Framework
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our systematic methodology transforms chaotic trading into disciplined business practice. Click each component to explore implementation details.
          </p>
          
          <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2">
            <Icon name="Award" size={20} className="text-accent" />
            <span className="text-sm font-medium text-accent">87% FTMO Challenge Pass Rate</span>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {frameworkComponents?.map((component) => (
            <div 
              key={component?.id}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-brand-elevated transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${component?.color} flex items-center justify-center text-white text-2xl font-bold mr-4`}>
                    {component?.letter}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{component?.title}</h3>
                    <p className={`text-sm font-medium ${component?.textColor}`}>{component?.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {component?.description}
                </p>
                
                <button
                  onClick={() => toggleExpansion(component?.id)}
                  className="flex items-center justify-between w-full p-4 bg-surface rounded-lg hover:bg-muted transition-colors duration-200"
                >
                  <span className="text-sm font-medium text-foreground">
                    {expandedSection === component?.id ? 'Hide Details' : 'View Implementation'}
                  </span>
                  <Icon 
                    name={expandedSection === component?.id ? "ChevronUp" : "ChevronDown"} 
                    size={16} 
                    className="text-muted-foreground"
                  />
                </button>
                
                {expandedSection === component?.id && (
                  <div className="mt-4 p-4 bg-surface rounded-lg border border-border">
                    <div className="text-sm text-foreground leading-relaxed whitespace-pre-line">
                      {component?.details}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-card rounded-xl p-8 border border-border mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Master the Framework?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get complete access to our comprehensive methodology, including detailed implementation guides, trading checklists, and real-world case studies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/framework-deep-dive">
                <Button 
                  size="lg"
                  iconName="BookOpen"
                  iconPosition="right"
                  className="px-8"
                >
                  Complete Framework Guide
                </Button>
              </Link>
              
              <Link to="/position-size-calculator">
                <Button 
                  variant="outline"
                  size="lg"
                  iconName="Calculator"
                  iconPosition="right"
                  className="px-8"
                >
                  Try Our Calculator
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkPreview;
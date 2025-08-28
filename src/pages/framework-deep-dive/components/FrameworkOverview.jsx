import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FrameworkOverview = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 'objective',
      title: 'Objective',
      subtitle: 'Define & Analyze',
      description: 'Set clear trading goals and conduct systematic market analysis before entering any position.',
      icon: 'Target',
      color: 'from-blue-500 to-blue-600',
      steps: [
        'Define daily/weekly profit targets',
        'Analyze market structure and trends',
        'Identify high-probability setups',
        'Set risk parameters for the session'
      ]
    },
    {
      id: 'unified',
      title: 'Unified',
      subtitle: 'Consistent Approach',
      description: 'Apply the same methodology across all trades regardless of market conditions or emotions.',
      icon: 'Layers',
      color: 'from-purple-500 to-purple-600',
      steps: [
        'Use standardized entry criteria',
        'Apply consistent position sizing',
        'Follow predetermined stop-loss rules',
        'Execute trades without emotional bias'
      ]
    },
    {
      id: 'repeatable',
      title: 'Repeatable',
      subtitle: 'Systematic Execution',
      description: 'Create a systematic process that can be replicated consistently for long-term success.',
      icon: 'RotateCcw',
      color: 'from-green-500 to-green-600',
      steps: [
        'Document every trade decision',
        'Review performance regularly',
        'Refine strategy based on data',
        'Maintain disciplined execution'
      ]
    }
  ];

  return (
    <section id="framework-overview" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Framework Philosophy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The OUR Framework transforms chaotic trading into a systematic business approach. 
            Each component builds upon the others to create a complete trading methodology.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-8 mb-12">
            {phases?.map((phase, index) => (
              <div
                key={phase?.id}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  activePhase === index
                    ? 'border-primary bg-primary/5 shadow-brand'
                    : 'border-border bg-card hover:border-primary/50'
                }`}
                onClick={() => setActivePhase(index)}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${phase?.color} flex items-center justify-center mb-6`}>
                  <Icon name={phase?.icon} size={24} color="white" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">{phase?.title}</h3>
                <p className="text-primary font-medium mb-4">{phase?.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">{phase?.description}</p>
                
                {activePhase === index && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-semibold text-foreground mb-3">Key Components:</h4>
                    <ul className="space-y-2">
                      {phase?.steps?.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start space-x-2">
                          <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-6 mb-12">
          {phases?.map((phase, index) => (
            <div
              key={phase?.id}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${phase?.color} flex items-center justify-center flex-shrink-0`}>
                  <Icon name={phase?.icon} size={20} color="white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{phase?.title}</h3>
                  <p className="text-primary font-medium">{phase?.subtitle}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{phase?.description}</p>
              
              <div className="space-y-2">
                {phase?.steps?.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-start space-x-2">
                    <Icon name="Check" size={14} className="text-success mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => document.getElementById('detailed-breakdown')?.scrollIntoView({ behavior: 'smooth' })}
            iconName="ArrowDown"
            iconPosition="right"
          >
            Explore Detailed Breakdown
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameworkOverview;
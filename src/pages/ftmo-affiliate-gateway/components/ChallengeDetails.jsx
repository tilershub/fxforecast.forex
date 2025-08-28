import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ChallengeDetails = () => {
  const [activeTab, setActiveTab] = useState('requirements');

  const challengeTypes = [
    {
      id: 'normal',
      name: 'FTMO Challenge',
      price: '$155',
      account: '$10,000',
      phase1Target: '8%',
      phase2Target: '5%',
      dailyLoss: '5%',
      maxLoss: '10%',
      minDays: '4 days',
      popular: true
    },
    {
      id: 'aggressive',
      name: 'Aggressive Challenge',
      price: '$155',
      account: '$10,000',
      phase1Target: '10%',
      phase2Target: '5%',
      dailyLoss: '5%',
      maxLoss: '10%',
      minDays: '4 days',
      popular: false
    },
    {
      id: 'swing',
      name: 'Swing Trading',
      price: '$155',
      account: '$10,000',
      phase1Target: '8%',
      phase2Target: '5%',
      dailyLoss: '5%',
      maxLoss: '10%',
      minDays: '15 days',
      popular: false
    }
  ];

  const requirements = [
    {
      icon: 'Target',
      title: 'Profit Target',
      description: 'Phase 1: 8% profit target\nPhase 2: 5% profit target',
      color: 'text-success'
    },
    {
      icon: 'Shield',
      title: 'Maximum Loss',
      description: 'Overall: 10% maximum loss\nDaily: 5% maximum daily loss',
      color: 'text-error'
    },
    {
      icon: 'Calendar',
      title: 'Minimum Trading Days',
      description: 'At least 4 trading days in each phase\nNo weekend holding requirements',
      color: 'text-primary'
    },
    {
      icon: 'Clock',
      title: 'Time Limits',
      description: 'Phase 1: 30 calendar days\nPhase 2: 60 calendar days',
      color: 'text-accent'
    }
  ];

  const rules = [
    "No Expert Advisors (EAs) or copy trading allowed",
    "Maximum 2% risk per trade recommended",
    "No holding positions over weekends (Friday 23:00 GMT)",
    "Minimum 4 trading days required in each phase",
    "News trading allowed but not during high-impact events",
    "Hedging and scalping strategies permitted"
  ];

  const successTips = [
    {
      title: 'Apply OUR Framework Consistently',
      description: 'Use Opportunity identification, Understanding confirmation, and Risk management on every trade'
    },
    {
      title: 'Stick to 1-2% Risk Per Trade',
      description: 'Use our position size calculator to maintain proper risk management throughout the challenge'
    },
    {
      title: 'Focus on High-Probability Setups',
      description: 'Quality over quantity - wait for clear framework signals rather than forcing trades'
    },
    {
      title: 'Maintain Trading Journal',
      description: 'Document each trade decision using the OUR framework for continuous improvement'
    }
  ];

  const tabs = [
    { id: 'requirements', label: 'Requirements', icon: 'CheckCircle' },
    { id: 'rules', label: 'Trading Rules', icon: 'BookOpen' },
    { id: 'tips', label: 'Success Tips', icon: 'Lightbulb' }
  ];

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-xl font-semibold text-foreground mb-2">FTMO Challenge Details</h3>
        <p className="text-muted-foreground">Understanding the evaluation process and requirements</p>
      </div>
      {/* Challenge Types */}
      <div className="p-6 border-b border-border">
        <h4 className="font-medium text-foreground mb-4">Available Challenge Types</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {challengeTypes?.map((challenge) => (
            <div 
              key={challenge?.id}
              className={`relative p-4 border rounded-lg transition-all duration-200 hover:border-primary/50 ${
                challenge?.popular ? 'border-primary bg-primary/5' : 'border-border'
              }`}
            >
              {challenge?.popular && (
                <div className="absolute -top-2 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <h5 className="font-semibold text-foreground mb-1">{challenge?.name}</h5>
                <div className="text-2xl font-bold text-primary mb-2">{challenge?.price}</div>
                <div className="text-sm text-muted-foreground mb-3">{challenge?.account} Account</div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phase 1:</span>
                    <span className="font-medium">{challenge?.phase1Target}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phase 2:</span>
                    <span className="font-medium">{challenge?.phase2Target}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Min Days:</span>
                    <span className="font-medium">{challenge?.minDays}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Tabs */}
      <div className="border-b border-border">
        <div className="flex">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab?.id
                  ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'requirements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {requirements?.map((req, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-surface flex items-center justify-center ${req?.color}`}>
                  <Icon name={req?.icon} size={20} />
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-1">{req?.title}</h5>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{req?.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'rules' && (
          <div className="space-y-4">
            {rules?.map((rule, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Icon name="CheckCircle" size={16} className="text-success mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">{rule}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'tips' && (
          <div className="space-y-6">
            {successTips?.map((tip, index) => (
              <div key={index} className="p-4 bg-surface rounded-lg">
                <h5 className="font-medium text-foreground mb-2">{tip?.title}</h5>
                <p className="text-sm text-muted-foreground">{tip?.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengeDetails;
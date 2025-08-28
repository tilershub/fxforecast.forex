import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const PreparationChecklist = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const checklistItems = [
    {
      id: 'framework',
      title: 'OUR Framework Mastery',
      description: 'Understand and practice all three pillars: Opportunity, Understanding, Risk',
      isRequired: true
    },
    {
      id: 'position-sizing',
      title: 'Position Size Calculator',
      description: 'Use our calculator to determine proper lot sizes for challenge requirements',
      isRequired: true
    },
    {
      id: 'risk-management',
      title: 'Risk Management Rules',
      description: 'Maximum 2% risk per trade, 5% daily loss limit understanding',
      isRequired: true
    },
    {
      id: 'psychology',
      title: 'Trading Psychology',
      description: 'Mental preparation for challenge pressure and consistency requirements',
      isRequired: true
    },
    {
      id: 'demo-practice',
      title: 'Demo Account Practice',
      description: 'At least 30 days of consistent demo trading with the framework',
      isRequired: false
    },
    {
      id: 'market-hours',
      title: 'Market Session Knowledge',
      description: 'Understanding of optimal trading hours and market volatility patterns',
      isRequired: false
    }
  ];

  const handleItemCheck = (itemId) => {
    setCheckedItems(prev => ({
      ...prev,
      [itemId]: !prev?.[itemId]
    }));
  };

  const requiredItemsChecked = checklistItems?.filter(item => item?.isRequired)?.every(item => checkedItems?.[item?.id]);

  const totalChecked = Object.values(checkedItems)?.filter(Boolean)?.length;
  const completionPercentage = Math.round((totalChecked / checklistItems?.length) * 100);

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Challenge Preparation Checklist</h3>
          <p className="text-muted-foreground">Ensure you're ready to apply the OUR framework effectively</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary">{completionPercentage}%</div>
          <div className="text-sm text-muted-foreground">Complete</div>
        </div>
      </div>
      <div className="w-full bg-muted rounded-full h-2 mb-6">
        <div 
          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>
      <div className="space-y-4">
        {checklistItems?.map((item) => (
          <div 
            key={item?.id}
            className={`flex items-start space-x-4 p-4 rounded-lg border transition-all duration-200 ${
              checkedItems?.[item?.id] 
                ? 'bg-success/5 border-success/20' :'bg-surface border-border hover:border-primary/30'
            }`}
          >
            <button
              onClick={() => handleItemCheck(item?.id)}
              className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                checkedItems?.[item?.id]
                  ? 'bg-success border-success text-white' :'border-border hover:border-primary'
              }`}
            >
              {checkedItems?.[item?.id] && (
                <Icon name="Check" size={14} strokeWidth={3} />
              )}
            </button>
            
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h4 className={`font-medium ${
                  checkedItems?.[item?.id] ? 'text-success' : 'text-foreground'
                }`}>
                  {item?.title}
                </h4>
                {item?.isRequired && (
                  <span className="px-2 py-1 text-xs font-medium bg-error/10 text-error rounded-full">
                    Required
                  </span>
                )}
              </div>
              <p className="text-sm text-muted-foreground">{item?.description}</p>
            </div>
          </div>
        ))}
      </div>
      {!requiredItemsChecked && (
        <div className="mt-6 p-4 bg-warning/10 border border-warning/20 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="AlertTriangle" size={20} className="text-warning" />
            <p className="text-sm font-medium text-warning">
              Complete all required items before starting your FTMO challenge
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreparationChecklist;
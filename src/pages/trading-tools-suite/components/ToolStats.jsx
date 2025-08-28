import React from 'react';
import Icon from '../../../components/AppIcon';

const ToolStats = () => {
  const stats = [
    {
      label: "Active Tools",
      value: "12",
      change: "+3 this month",
      icon: "Wrench",
      color: "text-success"
    },
    {
      label: "Calculations Today",
      value: "2,847",
      change: "+12% vs yesterday",
      icon: "Calculator",
      color: "text-primary"
    },
    {
      label: "Users Helped",
      value: "15,234",
      change: "+1,203 this week",
      icon: "Users",
      color: "text-accent"
    },
    {
      label: "Success Rate",
      value: "94.2%",
      change: "FTMO pass rate",
      icon: "TrendingUp",
      color: "text-success"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats?.map((stat, index) => (
        <div key={index} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between mb-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-muted`}>
              <Icon name={stat?.icon} size={20} className={stat?.color} strokeWidth={2} />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground font-mono">{stat?.value}</h3>
            <p className="text-sm text-muted-foreground mb-1">{stat?.label}</p>
            <p className={`text-xs ${stat?.color} font-medium`}>{stat?.change}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolStats;
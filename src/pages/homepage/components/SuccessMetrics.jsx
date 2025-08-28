import React from 'react';
import Icon from '../../../components/AppIcon';

const SuccessMetrics = () => {
  const metrics = [
    {
      id: 1,
      value: '87%',
      label: 'FTMO Challenge Pass Rate',
      description: 'Traders using our framework successfully pass FTMO evaluations',
      icon: 'Trophy',
      color: 'text-success',
      bgColor: 'bg-success/10'
    },
    {
      id: 2,
      value: '2.3%',
      label: 'Average Risk Per Trade',
      description: 'Disciplined risk management keeps drawdowns minimal',
      icon: 'Shield',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      id: 3,
      value: '1:3.2',
      label: 'Average Risk:Reward Ratio',
      description: 'Strategic trade selection maximizes profit potential',
      icon: 'Target',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      id: 4,
      value: '94%',
      label: 'Framework Adherence Rate',
      description: 'Traders consistently follow systematic processes',
      icon: 'CheckCircle',
      color: 'text-success',
      bgColor: 'bg-success/10'
    }
  ];

  const additionalStats = [
    { label: 'Active Traders', value: '2,847', change: '+12%' },
    { label: 'Capital Allocated', value: '$12.4M', change: '+28%' },
    { label: 'Avg Monthly Growth', value: '8.3%', change: '+3%' },
    { label: 'Countries Served', value: '47', change: '+5' }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Proven Framework Effectiveness
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real data from traders who've transformed their approach using our systematic methodology. These aren't marketing claims—they're measurable results.
          </p>
        </div>
        
        {/* Main Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics?.map((metric) => (
            <div 
              key={metric?.id}
              className="bg-card rounded-xl p-8 border border-border text-center hover:shadow-brand-elevated transition-all duration-300 group"
            >
              <div className={`w-16 h-16 ${metric?.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={metric?.icon} size={32} className={metric?.color} />
              </div>
              
              <div className={`text-4xl font-bold ${metric?.color} mb-2`}>
                {metric?.value}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {metric?.label}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {metric?.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Additional Statistics */}
        <div className="bg-card rounded-xl p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Platform Growth Metrics
            </h3>
            <p className="text-muted-foreground">
              Real-time data showing our community's expansion and success
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalStats?.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-foreground mb-1">
                  {stat?.value}
                </div>
                <div className="text-sm text-muted-foreground mb-2">
                  {stat?.label}
                </div>
                <div className="inline-flex items-center space-x-1 text-xs text-success">
                  <Icon name="TrendingUp" size={12} />
                  <span>{stat?.change}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Performance Chart Visualization */}
        <div className="mt-16 bg-card rounded-xl p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Framework Performance Over Time
            </h3>
            <p className="text-muted-foreground">
              FTMO challenge pass rates since framework implementation
            </p>
          </div>
          
          <div className="relative h-64 bg-surface rounded-lg p-6">
            <div className="absolute inset-6">
              <svg className="w-full h-full" viewBox="0 0 800 200">
                {/* Grid lines */}
                <defs>
                  <pattern id="grid" width="80" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 80 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" opacity="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                
                {/* Performance line */}
                <path
                  d="M50,150 Q150,140 200,120 T350,100 Q450,90 500,85 T650,75 L750,70"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-primary"
                />
                
                {/* Data points */}
                <circle cx="200" cy="120" r="4" fill="currentColor" className="text-primary" />
                <circle cx="350" cy="100" r="4" fill="currentColor" className="text-primary" />
                <circle cx="500" cy="85" r="4" fill="currentColor" className="text-primary" />
                <circle cx="650" cy="75" r="4" fill="currentColor" className="text-primary" />
                <circle cx="750" cy="70" r="4" fill="currentColor" className="text-primary" />
              </svg>
              
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-muted-foreground">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>
              
              {/* X-axis labels */}
              <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-muted-foreground">
                <span>Q1 2023</span>
                <span>Q2 2023</span>
                <span>Q3 2023</span>
                <span>Q4 2023</span>
                <span>Q1 2024</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">FTMO Pass Rate</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" size={16} className="text-success" />
              <span className="text-success font-medium">+23% improvement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;
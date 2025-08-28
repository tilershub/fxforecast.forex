import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustElements = () => {
  const trustFactors = [
    {
      icon: 'Shield',
      title: 'Affiliate Transparency',
      description: 'We earn a commission when you purchase an FTMO challenge through our link. This helps us provide free educational content.',
      type: 'disclosure'
    },
    {
      icon: 'AlertTriangle',
      title: 'Risk Disclaimer',
      description: 'Trading involves substantial risk. Past performance does not guarantee future results. Only trade with capital you can afford to lose.',
      type: 'warning'
    },
    {
      icon: 'TrendingUp',
      title: 'Realistic Expectations',
      description: 'FTMO challenge pass rates are approximately 10-15%. Success requires discipline, proper risk management, and consistent application of proven strategies.',
      type: 'info'
    },
    {
      icon: 'Users',
      title: 'Community Success',
      description: 'Our framework has helped traders improve their consistency, but individual results vary based on experience and discipline.',
      type: 'success'
    }
  ];

  const legalLinks = [
    { name: 'Risk Disclosure', href: '#risk-disclosure' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' },
    { name: 'Affiliate Disclosure', href: '#affiliate' }
  ];

  const getTypeStyles = (type) => {
    switch (type) {
      case 'warning':
        return {
          bg: 'bg-warning/10',
          border: 'border-warning/20',
          icon: 'text-warning',
          title: 'text-warning'
        };
      case 'success':
        return {
          bg: 'bg-success/10',
          border: 'border-success/20',
          icon: 'text-success',
          title: 'text-success'
        };
      case 'info':
        return {
          bg: 'bg-primary/10',
          border: 'border-primary/20',
          icon: 'text-primary',
          title: 'text-primary'
        };
      default:
        return {
          bg: 'bg-surface',
          border: 'border-border',
          icon: 'text-muted-foreground',
          title: 'text-foreground'
        };
    }
  };

  return (
    <div className="space-y-6">
      {/* Trust Factors */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center space-x-2 mb-6">
          <Icon name="ShieldCheck" size={24} className="text-primary" />
          <h3 className="text-xl font-semibold text-foreground">Trust & Transparency</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {trustFactors?.map((factor, index) => {
            const styles = getTypeStyles(factor?.type);
            return (
              <div 
                key={index}
                className={`p-4 rounded-lg border ${styles?.bg} ${styles?.border}`}
              >
                <div className="flex items-start space-x-3">
                  <Icon name={factor?.icon} size={20} className={`${styles?.icon} mt-0.5 flex-shrink-0`} />
                  <div>
                    <h4 className={`font-medium mb-2 ${styles?.title}`}>{factor?.title}</h4>
                    <p className="text-sm text-muted-foreground">{factor?.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Success Rate Information */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h4 className="font-semibold text-foreground mb-4">FTMO Challenge Statistics</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="text-center p-4 bg-surface rounded-lg">
            <div className="text-2xl font-bold text-primary mb-1">10-15%</div>
            <div className="text-sm text-muted-foreground">Average Pass Rate</div>
          </div>
          <div className="text-center p-4 bg-surface rounded-lg">
            <div className="text-2xl font-bold text-accent mb-1">30 Days</div>
            <div className="text-sm text-muted-foreground">Phase 1 Duration</div>
          </div>
          <div className="text-center p-4 bg-surface rounded-lg">
            <div className="text-2xl font-bold text-success mb-1">80%</div>
            <div className="text-sm text-muted-foreground">Funded Trader Retention</div>
          </div>
        </div>

        <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Info" size={16} className="text-warning" />
            <span className="text-sm font-medium text-warning">Important Note</span>
          </div>
          <p className="text-sm text-muted-foreground">
            These statistics are industry averages. Success depends on individual skill, discipline, 
            and consistent application of proven trading strategies like our OUR framework.
          </p>
        </div>
      </div>
      {/* Legal Links */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h4 className="font-semibold text-foreground mb-4">Legal Information</h4>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {legalLinks?.map((link, index) => (
            <a
              key={index}
              href={link?.href}
              className="flex items-center space-x-2 p-3 bg-surface rounded-lg hover:bg-muted transition-colors duration-200"
            >
              <Icon name="FileText" size={16} className="text-muted-foreground" />
              <span className="text-sm text-muted-foreground hover:text-foreground">{link?.name}</span>
            </a>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            Last updated: August 2024 • FXFORECAST is an independent trading education platform • 
            Not affiliated with FTMO beyond affiliate partnership
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrustElements;
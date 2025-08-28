import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SocialProof = () => {
  const successStories = [
    {
      id: 1,
      name: 'Marcus Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      challenge: '$100K Challenge',
      passDate: 'August 2024',
      testimonial: `The OUR framework completely changed my approach. Passed both phases by focusing on risk management and waiting for high-probability setups.`,
      profit: '+12.4%',
      timeframe: '23 days'
    },
    {
      id: 2,
      name: 'Sarah Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      challenge: '$50K Challenge',
      passDate: 'July 2024',
      testimonial: `After failing twice, the systematic approach finally clicked. The position size calculator was crucial for maintaining proper risk.`,
      profit: '+9.8%',
      timeframe: '18 days'
    },
    {
      id: 3,
      name: 'David Thompson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      challenge: '$200K Challenge',
      passDate: 'August 2024',
      testimonial: `The framework's emphasis on Understanding really helped me avoid bad trades. Consistency over home runs was the key.`,profit: '+8.9%',timeframe: '26 days'
    }
  ];

  const stats = [
    {
      icon: 'Users',
      value: '247',
      label: 'Framework Users',
      description: 'Traders actively using OUR methodology'
    },
    {
      icon: 'Trophy',
      value: '68',
      label: 'Challenge Passes',
      description: 'Successful FTMO challenges this year'
    },
    {
      icon: 'TrendingUp',
      value: '27.5%',
      label: 'Success Rate',
      description: 'Above industry average pass rate'
    },
    {
      icon: 'DollarSign',
      value: '$2.1M',
      label: 'Funded Capital',
      description: 'Total funding secured by users'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Success Statistics */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-2">Framework Success Metrics</h3>
          <p className="text-muted-foreground">Real results from traders using the OUR methodology</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats?.map((stat, index) => (
            <div key={index} className="text-center p-4 bg-surface rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={stat?.icon} size={24} className="text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat?.value}</div>
              <div className="text-sm font-medium text-foreground mb-1">{stat?.label}</div>
              <div className="text-xs text-muted-foreground">{stat?.description}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Recent Success Stories */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Recent Challenge Successes</h3>
            <p className="text-muted-foreground">Traders who passed using the OUR framework</p>
          </div>
          <div className="flex items-center space-x-2 text-sm text-success">
            <Icon name="CheckCircle" size={16} />
            <span>Verified Results</span>
          </div>
        </div>

        <div className="space-y-4">
          {successStories?.map((story) => (
            <div key={story?.id} className="p-4 bg-surface rounded-lg border border-border">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Image
                    src={story?.avatar}
                    alt={story?.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-foreground">{story?.name}</h4>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{story?.challenge}</span>
                        <span>•</span>
                        <span>{story?.passDate}</span>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-success">{story?.profit}</div>
                      <div className="text-sm text-muted-foreground">{story?.timeframe}</div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground italic">"{story?.testimonial}"</p>
                  
                  <div className="flex items-center space-x-4 mt-3">
                    <div className="flex items-center space-x-1">
                      <Icon name="Target" size={14} className="text-success" />
                      <span className="text-xs text-muted-foreground">Phase 1 & 2 Passed</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Shield" size={14} className="text-primary" />
                      <span className="text-xs text-muted-foreground">Risk Managed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="Info" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Results Disclaimer</span>
          </div>
          <p className="text-xs text-muted-foreground">
            These are individual results and may not be representative of typical outcomes. 
            Success in trading requires discipline, proper risk management, and continuous learning. 
            Past performance does not guarantee future results.
          </p>
        </div>
      </div>
      {/* Community Engagement */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h4 className="font-semibold text-foreground mb-4">Join Our Trading Community</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-4 p-4 bg-surface rounded-lg">
            <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
              <Icon name="MessageCircle" size={20} className="text-success" />
            </div>
            <div>
              <h5 className="font-medium text-foreground">WhatsApp Support</h5>
              <p className="text-sm text-muted-foreground">Direct access for questions and guidance</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-4 bg-surface rounded-lg">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="BookOpen" size={20} className="text-primary" />
            </div>
            <div>
              <h5 className="font-medium text-foreground">Framework Updates</h5>
              <p className="text-sm text-muted-foreground">Latest methodology improvements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialProof;
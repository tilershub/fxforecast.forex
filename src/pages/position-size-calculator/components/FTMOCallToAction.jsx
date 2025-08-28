import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FTMOCallToAction = () => {
  const [isHovered, setIsHovered] = useState(false);

  const benefits = [
    {
      icon: 'Shield',
      title: 'Risk Management Focus',
      description: 'FTMO evaluates your risk management skills - exactly what this calculator teaches'
    },
    {
      icon: 'TrendingUp',
      title: 'Systematic Approach',
      description: 'Consistent position sizing is key to passing FTMO challenges successfully'
    },
    {
      icon: 'Target',
      title: 'Proven Methodology',
      description: 'Our framework aligns perfectly with FTMO\'s evaluation criteria'
    }
  ];

  const stats = [
    { label: 'Success Rate', value: '78%', description: 'Using systematic approach' },
    { label: 'Avg. Challenge Time', value: '12 days', description: 'With proper risk management' },
    { label: 'Max Drawdown', value: '<3%', description: 'Disciplined position sizing' }
  ];

  return (
    <div className="bg-gradient-to-br from-primary to-brand-royal rounded-xl shadow-brand-elevated overflow-hidden">
      {/* Header Section */}
      <div className="p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Icon name="ExternalLink" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Ready for FTMO Challenge?</h3>
              <p className="text-white/80">Apply this discipline to funded trading</p>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
              <Icon name="Award" size={32} className="text-accent" />
            </div>
          </div>
        </div>

        <p className="text-white/90 leading-relaxed mb-6">
          You've just experienced the systematic approach to position sizing that separates successful 
          traders from gamblers. This disciplined methodology is exactly what FTMO evaluators look for 
          in funded account challenges.
        </p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {benefits?.map((benefit, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center mt-0.5">
                  <Icon name={benefit?.icon} size={16} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">{benefit?.title}</h4>
                  <p className="text-sm text-white/80 leading-relaxed">{benefit?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm mb-6">
          <h4 className="font-semibold text-white mb-4 flex items-center">
            <Icon name="BarChart3" size={16} className="mr-2" />
            FXFORECAST Methodology Results
          </h4>
          <div className="grid grid-cols-3 gap-4">
            {stats?.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-2xl font-bold text-accent mb-1">{stat?.value}</p>
                <p className="text-sm font-medium text-white mb-1">{stat?.label}</p>
                <p className="text-xs text-white/70">{stat?.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/ftmo-affiliate-gateway" className="flex-1">
            <Button
              variant="secondary"
              size="lg"
              fullWidth
              iconName="ExternalLink"
              iconPosition="right"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Start FTMO Challenge
            </Button>
          </Link>
          <Link to="/framework-deep-dive" className="flex-1">
            <Button
              variant="outline"
              size="lg"
              fullWidth
              iconName="BookOpen"
              iconPosition="right"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              Learn Our Framework
            </Button>
          </Link>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="bg-white/5 border-t border-white/10 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-white/80">
            <Icon name="Shield" size={16} />
            <span className="text-sm">Risk-managed trading approach</span>
          </div>
          <div className="flex items-center space-x-2 text-white/80">
            <span className="text-sm">Powered by FXFORECAST</span>
            <Icon name="TrendingUp" size={16} />
          </div>
        </div>
      </div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full transition-transform duration-1000 ${isHovered ? 'scale-110' : 'scale-100'}`}></div>
        <div className={`absolute -bottom-4 -left-4 w-32 h-32 bg-white/10 rounded-full transition-transform duration-1000 ${isHovered ? 'scale-105' : 'scale-100'}`}></div>
      </div>
    </div>
  );
};

export default FTMOCallToAction;
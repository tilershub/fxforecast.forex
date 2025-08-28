import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedTool = () => {
  return (
    <div className="bg-gradient-to-r from-accent to-orange-500 rounded-xl p-8 mb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 noise-overlay"></div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex-1 mb-6 lg:mb-0 lg:mr-8">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Icon name="Calculator" size={24} color="white" strokeWidth={2.5} />
            </div>
            <div>
              <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full font-medium">
                Most Popular
              </span>
            </div>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
            Position Size Calculator
          </h2>
          <p className="text-orange-100 leading-relaxed mb-4">
            Our flagship tool that demonstrates the OUR Framework in action. Calculate precise position sizes based on your risk tolerance, account balance, and stop loss levels. Used by thousands of traders to pass FTMO challenges.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {['Risk Management', 'FTMO Ready', 'Multi-Currency', 'Offline Ready']?.map((tag, index) => (
              <span key={index} className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="outline"
              size="lg"
              className="bg-white/20 border-white/30 text-white hover:bg-white/30"
              asChild
            >
              <Link to="/position-size-calculator">
                Use Calculator
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Link>
            </Button>
            
            <Button 
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10"
              asChild
            >
              <Link to="/framework-deep-dive">
                Learn Framework
                <Icon name="BookOpen" size={18} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Visual Element */}
        <div className="flex-shrink-0 hidden lg:block">
          <div className="w-48 h-48 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <div className="text-center">
              <div className="text-4xl font-bold text-white font-mono mb-2">2.5%</div>
              <div className="text-orange-100 text-sm">Risk Per Trade</div>
              <div className="w-16 h-1 bg-white/30 mx-auto mt-3 mb-3"></div>
              <div className="text-2xl font-bold text-white font-mono mb-1">$250</div>
              <div className="text-orange-100 text-xs">Position Size</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedTool;
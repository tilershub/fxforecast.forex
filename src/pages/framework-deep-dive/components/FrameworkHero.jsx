import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FrameworkHero = ({ onGetStarted }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-brand-royal to-primary overflow-hidden">
      <div className="absolute inset-0 noise-overlay"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Icon name="Target" size={20} color="white" />
            <span className="text-white/90 text-sm font-medium">Complete Trading Framework</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 text-balance">
            The <span className="text-accent">OUR</span> Framework
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/80 mb-8 max-w-3xl mx-auto text-balance">
            Transform forex trading from gambling into systematic business practice. 
            Master the methodology that helps traders consistently pass FTMO challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              variant="secondary" 
              size="lg"
              onClick={onGetStarted}
              iconName="Play"
              iconPosition="left"
              className="bg-white text-primary hover:bg-white/90"
            >
              Start Learning Framework
            </Button>
            
            <Button 
              variant="ghost" 
              size="lg"
              onClick={() => document.getElementById('framework-overview')?.scrollIntoView({ behavior: 'smooth' })}
              iconName="ChevronDown"
              iconPosition="right"
              className="text-white hover:bg-white/10"
            >
              Explore Methodology
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Target" size={24} color="white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Objective</h3>
              <p className="text-white/70 text-sm">Clear goals and systematic market analysis</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Layers" size={24} color="white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Unified</h3>
              <p className="text-white/70 text-sm">Consistent approach across all trades</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="RotateCcw" size={24} color="white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Repeatable</h3>
              <p className="text-white/70 text-sm">Systematic execution and review process</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworkHero;
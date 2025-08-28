import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-brand-royal to-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-lg rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-white/20 rounded-lg -rotate-12"></div>
        <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-white/20 rounded-full"></div>
      </div>

      {/* Data Visualization Graphics */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <path
            d="M100,400 Q300,200 500,350 T900,300 L1100,250"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
          />
          <path
            d="M150,500 Q350,300 550,450 T950,400 L1150,350"
            stroke="white"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="relative z-10 flex items-center min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 border border-white/20">
                  <Icon name="TrendingUp" size={16} className="mr-2" />
                  Systematic Trading Excellence
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Trade with{' '}
                <span className="text-accent">Confidence.</span>
                <br />
                Pass{' '}
                <span className="text-accent">Challenges.</span>
                <br />
                Grow{' '}
                <span className="text-accent">Consistently.</span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
                Transform your trading from gambling into systematic business practice with our proven OUR methodology. Join thousands who've passed FTMO challenges using disciplined, data-driven approaches.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/framework-deep-dive">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4"
                    iconName="BookOpen"
                    iconPosition="right"
                  >
                    Explore OUR Framework
                  </Button>
                </Link>
                
                <Link to="/position-size-calculator">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4"
                    iconName="Calculator"
                    iconPosition="right"
                  >
                    Try Position Calculator
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-white/70">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={20} />
                  <span className="text-sm">Risk Managed</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Target" size={20} />
                  <span className="text-sm">FTMO Focused</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={20} />
                  <span className="text-sm">Proven Results</span>
                </div>
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Live Trading Metrics</h3>
                  <p className="text-white/70">Real-time framework performance</p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-1">87%</div>
                    <div className="text-sm text-white/70">FTMO Pass Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-1">2.3%</div>
                    <div className="text-sm text-white/70">Avg Risk Per Trade</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-1">1:3.2</div>
                    <div className="text-sm text-white/70">Risk:Reward Ratio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-1">94%</div>
                    <div className="text-sm text-white/70">Rule Adherence</div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="flex items-center justify-between text-sm text-white/70 mb-2">
                    <span>Framework Effectiveness</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
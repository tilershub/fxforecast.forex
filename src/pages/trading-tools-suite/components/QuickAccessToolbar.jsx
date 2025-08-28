import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';


const QuickAccessToolbar = () => {
  const quickTools = [
    {
      name: "Position Calculator",
      icon: "Calculator",
      link: "/position-size-calculator",
      description: "Calculate position sizes"
    },
    {
      name: "Risk Manager",
      icon: "Shield",
      description: "Manage portfolio risk"
    },
    {
      name: "Profit Target",
      icon: "Target",
      description: "Set profit targets"
    },
    {
      name: "Journal",
      icon: "BookOpen",
      description: "Track your trades"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-primary to-brand-royal rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">Quick Access Tools</h3>
          <p className="text-blue-100 text-sm">Jump straight to your most-used trading utilities</p>
        </div>
        <div className="hidden sm:block">
          <Icon name="Zap" size={32} color="rgba(255,255,255,0.3)" strokeWidth={1.5} />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickTools?.map((tool, index) => (
          <div key={index}>
            {tool?.link ? (
              <Link
                to={tool?.link}
                className="block bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-all duration-200 group"
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Icon name={tool?.icon} size={20} color="white" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">{tool?.name}</h4>
                    <p className="text-blue-100 text-xs">{tool?.description}</p>
                  </div>
                </div>
              </Link>
            ) : (
              <button className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-all duration-200 group">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Icon name={tool?.icon} size={20} color="white" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm">{tool?.name}</h4>
                    <p className="text-blue-100 text-xs">{tool?.description}</p>
                  </div>
                </div>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickAccessToolbar;
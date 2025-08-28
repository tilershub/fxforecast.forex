import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const RiskDisclaimer = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 bg-error text-error-foreground shadow-lg border-t border-error/20 transition-all duration-300 ${
      isMinimized ? 'translate-y-full' : 'translate-y-0'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-3">
            <Icon name="AlertTriangle" size={20} className="flex-shrink-0" />
            <p className="text-sm font-medium">
              <span className="font-semibold">Risk Warning:</span> Trading involves substantial risk of loss. Past performance does not guarantee future results. Only trade with capital you can afford to lose.
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(true)}
              className="p-1 hover:bg-error-foreground/10 rounded transition-colors duration-200"
              aria-label="Minimize risk disclaimer"
            >
              <Icon name="ChevronDown" size={16} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Restore button when minimized */}
      {isMinimized && (
        <button
          onClick={() => setIsMinimized(false)}
          className="fixed bottom-4 right-4 bg-error text-error-foreground p-2 rounded-full shadow-lg hover:bg-error/90 transition-colors duration-200"
          aria-label="Show risk disclaimer"
        >
          <Icon name="AlertTriangle" size={16} />
        </button>
      )}
    </div>
  );
};

export default RiskDisclaimer;
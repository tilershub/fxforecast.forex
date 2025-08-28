import React from 'react';
import Icon from '../../../components/AppIcon';

const ToolCategory = ({ title, description, icon, children, count }) => {
  return (
    <div className="mb-12">
      {/* Category Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-14 h-14 bg-gradient-to-br from-primary to-brand-royal rounded-xl flex items-center justify-center">
          <Icon name={icon} size={28} color="white" strokeWidth={2} />
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h2 className="text-2xl font-bold text-foreground">{title}</h2>
            <span className="bg-muted text-muted-foreground text-sm px-3 py-1 rounded-full font-medium">
              {count} {count === 1 ? 'Tool' : 'Tools'}
            </span>
          </div>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </div>
  );
};

export default ToolCategory;
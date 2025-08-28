import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryTabs = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { id: 'all', name: 'All Articles', icon: 'Grid3X3', count: 47 },
    { id: 'framework-implementation', name: 'Framework', icon: 'Target', count: 12 },
    { id: 'risk-management', name: 'Risk Management', icon: 'Shield', count: 15 },
    { id: 'trading-psychology', name: 'Psychology', icon: 'Brain', count: 8 },
    { id: 'ftmo-challenge-prep', name: 'FTMO Prep', icon: 'Trophy', count: 9 },
    { id: 'market-analysis', name: 'Analysis', icon: 'TrendingUp', count: 3 }
  ];

  return (
    <div className="bg-card border border-border rounded-xl p-2 shadow-sm">
      <div className="flex flex-wrap gap-1">
        {categories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setActiveCategory(category?.id)}
            className={`flex items-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
              activeCategory === category?.id
                ? 'bg-primary text-primary-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
          >
            <Icon name={category?.icon} size={16} />
            <span className="hidden sm:inline">{category?.name}</span>
            <span className="sm:hidden">{category?.name?.split(' ')?.[0]}</span>
            <span className={`inline-flex items-center justify-center w-5 h-5 text-xs rounded-full ${
              activeCategory === category?.id
                ? 'bg-primary-foreground/20 text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}>
              {category?.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;
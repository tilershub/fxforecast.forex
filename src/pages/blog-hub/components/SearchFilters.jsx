import React from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const SearchFilters = ({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory,
  selectedDifficulty,
  setSelectedDifficulty,
  selectedContentType,
  setSelectedContentType,
  onClearFilters 
}) => {
  const categoryOptions = [
    { value: 'all', label: 'All Categories' },
    { value: 'framework-implementation', label: 'Framework Implementation' },
    { value: 'risk-management', label: 'Risk Management' },
    { value: 'trading-psychology', label: 'Trading Psychology' },
    { value: 'ftmo-challenge-prep', label: 'FTMO Challenge Prep' },
    { value: 'market-analysis', label: 'Market Analysis' }
  ];

  const difficultyOptions = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' }
  ];

  const contentTypeOptions = [
    { value: 'all', label: 'All Types' },
    { value: 'guide', label: 'Guides' },
    { value: 'case-study', label: 'Case Studies' },
    { value: 'analysis', label: 'Analysis' },
    { value: 'tutorial', label: 'Tutorials' }
  ];

  const hasActiveFilters = selectedCategory !== 'all' || selectedDifficulty !== 'all' || selectedContentType !== 'all' || searchQuery?.length > 0;

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground flex items-center">
          <Icon name="Search" size={20} className="mr-2 text-primary" />
          Search & Filter
        </h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            iconSize={14}
          >
            Clear All
          </Button>
        )}
      </div>
      <div className="space-y-4">
        {/* Search Input */}
        <div>
          <Input
            type="search"
            placeholder="Search articles, topics, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
            className="w-full"
          />
        </div>

        {/* Filter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select
            label="Category"
            options={categoryOptions}
            value={selectedCategory}
            onChange={setSelectedCategory}
            className="w-full"
          />

          <Select
            label="Difficulty"
            options={difficultyOptions}
            value={selectedDifficulty}
            onChange={setSelectedDifficulty}
            className="w-full"
          />

          <Select
            label="Content Type"
            options={contentTypeOptions}
            value={selectedContentType}
            onChange={setSelectedContentType}
            className="w-full"
          />
        </div>

        {/* Quick Filter Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="text-sm text-muted-foreground">Quick filters:</span>
          <button 
            onClick={() => setSelectedCategory('ftmo-challenge-prep')}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
          >
            <Icon name="Trophy" size={12} className="mr-1" />
            FTMO Prep
          </button>
          <button 
            onClick={() => setSelectedCategory('risk-management')}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-success/10 text-success hover:bg-success/20 transition-colors duration-200"
          >
            <Icon name="Shield" size={12} className="mr-1" />
            Risk Management
          </button>
          <button 
            onClick={() => setSelectedDifficulty('beginner')}
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent hover:bg-accent/20 transition-colors duration-200"
          >
            <Icon name="Star" size={12} className="mr-1" />
            Beginner Friendly
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ToolCard = ({ 
  title, 
  description, 
  icon, 
  features, 
  isComingSoon = false, 
  link, 
  category,
  difficulty = "Beginner"
}) => {
  const difficultyColors = {
    "Beginner": "bg-success/10 text-success",
    "Intermediate": "bg-warning/10 text-warning", 
    "Advanced": "bg-error/10 text-error"
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:shadow-brand transition-all duration-300 group relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 noise-overlay"></div>
      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-brand-royal rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon name={icon} size={24} color="white" strokeWidth={2} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-muted-foreground font-mono uppercase tracking-wide">{category}</span>
                <span className={`text-xs px-2 py-1 rounded-full font-medium ${difficultyColors?.[difficulty]}`}>
                  {difficulty}
                </span>
              </div>
            </div>
          </div>
          
          {isComingSoon && (
            <span className="bg-accent/10 text-accent text-xs px-3 py-1 rounded-full font-medium">
              Coming Soon
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-6">
          {features?.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Icon name="Check" size={14} color="var(--color-success)" strokeWidth={2.5} />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* Action */}
        <div className="flex items-center justify-between">
          {isComingSoon ? (
            <Button variant="outline" disabled fullWidth>
              <Icon name="Clock" size={16} className="mr-2" />
              Notify Me
            </Button>
          ) : link ? (
            <Button 
              variant="default" 
              size="sm" 
              fullWidth
              asChild
            >
              <Link to={link}>
                Use Tool
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Link>
            </Button>
          ) : (
            <Button variant="outline" fullWidth>
              Launch Tool
              <Icon name="ExternalLink" size={16} className="ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-br from-success/10 to-success/5 border border-success/20 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-xl font-bold text-success mb-2">Welcome to FXFORECAST!</h3>
        <p className="text-muted-foreground mb-4">
          You're now subscribed to our exclusive trading insights and framework updates.
        </p>
        <p className="text-sm text-muted-foreground">
          Check your inbox for a welcome email with your first advanced framework guide.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-primary/5 to-brand-royal/5 border border-primary/20 rounded-xl p-8">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Mail" size={32} className="text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">
          Advanced Framework Insights
        </h3>
        <p className="text-muted-foreground">
          Get exclusive trading strategies, FTMO challenge tips, and systematic approach guides delivered weekly.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
          required
          className="w-full"
        />
        
        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isLoading}
          iconName="ArrowRight"
          iconPosition="right"
          disabled={!email || isLoading}
        >
          {isLoading ? 'Subscribing...' : 'Get Free Framework Guide'}
        </Button>
      </form>
      <div className="mt-6 space-y-3">
        <div className="flex items-center text-sm text-muted-foreground">
          <Icon name="Gift" size={16} className="mr-2 text-accent" />
          <span>Free welcome guide: "5-Step FTMO Challenge Framework"</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Icon name="Clock" size={16} className="mr-2 text-accent" />
          <span>Weekly insights on systematic trading approaches</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Icon name="Shield" size={16} className="mr-2 text-accent" />
          <span>No spam, unsubscribe anytime</span>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
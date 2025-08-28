import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!email) return;

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
      <div className="bg-gradient-to-r from-success to-emerald-600 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} color="white" strokeWidth={2} />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Welcome to the Community!</h3>
        <p className="text-green-100 mb-4">
          You'll receive advanced tool updates, exclusive calculators, and framework insights directly in your inbox.
        </p>
        <Button 
          variant="outline" 
          className="bg-white/20 border-white/30 text-white hover:bg-white/30"
          onClick={() => setIsSubscribed(false)}
        >
          Subscribe Another Email
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-primary to-brand-royal rounded-xl p-8">
      <div className="max-w-md mx-auto text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Mail" size={32} color="white" strokeWidth={2} />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2">Get Advanced Tools First</h3>
        <p className="text-blue-100 mb-6 text-sm leading-relaxed">
          Subscribe for early access to new calculators, exclusive risk management tools, and framework updates that help you pass FTMO challenges.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e?.target?.value)}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
          />
          
          <Button 
            type="submit" 
            variant="outline"
            fullWidth
            loading={isLoading}
            className="bg-white/20 border-white/30 text-white hover:bg-white/30"
          >
            {isLoading ? 'Subscribing...' : 'Get Tool Updates'}
          </Button>
        </form>

        <p className="text-blue-200 text-xs mt-4">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;
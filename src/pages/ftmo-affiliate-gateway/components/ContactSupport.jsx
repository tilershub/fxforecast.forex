import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactSupport = () => {
  const [isWhatsAppHovered, setIsWhatsAppHovered] = useState(false);

  const supportOptions = [
    {
      icon: 'MessageCircle',
      title: 'WhatsApp Support',
      description: 'Get instant answers to your questions before starting the challenge',
      action: 'Chat Now',
      href: 'https://wa.me/1234567890?text=Hi%2C%20I%20have%20questions%20about%20the%20FTMO%20challenge%20and%20OUR%20framework',
      primary: true,
      availability: 'Available 9 AM - 6 PM EST'
    },
    {
      icon: 'Mail',
      title: 'Email Support',
      description: 'Detailed questions about framework implementation and strategy',
      action: 'Send Email',
      href: 'mailto:support@fxforecast.com?subject=FTMO Challenge Questions',
      primary: false,
      availability: 'Response within 24 hours'
    },
    {
      icon: 'BookOpen',
      title: 'Framework Guide',
      description: 'Comprehensive documentation of the OUR methodology',
      action: 'View Guide',
      href: '/framework-deep-dive',
      primary: false,
      availability: 'Always available'
    },
    {
      icon: 'Calculator',
      title: 'Position Calculator',
      description: 'Practice risk management before your challenge',
      action: 'Use Calculator',
      href: '/position-size-calculator',
      primary: false,
      availability: 'Free tool'
    }
  ];

  const faqItems = [
    {
      question: 'Should I practice the framework before starting FTMO?',
      answer: 'Absolutely. We recommend at least 30 days of demo trading using the OUR framework to build consistency and confidence before attempting the challenge.'
    },
    {
      question: 'What if I fail the challenge?',
      answer: 'Challenge failure is common (85-90% fail rate). Use it as a learning experience, refine your framework application, and try again when you\'re more prepared.'
    },
    {
      question: 'Can you guarantee I\'ll pass using your framework?',
      answer: 'No. Trading success depends on individual discipline, market conditions, and proper framework implementation. We provide education, not guarantees.'
    },
    {
      question: 'Do you offer refunds through your affiliate link?',
      answer: 'Refund policies are set by FTMO, not us. Check their terms before purchasing. We earn a commission but cannot influence their refund decisions.'
    }
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi! I'm interested in starting an FTMO challenge and have questions about applying the OUR framework. Can you help me prepare?`);
    const whatsappUrl = `https://wa.me/1234567890?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-6">
      {/* Support Options */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-foreground mb-2">Questions Before Starting?</h3>
          <p className="text-muted-foreground">Get the support you need for challenge success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {supportOptions?.map((option, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border transition-all duration-200 ${
                option?.primary 
                  ? 'border-primary bg-primary/5 hover:bg-primary/10' :'border-border bg-surface hover:border-primary/30'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                  option?.primary ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                }`}>
                  <Icon name={option?.icon} size={20} />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-medium text-foreground mb-1">{option?.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{option?.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{option?.availability}</span>
                    
                    {option?.href?.startsWith('http') || option?.href?.startsWith('mailto:') ? (
                      <Button
                        variant={option?.primary ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => window.open(option?.href, '_blank')}
                      >
                        {option?.action}
                      </Button>
                    ) : (
                      <Button
                        variant={option?.primary ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => window.location.href = option?.href}
                      >
                        {option?.action}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-6 p-4 bg-success/5 border border-success/20 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center">
                <Icon name="MessageCircle" size={20} className="text-white" />
              </div>
              <div>
                <h4 className="font-medium text-success">Need Immediate Help?</h4>
                <p className="text-sm text-muted-foreground">Chat with us on WhatsApp for instant support</p>
              </div>
            </div>
            
            <Button
              variant="success"
              onClick={handleWhatsAppClick}
              onMouseEnter={() => setIsWhatsAppHovered(true)}
              onMouseLeave={() => setIsWhatsAppHovered(false)}
              iconName="ExternalLink"
              iconPosition="right"
              iconSize={14}
            >
              {isWhatsAppHovered ? 'Open WhatsApp' : 'Chat Now'}
            </Button>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h4 className="font-semibold text-foreground mb-6">Frequently Asked Questions</h4>
        
        <div className="space-y-4">
          {faqItems?.map((faq, index) => (
            <div key={index} className="p-4 bg-surface rounded-lg">
              <h5 className="font-medium text-foreground mb-2">{faq?.question}</h5>
              <p className="text-sm text-muted-foreground">{faq?.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
          <div className="flex items-center space-x-2 mb-2">
            <Icon name="HelpCircle" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Still Have Questions?</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Don't hesitate to reach out. We're here to help you succeed with proper preparation and realistic expectations.
          </p>
        </div>
      </div>
      {/* Response Time Notice */}
      <div className="bg-card border border-border rounded-xl p-4">
        <div className="flex items-center space-x-3">
          <Icon name="Clock" size={20} className="text-muted-foreground" />
          <div>
            <p className="text-sm text-foreground font-medium">Support Hours</p>
            <p className="text-xs text-muted-foreground">
              WhatsApp: 9 AM - 6 PM EST • Email: 24-hour response • 
              Weekend support available for urgent questions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSupport;
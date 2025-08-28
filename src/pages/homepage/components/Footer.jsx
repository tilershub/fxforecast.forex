import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();
  
  const footerLinks = {
    framework: [
      { name: 'OUR Methodology', path: '/framework-deep-dive' },
      { name: 'Position Calculator', path: '/position-size-calculator' },
      { name: 'Trading Tools', path: '/trading-tools-suite' },
      { name: 'Blog & Insights', path: '/blog-hub' }
    ],
    support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'WhatsApp Support', path: '#', external: true },
      { name: 'FAQ', path: '/faq' },
      { name: 'Community', path: '/community' }
    ],
    legal: [
      { name: 'Risk Disclaimer', path: '/risk-disclaimer' },
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms-of-service' },
      { name: 'Affiliate Disclosure', path: '/affiliate-disclosure' }
    ]
  };

  const socialLinks = [
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/fxforecast' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/company/fxforecast' },
    { name: 'YouTube', icon: 'Youtube', url: 'https://youtube.com/@fxforecast' },
    { name: 'Telegram', icon: 'Send', url: 'https://t.me/fxforecast' }
  ];

  const whatsappNumber = "+1234567890";
  const whatsappMessage = encodeURIComponent("Hi! I'd like to learn more about FXFORECAST trading framework.");

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link to="/homepage" className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-brand-royal rounded-lg flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} color="white" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-80"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-primary tracking-tight">FXFORECAST</span>
                  <span className="text-xs text-muted-foreground font-mono -mt-1">Systematic Trading</span>
                </div>
              </Link>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Transform your trading from gambling into systematic business practice with our proven OUR methodology.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks?.map((social) => (
                  <a
                    key={social?.name}
                    href={social?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    aria-label={social?.name}
                  >
                    <Icon name={social?.icon} size={18} />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Framework Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Framework</h3>
              <ul className="space-y-4">
                {footerLinks?.framework?.map((link) => (
                  <li key={link?.name}>
                    <Link
                      to={link?.path}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center space-x-2"
                    >
                      <Icon name="ArrowRight" size={14} />
                      <span>{link?.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Support Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Support</h3>
              <ul className="space-y-4">
                {footerLinks?.support?.map((link) => (
                  <li key={link?.name}>
                    {link?.external ? (
                      <button
                        onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center space-x-2"
                      >
                        <Icon name="ArrowRight" size={14} />
                        <span>{link?.name}</span>
                      </button>
                    ) : (
                      <Link
                        to={link?.path}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center space-x-2"
                      >
                        <Icon name="ArrowRight" size={14} />
                        <span>{link?.name}</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Legal</h3>
              <ul className="space-y-4">
                {footerLinks?.legal?.map((link) => (
                  <li key={link?.name}>
                    <Link
                      to={link?.path}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center space-x-2"
                    >
                      <Icon name="ArrowRight" size={14} />
                      <span>{link?.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="py-8 border-t border-border">
          <div className="bg-surface rounded-xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Stay Updated with Market Insights
              </h3>
              <p className="text-muted-foreground">
                Get weekly trading analysis, framework updates, and FTMO challenge strategies delivered to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2">
                <Icon name="Send" size={16} />
                <span>Subscribe</span>
              </button>
            </div>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              No spam. Unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} FXFORECAST. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} className="text-primary" />
                <span>47 Countries</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-accent" />
                <span>2,847+ Traders</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Risk Warning */}
        <div className="py-4 border-t border-error/20 bg-error/5">
          <div className="flex items-start space-x-3">
            <Icon name="AlertTriangle" size={20} className="text-error flex-shrink-0 mt-0.5" />
            <div className="text-sm text-error">
              <strong>Risk Warning:</strong> Trading foreign exchange and contracts for difference involves substantial risk of loss and may not be suitable for all investors. Past performance does not guarantee future results. Please ensure you fully understand the risks involved and seek independent advice if necessary.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
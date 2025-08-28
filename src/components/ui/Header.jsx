import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Framework', path: '/framework-deep-dive', icon: 'BookOpen' },
    { name: 'Calculator', path: '/position-size-calculator', icon: 'Calculator' },
    { name: 'Tools', path: '/trading-tools-suite', icon: 'Wrench' },
    { name: 'Blog', path: '/blog-hub', icon: 'FileText' },
  ];

  const secondaryItems = [
    { name: 'FTMO Gateway', path: '/ftmo-affiliate-gateway', icon: 'ExternalLink' },
  ];

  const isActivePath = (path) => {
    return location?.pathname === path || (path === '/homepage' && location?.pathname === '/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-brand' 
            : 'bg-background/80 backdrop-blur-sm'
        }`}
      >
        <div className="w-full">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link 
              to="/homepage" 
              className="flex items-center space-x-2 group transition-transform duration-200 hover:scale-105"
            >
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-brand-royal rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" size={20} color="white" strokeWidth={2.5} />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full opacity-80"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary tracking-tight">FXFORECAST</span>
                <span className="text-xs text-muted-foreground font-mono -mt-1">Systematic Trading</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={16} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              {/* More Menu */}
              <div className="relative group">
                <button className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200">
                  <Icon name="MoreHorizontal" size={16} />
                  <span>More</span>
                </button>
                
                {/* Dropdown */}
                <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {secondaryItems?.map((item) => (
                      <Link
                        key={item?.path}
                        to={item?.path}
                        className={`flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-150 ${
                          isActivePath(item?.path)
                            ? 'bg-accent/10 text-accent font-medium' :'text-popover-foreground hover:bg-muted'
                        }`}
                      >
                        <Icon name={item?.icon} size={16} />
                        <span>{item?.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open('https://ftmo.com', '_blank')}
                iconName="ExternalLink"
                iconPosition="right"
                iconSize={14}
              >
                Start Challenge
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100' :'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-4 py-4 bg-surface/95 backdrop-blur-md border-t border-border">
            <nav className="space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              {secondaryItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-accent/10 text-accent' :'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-border">
                <Button 
                  variant="outline" 
                  size="sm"
                  fullWidth
                  onClick={() => {
                    window.open('https://ftmo.com', '_blank');
                    setIsMobileMenuOpen(false);
                  }}
                  iconName="ExternalLink"
                  iconPosition="right"
                  iconSize={14}
                >
                  Start FTMO Challenge
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* Spacer to prevent content overlap */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;
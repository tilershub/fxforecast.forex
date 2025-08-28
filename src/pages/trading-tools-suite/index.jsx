import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ToolCard from './components/ToolCard';
import ToolCategory from './components/ToolCategory';
import QuickAccessToolbar from './components/QuickAccessToolbar';
import ToolStats from './components/ToolStats';
import NewsletterSignup from './components/NewsletterSignup';
import FeaturedTool from './components/FeaturedTool';

const TradingToolsSuite = () => {
  // Risk Management Tools
  const riskManagementTools = [
    {
      title: "Position Size Calculator",
      description: "Calculate precise position sizes based on account balance, risk percentage, and stop loss levels. The cornerstone of systematic trading.",
      icon: "Calculator",
      category: "Risk Management",
      difficulty: "Beginner",
      features: [
        "Multi-currency support",
        "Real-time pip value calculation",
        "Risk percentage validation",
        "FTMO challenge optimized"
      ],
      link: "/position-size-calculator"
    },
    {
      title: "Risk-Reward Calculator",
      description: "Analyze potential trades by calculating risk-reward ratios and probability of success based on historical data.",
      icon: "BarChart3",
      category: "Risk Management", 
      difficulty: "Intermediate",
      features: [
        "R:R ratio analysis",
        "Probability calculations",
        "Expected value computation",
        "Trade scoring system"
      ]
    },
    {
      title: "Drawdown Recovery Tool",
      description: "Calculate the percentage gain needed to recover from drawdowns and plan your comeback strategy systematically.",
      icon: "TrendingDown",
      category: "Risk Management",
      difficulty: "Advanced",
      features: [
        "Recovery percentage calculator",
        "Time-based projections",
        "Risk adjustment recommendations",
        "Psychological support metrics"
      ]
    }
  ];

  // Portfolio Management Tools
  const portfolioTools = [
    {
      title: "Portfolio Heat Analysis",
      description: "Monitor overall portfolio risk exposure across multiple positions and currency pairs to prevent overexposure.",
      icon: "PieChart",
      category: "Portfolio",
      difficulty: "Advanced",
      features: [
        "Multi-pair risk analysis",
        "Correlation calculations",
        "Heat map visualization",
        "Exposure warnings"
      ]
    },
    {
      title: "Compound Growth Calculator",
      description: "Visualize the power of consistent returns over time with our compound interest calculator designed for traders.",
      icon: "TrendingUp",
      category: "Portfolio",
      difficulty: "Beginner",
      features: [
        "Monthly/yearly projections",
        "Withdrawal scenarios",
        "Risk-adjusted returns",
        "Goal tracking"
      ]
    },
    {
      title: "Maximum Loss Calculator",
      description: "Determine maximum daily, weekly, and monthly loss limits to protect your trading capital and psychology.",
      icon: "Shield",
      category: "Portfolio",
      difficulty: "Intermediate",
      features: [
        "Daily loss limits",
        "Weekly/monthly caps",
        "Account protection rules",
        "Emergency stop protocols"
      ]
    }
  ];

  // Trading Journal Tools
  const journalTools = [
    {
      title: "Trade Journal Template",
      description: "Comprehensive trading journal template that captures all essential trade data for systematic improvement.",
      icon: "BookOpen",
      category: "Analysis",
      difficulty: "Beginner",
      features: [
        "Pre-trade analysis",
        "Post-trade review",
        "Emotional state tracking",
        "Performance metrics"
      ]
    },
    {
      title: "Performance Analytics",
      description: "Advanced analytics dashboard that reveals patterns in your trading performance and identifies improvement areas.",
      icon: "BarChart",
      category: "Analysis",
      difficulty: "Advanced",
      features: [
        "Win rate analysis",
        "Profit factor calculation",
        "Time-based performance",
        "Pair-specific metrics"
      ]
    },
    {
      title: "Trade Setup Checklist",
      description: "Interactive checklist based on the OUR Framework to ensure every trade meets your systematic criteria.",
      icon: "CheckSquare",
      category: "Analysis",
      difficulty: "Beginner",
      features: [
        "Framework validation",
        "Entry criteria check",
        "Risk assessment",
        "Confidence scoring"
      ]
    }
  ];

  // Coming Soon Tools
  const comingSoonTools = [
    {
      title: "Economic Calendar Integration",
      description: "Integrated economic calendar with risk assessment for news events and their potential impact on your trades.",
      icon: "Calendar",
      category: "Market Analysis",
      difficulty: "Intermediate",
      features: [
        "High-impact event alerts",
        "Currency-specific filtering",
        "Risk level indicators",
        "Trading session overlays"
      ],
      isComingSoon: true
    },
    {
      title: "Correlation Matrix",
      description: "Real-time currency pair correlation analysis to avoid overexposure and optimize portfolio diversification.",
      icon: "Network",
      category: "Market Analysis",
      difficulty: "Advanced",
      features: [
        "Real-time correlations",
        "Historical analysis",
        "Diversification scoring",
        "Risk clustering alerts"
      ],
      isComingSoon: true
    },
    {
      title: "FTMO Challenge Tracker",
      description: "Specialized tracker for FTMO challenge progress with built-in risk management and goal monitoring.",
      icon: "Target",
      category: "Challenge",
      difficulty: "Intermediate",
      features: [
        "Challenge progress tracking",
        "Daily target calculations",
        "Risk limit monitoring",
        "Success probability scoring"
      ],
      isComingSoon: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Trading Tools Suite - Professional Risk Management Tools | FXFORECAST</title>
        <meta name="description" content="Comprehensive collection of professional trading tools including position size calculator, risk management utilities, and portfolio analysis tools. Built for systematic traders and FTMO challenge success." />
        <meta name="keywords" content="trading tools, position size calculator, risk management, FTMO tools, forex calculator, trading utilities" />
        <meta property="og:title" content="Trading Tools Suite - Professional Risk Management Tools" />
        <meta property="og:description" content="Professional trading tools that demonstrate systematic risk management principles while providing immediate value to traders." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://fxforecast.com/trading-tools-suite" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-8">
          {/* Hero Section */}
          <section className="px-4 sm:px-6 lg:px-8 mb-12">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-brand-royal rounded-xl flex items-center justify-center">
                    <Icon name="Wrench" size={32} color="white" strokeWidth={2} />
                  </div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                  Trading Tools Suite
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Professional utilities that demonstrate risk management principles while providing immediate value. 
                  Each tool embodies the systematic approach that helps traders pass FTMO challenges and build consistent profitability.
                </p>
              </div>

              {/* Stats */}
              <ToolStats />

              {/* Quick Access */}
              <QuickAccessToolbar />

              {/* Featured Tool */}
              <FeaturedTool />
            </div>
          </section>

          {/* Tools Categories */}
          <section className="px-4 sm:px-6 lg:px-8 mb-12">
            <div className="max-w-7xl mx-auto">
              {/* Risk Management Tools */}
              <ToolCategory
                title="Risk Management"
                description="Essential tools for calculating position sizes, managing risk, and protecting your trading capital with systematic precision."
                icon="Shield"
                count={riskManagementTools?.length}
              >
                {riskManagementTools?.map((tool, index) => (
                  <ToolCard key={index} {...tool} />
                ))}
              </ToolCategory>

              {/* Portfolio Management */}
              <ToolCategory
                title="Portfolio Management"
                description="Advanced tools for analyzing portfolio performance, tracking growth, and optimizing capital allocation across multiple positions."
                icon="PieChart"
                count={portfolioTools?.length}
              >
                {portfolioTools?.map((tool, index) => (
                  <ToolCard key={index} {...tool} />
                ))}
              </ToolCategory>

              {/* Trading Analysis */}
              <ToolCategory
                title="Trading Analysis"
                description="Comprehensive analysis tools for tracking performance, maintaining trading journals, and identifying improvement opportunities."
                icon="BarChart"
                count={journalTools?.length}
              >
                {journalTools?.map((tool, index) => (
                  <ToolCard key={index} {...tool} />
                ))}
              </ToolCategory>

              {/* Coming Soon */}
              <ToolCategory
                title="Coming Soon"
                description="Advanced tools currently in development to further enhance your systematic trading approach and market analysis capabilities."
                icon="Clock"
                count={comingSoonTools?.length}
              >
                {comingSoonTools?.map((tool, index) => (
                  <ToolCard key={index} {...tool} />
                ))}
              </ToolCategory>
            </div>
          </section>

          {/* Framework Integration */}
          <section className="px-4 sm:px-6 lg:px-8 mb-12">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-muted to-surface rounded-2xl p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      Built on the OUR Framework
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Every tool in our suite is designed around the OUR Framework principles: 
                      <strong className="text-foreground"> Objective analysis, Unified risk management, and Repeatable processes</strong>. 
                      These aren't just calculators—they're educational experiences that reinforce systematic trading habits.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {[
                        "Educational tooltips explain the theory behind each calculation",
                        "Framework principles integrated into every tool interface", 
                        "Consistent methodology across all utilities",
                        "Progressive learning from basic to advanced concepts"
                      ]?.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Icon name="Check" size={16} color="var(--color-success)" strokeWidth={2.5} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="default" asChild>
                        <Link to="/framework-deep-dive">
                          Learn the Framework
                          <Icon name="BookOpen" size={16} className="ml-2" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/blog-hub">
                          Read Success Stories
                          <Icon name="Users" size={16} className="ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="bg-card border border-border rounded-xl p-6 shadow-lg">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                          <Icon name="Calculator" size={20} color="white" strokeWidth={2} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">Position Size Calculator</h4>
                          <p className="text-sm text-muted-foreground">Live Example</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-border">
                          <span className="text-sm text-muted-foreground">Account Balance</span>
                          <span className="font-mono text-foreground">$10,000</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-border">
                          <span className="text-sm text-muted-foreground">Risk Percentage</span>
                          <span className="font-mono text-foreground">2.0%</span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-border">
                          <span className="text-sm text-muted-foreground">Stop Loss (pips)</span>
                          <span className="font-mono text-foreground">50</span>
                        </div>
                        <div className="flex justify-between items-center py-3 bg-success/10 rounded-lg px-3">
                          <span className="text-sm font-medium text-success">Position Size</span>
                          <span className="font-mono font-bold text-success">0.40 lots</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="px-4 sm:px-6 lg:px-8 mb-12">
            <div className="max-w-4xl mx-auto">
              <NewsletterSignup />
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-4 sm:px-6 lg:px-8 mb-12">
            <div className="max-w-7xl mx-auto">
              <div className="bg-gradient-to-r from-primary to-brand-royal rounded-2xl p-8 lg:p-12 text-center">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Ready to Pass Your FTMO Challenge?
                  </h2>
                  <p className="text-blue-100 text-lg leading-relaxed mb-8">
                    These tools demonstrate the systematic approach that helps traders consistently pass funded account challenges. 
                    Start with our position size calculator, then explore the complete framework methodology.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                      asChild
                    >
                      <Link to="/position-size-calculator">
                        Start with Calculator
                        <Icon name="Calculator" size={18} className="ml-2" />
                      </Link>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                      asChild
                    >
                      <Link to="/ftmo-affiliate-gateway">
                        Start FTMO Challenge
                        <Icon name="ExternalLink" size={18} className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-surface border-t border-border px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <Link to="/homepage" className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary to-brand-royal rounded-lg flex items-center justify-center">
                    <Icon name="TrendingUp" size={20} color="white" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg font-bold text-primary">FXFORECAST</span>
                    <span className="text-xs text-muted-foreground font-mono -mt-1">Systematic Trading</span>
                  </div>
                </Link>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Professional trading tools and education that transform forex trading from gambling into systematic business practice.
                </p>
                <p className="text-xs text-muted-foreground">
                  © {new Date()?.getFullYear()} FXFORECAST. All rights reserved.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                <div className="space-y-2">
                  {[
                    { name: 'Framework', path: '/framework-deep-dive' },
                    { name: 'Calculator', path: '/position-size-calculator' },
                    { name: 'Blog', path: '/blog-hub' },
                    { name: 'FTMO Challenge', path: '/ftmo-affiliate-gateway' }
                  ]?.map((link, index) => (
                    <Link 
                      key={index}
                      to={link?.path} 
                      className="block text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link?.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Popular Tools</h4>
                <div className="space-y-2">
                  {[
                    'Position Size Calculator',
                    'Risk-Reward Calculator', 
                    'Drawdown Recovery Tool',
                    'Portfolio Heat Analysis'
                  ]?.map((tool, index) => (
                    <div key={index} className="text-sm text-muted-foreground">
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Risk Disclaimer */}
            <div className="border-t border-border pt-8 mt-8">
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Icon name="AlertTriangle" size={20} color="var(--color-warning)" strokeWidth={2} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-warning mb-1">Risk Disclaimer</h5>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Trading foreign exchange carries a high level of risk and may not be suitable for all investors. 
                      Past performance is not indicative of future results. These tools are for educational purposes and do not constitute financial advice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TradingToolsSuite;
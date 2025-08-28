import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import CalculatorForm from './components/CalculatorForm';
import CalculationResults from './components/CalculationResults';
import EducationalTooltips from './components/EducationalTooltips';
import SavedCalculations from './components/SavedCalculations';
import FTMOCallToAction from './components/FTMOCallToAction';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const PositionSizeCalculator = () => {
  const [calculationResults, setCalculationResults] = useState(null);
  const [savedCalculations, setSavedCalculations] = useState([]);
  const [savedPreferences, setSavedPreferences] = useState(null);
  const [activeTab, setActiveTab] = useState('calculator');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Load saved data on component mount
  useEffect(() => {
    const saved = localStorage.getItem('fxforecast_saved_calculations');
    const preferences = localStorage.getItem('fxforecast_calculator_preferences');
    
    if (saved) {
      try {
        setSavedCalculations(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading saved calculations:', error);
      }
    }
    
    if (preferences) {
      try {
        setSavedPreferences(JSON.parse(preferences));
      } catch (error) {
        console.error('Error loading preferences:', error);
      }
    }
  }, []);

  const calculatePositionSize = (formData) => {
    const accountBalance = parseFloat(formData?.accountBalance);
    const riskPercentage = parseFloat(formData?.riskPercentage);
    const stopLossDistance = parseFloat(formData?.stopLossDistance);
    const leverage = parseFloat(formData?.leverage);

    // Calculate risk amount
    const riskAmount = (accountBalance * riskPercentage) / 100;

    // Get lot size multiplier based on account type
    const getLotMultiplier = (accountType) => {
      switch (accountType) {
        case 'micro': return 1000;
        case 'mini': return 10000;
        case 'standard': return 100000;
        default: return 100000;
      }
    };

    const lotMultiplier = getLotMultiplier(formData?.accountType);

    // Calculate pip value (simplified for major pairs)
    const getPipValue = (currencyPair, lotSize) => {
      // Simplified pip value calculation for major pairs
      const basePipValue = 10; // USD per pip for standard lot on major pairs
      return (basePipValue * lotSize) / 100000;
    };

    // Calculate position size
    const pipValue = getPipValue(formData?.currencyPair, lotMultiplier);
    const positionSizeInUnits = riskAmount / (stopLossDistance * (pipValue / lotMultiplier));
    const positionSizeInLots = positionSizeInUnits / lotMultiplier;

    // Calculate margin required
    const marginRequired = (positionSizeInUnits * 1.1) / leverage; // Assuming EUR/USD rate ~1.1

    const results = {
      ...formData,
      accountBalance,
      riskAmount,
      positionSize: positionSizeInLots,
      units: positionSizeInUnits,
      pipValue: pipValue,
      marginRequired,
      calculatedAt: new Date()?.toISOString()
    };

    setCalculationResults(results);
    setActiveTab('results');
  };

  const saveCalculation = (calculation) => {
    const newCalculation = {
      ...calculation,
      savedAt: new Date()?.toISOString(),
      id: Date.now()
    };

    const updatedCalculations = [newCalculation, ...savedCalculations?.slice(0, 9)]; // Keep only 10 most recent
    setSavedCalculations(updatedCalculations);
    localStorage.setItem('fxforecast_saved_calculations', JSON.stringify(updatedCalculations));
    
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const savePreferences = (preferences) => {
    setSavedPreferences(preferences);
    localStorage.setItem('fxforecast_calculator_preferences', JSON.stringify(preferences));
  };

  const loadCalculation = (calculation) => {
    setSavedPreferences(calculation);
    setCalculationResults(calculation);
    setActiveTab('calculator');
  };

  const deleteCalculation = (index) => {
    const updatedCalculations = savedCalculations?.filter((_, i) => i !== index);
    setSavedCalculations(updatedCalculations);
    localStorage.setItem('fxforecast_saved_calculations', JSON.stringify(updatedCalculations));
  };

  const shareResults = (results) => {
    const shareText = `FXFORECAST Position Size Calculator Results:\n\n` +
      `Currency Pair: ${results?.currencyPair}\n` +
      `Position Size: ${results?.positionSize?.toFixed(2)} lots\n` +
      `Risk Amount: $${results?.riskAmount?.toFixed(2)}\n` +
      `Risk Percentage: ${results?.riskPercentage}%\n\n` +
      `Calculate your position size: ${window.location?.href}`;

    if (navigator.share) {
      navigator.share({
        title: 'FXFORECAST Position Size Calculator',
        text: shareText,
        url: window.location?.href
      });
    } else {
      navigator.clipboard?.writeText(shareText);
      alert('Results copied to clipboard!');
    }
  };

  const tabs = [
    { id: 'calculator', label: 'Calculator', icon: 'Calculator' },
    { id: 'results', label: 'Results', icon: 'BarChart3' },
    { id: 'education', label: 'Learn', icon: 'BookOpen' },
    { id: 'saved', label: 'Saved', icon: 'History' }
  ];

  return (
    <>
      <Helmet>
        <title>Position Size Calculator | FXFORECAST - Systematic Trading Tools</title>
        <meta name="description" content="Professional position size calculator for forex traders. Calculate optimal position sizes, manage risk, and apply systematic trading principles. Perfect for FTMO challenge preparation." />
        <meta name="keywords" content="position size calculator, forex calculator, risk management, FTMO challenge, trading tools, systematic trading" />
        <meta property="og:title" content="Position Size Calculator | FXFORECAST" />
        <meta property="og:description" content="Calculate optimal position sizes with our professional trading calculator. Master risk management for FTMO challenges." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`${window.location?.origin}/position-size-calculator`} />
      </Helmet>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-brand-royal to-primary py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Icon name="Calculator" size={32} className="text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Position Size Calculator
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                Master risk management with our professional-grade position sizing tool. 
                Calculate optimal lot sizes, manage risk systematically, and prepare for FTMO challenges 
                with the same discipline used by funded traders.
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-white/80">
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} />
                  <span>Risk Management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Target" size={16} />
                  <span>Precise Calculations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={16} />
                  <span>FTMO Ready</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-20 w-32 h-32 border border-white/30 rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/30 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/30 rounded-full"></div>
          </div>
        </section>

        {/* Success Message */}
        {showSuccessMessage && (
          <div className="fixed top-20 right-4 z-50 bg-success text-success-foreground px-4 py-3 rounded-lg shadow-lg flex items-center space-x-2 animate-in slide-in-from-right">
            <Icon name="CheckCircle" size={16} />
            <span className="text-sm font-medium">Calculation saved successfully!</span>
          </div>
        )}

        {/* Main Content */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tab Navigation */}
            <div className="mb-8">
              <div className="border-b border-border">
                <nav className="flex space-x-8 overflow-x-auto">
                  {tabs?.map((tab) => (
                    <button
                      key={tab?.id}
                      onClick={() => setActiveTab(tab?.id)}
                      className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                        activeTab === tab?.id
                          ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                      }`}
                    >
                      <Icon name={tab?.icon} size={16} />
                      <span>{tab?.label}</span>
                      {tab?.id === 'saved' && savedCalculations?.length > 0 && (
                        <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                          {savedCalculations?.length}
                        </span>
                      )}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Tab Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content Area */}
              <div className="lg:col-span-2">
                {activeTab === 'calculator' && (
                  <CalculatorForm
                    onCalculate={calculatePositionSize}
                    savedPreferences={savedPreferences}
                    onSavePreferences={savePreferences}
                  />
                )}

                {activeTab === 'results' && (
                  <CalculationResults
                    results={calculationResults}
                    onSaveCalculation={saveCalculation}
                    onShare={shareResults}
                  />
                )}

                {activeTab === 'education' && (
                  <EducationalTooltips />
                )}

                {activeTab === 'saved' && (
                  <SavedCalculations
                    savedCalculations={savedCalculations}
                    onLoadCalculation={loadCalculation}
                    onDeleteCalculation={deleteCalculation}
                  />
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Quick Stats */}
                <div className="bg-card rounded-xl border border-border p-6 shadow-brand">
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="BarChart3" size={20} className="mr-2 text-primary" />
                    Risk Management Stats
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Recommended Risk</span>
                      <span className="font-mono font-semibold text-success">1-3%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Max Daily Risk</span>
                      <span className="font-mono font-semibold text-warning">5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">FTMO Max Risk</span>
                      <span className="font-mono font-semibold text-error">10%</span>
                    </div>
                    <div className="pt-3 border-t border-border">
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <Icon name="Info" size={14} />
                        <span>Professional traders rarely risk more than 2% per trade</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Framework Integration */}
                <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl border border-accent/20 p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Icon name="BookOpen" size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">FXFORECAST Framework</h3>
                      <p className="text-sm text-muted-foreground">Systematic Trading Approach</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    This calculator implements the position sizing principles from our comprehensive 
                    trading framework. Learn the complete methodology for consistent profitability.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={() => window.open('/framework-deep-dive', '_blank')}
                    className="border-accent/30 text-accent hover:bg-accent/10"
                  >
                    Explore Framework
                  </Button>
                </div>

                {/* Mobile CTA */}
                <div className="lg:hidden">
                  <FTMOCallToAction />
                </div>
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block mt-12">
              <FTMOCallToAction />
            </div>
          </div>
        </section>

        {/* Risk Disclaimer */}
        <section className="bg-surface border-t border-border py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Icon name="AlertTriangle" size={20} className="text-warning mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-warning mb-2">Risk Disclaimer</p>
                  <p className="text-muted-foreground leading-relaxed">
                    This calculator is for educational purposes only. Trading forex involves substantial risk 
                    and may not be suitable for all investors. Past performance does not guarantee future results. 
                    Always conduct your own research and consider seeking advice from a licensed financial advisor 
                    before making trading decisions. FXFORECAST is not responsible for any trading losses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PositionSizeCalculator;
import React, { useState, useEffect } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CalculatorForm = ({ onCalculate, savedPreferences, onSavePreferences }) => {
  const [formData, setFormData] = useState({
    accountBalance: savedPreferences?.accountBalance || '',
    riskPercentage: savedPreferences?.riskPercentage || '2',
    stopLossDistance: savedPreferences?.stopLossDistance || '',
    currencyPair: savedPreferences?.currencyPair || 'EURUSD',
    accountType: savedPreferences?.accountType || 'standard',
    leverage: savedPreferences?.leverage || '100'
  });

  const [errors, setErrors] = useState({});
  const [isCalculating, setIsCalculating] = useState(false);

  const currencyPairs = [
    { value: 'EURUSD', label: 'EUR/USD', description: 'Euro vs US Dollar' },
    { value: 'GBPUSD', label: 'GBP/USD', description: 'British Pound vs US Dollar' },
    { value: 'USDJPY', label: 'USD/JPY', description: 'US Dollar vs Japanese Yen' },
    { value: 'USDCHF', label: 'USD/CHF', description: 'US Dollar vs Swiss Franc' },
    { value: 'AUDUSD', label: 'AUD/USD', description: 'Australian Dollar vs US Dollar' },
    { value: 'USDCAD', label: 'USD/CAD', description: 'US Dollar vs Canadian Dollar' },
    { value: 'NZDUSD', label: 'NZD/USD', description: 'New Zealand Dollar vs US Dollar' },
    { value: 'EURGBP', label: 'EUR/GBP', description: 'Euro vs British Pound' },
    { value: 'EURJPY', label: 'EUR/JPY', description: 'Euro vs Japanese Yen' },
    { value: 'GBPJPY', label: 'GBP/JPY', description: 'British Pound vs Japanese Yen' }
  ];

  const accountTypes = [
    { value: 'standard', label: 'Standard Account', description: '1 lot = 100,000 units' },
    { value: 'mini', label: 'Mini Account', description: '1 lot = 10,000 units' },
    { value: 'micro', label: 'Micro Account', description: '1 lot = 1,000 units' }
  ];

  const leverageOptions = [
    { value: '50', label: '1:50' },
    { value: '100', label: '1:100' },
    { value: '200', label: '1:200' },
    { value: '400', label: '1:400' },
    { value: '500', label: '1:500' }
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.accountBalance || parseFloat(formData?.accountBalance) <= 0) {
      newErrors.accountBalance = 'Account balance must be greater than 0';
    }

    if (!formData?.riskPercentage || parseFloat(formData?.riskPercentage) <= 0 || parseFloat(formData?.riskPercentage) > 10) {
      newErrors.riskPercentage = 'Risk percentage must be between 0.1% and 10%';
    }

    if (!formData?.stopLossDistance || parseFloat(formData?.stopLossDistance) <= 0) {
      newErrors.stopLossDistance = 'Stop loss distance must be greater than 0';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors?.[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleCalculate = async () => {
    if (!validateForm()) return;

    setIsCalculating(true);
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      onCalculate(formData);
      onSavePreferences(formData);
      setIsCalculating(false);
    }, 500);
  };

  const handleReset = () => {
    setFormData({
      accountBalance: '',
      riskPercentage: '2',
      stopLossDistance: '',
      currencyPair: 'EURUSD',
      accountType: 'standard',
      leverage: '100'
    });
    setErrors({});
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6 shadow-brand">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Calculator" size={20} className="text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-foreground">Position Size Calculator</h2>
            <p className="text-sm text-muted-foreground">Calculate your optimal position size</p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleReset}
          iconName="RotateCcw"
          iconSize={16}
          className="text-muted-foreground hover:text-foreground"
        >
          Reset
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Account Balance */}
        <div className="space-y-2">
          <Input
            label="Account Balance"
            type="number"
            placeholder="10000"
            value={formData?.accountBalance}
            onChange={(e) => handleInputChange('accountBalance', e?.target?.value)}
            error={errors?.accountBalance}
            required
            description="Your total trading account balance in USD"
            className="font-mono"
          />
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Icon name="Info" size={14} />
            <span>Enter your account balance in USD</span>
          </div>
        </div>

        {/* Risk Percentage */}
        <div className="space-y-2">
          <Input
            label="Risk Percentage"
            type="number"
            placeholder="2"
            value={formData?.riskPercentage}
            onChange={(e) => handleInputChange('riskPercentage', e?.target?.value)}
            error={errors?.riskPercentage}
            required
            description="Percentage of account to risk per trade"
            className="font-mono"
            min="0.1"
            max="10"
            step="0.1"
          />
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Icon name="Shield" size={14} />
            <span>Recommended: 1-3% per trade</span>
          </div>
        </div>

        {/* Stop Loss Distance */}
        <div className="space-y-2">
          <Input
            label="Stop Loss Distance (Pips)"
            type="number"
            placeholder="50"
            value={formData?.stopLossDistance}
            onChange={(e) => handleInputChange('stopLossDistance', e?.target?.value)}
            error={errors?.stopLossDistance}
            required
            description="Distance to stop loss in pips"
            className="font-mono"
            min="1"
            step="0.1"
          />
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Icon name="TrendingDown" size={14} />
            <span>Distance from entry to stop loss</span>
          </div>
        </div>

        {/* Currency Pair */}
        <div className="space-y-2">
          <Select
            label="Currency Pair"
            options={currencyPairs}
            value={formData?.currencyPair}
            onChange={(value) => handleInputChange('currencyPair', value)}
            searchable
            description="Select the currency pair to trade"
          />
          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
            <Icon name="Globe" size={14} />
            <span>Major pairs have tighter spreads</span>
          </div>
        </div>

        {/* Account Type */}
        <div className="space-y-2">
          <Select
            label="Account Type"
            options={accountTypes}
            value={formData?.accountType}
            onChange={(value) => handleInputChange('accountType', value)}
            description="Your broker's account type"
          />
        </div>

        {/* Leverage */}
        <div className="space-y-2">
          <Select
            label="Leverage"
            options={leverageOptions}
            value={formData?.leverage}
            onChange={(value) => handleInputChange('leverage', value)}
            description="Your account's leverage ratio"
          />
          <div className="flex items-center space-x-2 text-xs text-warning">
            <Icon name="AlertTriangle" size={14} />
            <span>Higher leverage increases risk</span>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border">
        <Button
          onClick={handleCalculate}
          loading={isCalculating}
          iconName="Calculator"
          iconPosition="left"
          size="lg"
          fullWidth
          className="bg-gradient-to-r from-primary to-brand-royal hover:from-primary/90 hover:to-brand-royal/90"
        >
          {isCalculating ? 'Calculating...' : 'Calculate Position Size'}
        </Button>
      </div>
    </div>
  );
};

export default CalculatorForm;
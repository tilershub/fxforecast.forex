import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const CalculationResults = ({ results, onSaveCalculation, onShare }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [isSharing, setIsSharing] = useState(false);

  if (!results) {
    return (
      <div className="bg-card rounded-xl border border-border p-8 shadow-brand">
        <div className="text-center">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Calculator" size={24} className="text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium text-muted-foreground mb-2">Ready to Calculate</h3>
          <p className="text-sm text-muted-foreground">
            Fill in the form and click calculate to see your position size results
          </p>
        </div>
      </div>
    );
  }

  const handleSave = async () => {
    setIsSaving(true);
    setTimeout(() => {
      onSaveCalculation(results);
      setIsSaving(false);
    }, 1000);
  };

  const handleShare = async () => {
    setIsSharing(true);
    setTimeout(() => {
      onShare(results);
      setIsSharing(false);
    }, 500);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })?.format(amount);
  };

  const formatNumber = (number, decimals = 2) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    })?.format(number);
  };

  const getRiskLevel = (riskPercentage) => {
    if (riskPercentage <= 1) return { level: 'Conservative', color: 'text-success', bg: 'bg-success/10' };
    if (riskPercentage <= 2) return { level: 'Moderate', color: 'text-accent', bg: 'bg-accent/10' };
    if (riskPercentage <= 3) return { level: 'Aggressive', color: 'text-warning', bg: 'bg-warning/10' };
    return { level: 'High Risk', color: 'text-error', bg: 'bg-error/10' };
  };

  const riskLevel = getRiskLevel(parseFloat(results?.riskPercentage));

  return (
    <div className="bg-card rounded-xl border border-border shadow-brand overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-brand-royal p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Icon name="TrendingUp" size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Calculation Results</h3>
              <p className="text-white/80 text-sm">
                {results?.currencyPair} • {results?.accountType?.charAt(0)?.toUpperCase() + results?.accountType?.slice(1)} Account
              </p>
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full ${riskLevel?.bg}`}>
            <span className={`text-xs font-medium ${riskLevel?.color}`}>
              {riskLevel?.level}
            </span>
          </div>
        </div>
      </div>
      {/* Main Results */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Position Size */}
          <div className="text-center p-4 bg-success/5 rounded-lg border border-success/20">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Target" size={20} className="text-success" />
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Position Size</p>
              <p className="text-2xl font-bold font-mono text-success">
                {formatNumber(results?.positionSize, 2)} lots
              </p>
              <p className="text-xs text-muted-foreground">
                {formatNumber(results?.units, 0)} units
              </p>
            </div>
          </div>

          {/* Risk Amount */}
          <div className="text-center p-4 bg-warning/5 rounded-lg border border-warning/20">
            <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Shield" size={20} className="text-warning" />
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Risk Amount</p>
              <p className="text-2xl font-bold font-mono text-warning">
                {formatCurrency(results?.riskAmount)}
              </p>
              <p className="text-xs text-muted-foreground">
                {results?.riskPercentage}% of account
              </p>
            </div>
          </div>

          {/* Pip Value */}
          <div className="text-center p-4 bg-primary/5 rounded-lg border border-primary/20">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="DollarSign" size={20} className="text-primary" />
            </div>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Pip Value</p>
              <p className="text-2xl font-bold font-mono text-primary">
                {formatCurrency(results?.pipValue)}
              </p>
              <p className="text-xs text-muted-foreground">
                Per pip movement
              </p>
            </div>
          </div>
        </div>

        {/* Risk-Reward Scenarios */}
        <div className="bg-surface rounded-lg p-4 mb-6">
          <h4 className="text-sm font-medium text-foreground mb-4 flex items-center">
            <Icon name="BarChart3" size={16} className="mr-2" />
            Risk-Reward Scenarios
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { ratio: '1:1', multiplier: 1, label: 'Conservative' },
              { ratio: '1:2', multiplier: 2, label: 'Balanced' },
              { ratio: '1:3', multiplier: 3, label: 'Aggressive' }
            ]?.map((scenario) => (
              <div key={scenario?.ratio} className="text-center p-3 bg-card rounded-lg border border-border">
                <p className="text-xs text-muted-foreground mb-1">{scenario?.label}</p>
                <p className="font-semibold text-foreground">{scenario?.ratio}</p>
                <p className="text-sm font-mono text-success">
                  +{formatCurrency(results?.riskAmount * scenario?.multiplier)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {formatNumber(results?.stopLossDistance * scenario?.multiplier, 1)} pips TP
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Account Impact */}
        <div className="bg-surface rounded-lg p-4 mb-6">
          <h4 className="text-sm font-medium text-foreground mb-4 flex items-center">
            <Icon name="PieChart" size={16} className="mr-2" />
            Account Impact Analysis
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Account Balance:</span>
                <span className="font-mono text-foreground">{formatCurrency(results?.accountBalance)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Risk Amount:</span>
                <span className="font-mono text-warning">{formatCurrency(results?.riskAmount)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Remaining Balance:</span>
                <span className="font-mono text-foreground">
                  {formatCurrency(results?.accountBalance - results?.riskAmount)}
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Leverage Used:</span>
                <span className="font-mono text-foreground">1:{results?.leverage}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Margin Required:</span>
                <span className="font-mono text-foreground">
                  {formatCurrency(results?.marginRequired)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Free Margin:</span>
                <span className="font-mono text-success">
                  {formatCurrency(results?.accountBalance - results?.marginRequired)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={handleSave}
            loading={isSaving}
            iconName="Save"
            iconPosition="left"
            className="flex-1"
          >
            {isSaving ? 'Saving...' : 'Save Calculation'}
          </Button>
          <Button
            variant="outline"
            onClick={handleShare}
            loading={isSharing}
            iconName="Share2"
            iconPosition="left"
            className="flex-1"
          >
            {isSharing ? 'Sharing...' : 'Share Results'}
          </Button>
        </div>
      </div>
      {/* Educational Note */}
      <div className="bg-accent/5 border-t border-accent/20 p-4">
        <div className="flex items-start space-x-3">
          <Icon name="Lightbulb" size={16} className="text-accent mt-0.5" />
          <div className="text-sm">
            <p className="text-accent font-medium mb-1">Pro Tip</p>
            <p className="text-muted-foreground">
              This systematic approach to position sizing is fundamental to the FXFORECAST methodology. 
              Consistent risk management like this is what separates successful traders from gamblers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculationResults;
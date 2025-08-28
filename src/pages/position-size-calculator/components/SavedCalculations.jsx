import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SavedCalculations = ({ savedCalculations, onLoadCalculation, onDeleteCalculation }) => {
  const [expandedCard, setExpandedCard] = useState(null);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })?.format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString)?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getRiskLevel = (riskPercentage) => {
    if (riskPercentage <= 1) return { level: 'Conservative', color: 'text-success', bg: 'bg-success/10' };
    if (riskPercentage <= 2) return { level: 'Moderate', color: 'text-accent', bg: 'bg-accent/10' };
    if (riskPercentage <= 3) return { level: 'Aggressive', color: 'text-warning', bg: 'bg-warning/10' };
    return { level: 'High Risk', color: 'text-error', bg: 'bg-error/10' };
  };

  if (!savedCalculations || savedCalculations?.length === 0) {
    return (
      <div className="bg-card rounded-xl border border-border p-8 shadow-brand">
        <div className="text-center">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Save" size={24} className="text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium text-muted-foreground mb-2">No Saved Calculations</h3>
          <p className="text-sm text-muted-foreground">
            Your saved calculations will appear here. Calculate and save your first position size to get started.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl border border-border shadow-brand overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="History" size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">Saved Calculations</h3>
              <p className="text-sm text-muted-foreground">
                {savedCalculations?.length} calculation{savedCalculations?.length !== 1 ? 's' : ''} saved
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-h-96 overflow-y-auto">
        <div className="divide-y divide-border">
          {savedCalculations?.map((calculation, index) => {
            const riskLevel = getRiskLevel(parseFloat(calculation?.riskPercentage));
            const isExpanded = expandedCard === index;

            return (
              <div key={index} className="p-4 hover:bg-surface/50 transition-colors duration-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name="Calculator" size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-foreground">{calculation?.currencyPair}</span>
                        <div className={`px-2 py-1 rounded-full ${riskLevel?.bg}`}>
                          <span className={`text-xs font-medium ${riskLevel?.color}`}>
                            {riskLevel?.level}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {formatDate(calculation?.savedAt)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedCard(isExpanded ? null : index)}
                      iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
                      iconSize={16}
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onLoadCalculation(calculation)}
                      iconName="Upload"
                      iconSize={16}
                      className="text-primary hover:text-primary/80"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onDeleteCalculation(index)}
                      iconName="Trash2"
                      iconSize={16}
                      className="text-error hover:text-error/80"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-3">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Position Size</p>
                    <p className="font-mono font-semibold text-success">
                      {calculation?.positionSize?.toFixed(2) || '0.00'} lots
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Risk Amount</p>
                    <p className="font-mono font-semibold text-warning">
                      {formatCurrency(calculation?.riskAmount || 0)}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">Risk %</p>
                    <p className="font-mono font-semibold text-foreground">
                      {calculation?.riskPercentage}%
                    </p>
                  </div>
                </div>
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Account Balance:</span>
                          <span className="font-mono">{formatCurrency(calculation?.accountBalance)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Stop Loss:</span>
                          <span className="font-mono">{calculation?.stopLossDistance} pips</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Account Type:</span>
                          <span className="capitalize">{calculation?.accountType}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Leverage:</span>
                          <span className="font-mono">1:{calculation?.leverage}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Pip Value:</span>
                          <span className="font-mono">{formatCurrency(calculation?.pipValue || 0)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Units:</span>
                          <span className="font-mono">{(calculation?.units || 0)?.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-4 border-t border-border bg-surface/30">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Icon name="Info" size={14} />
            <span>Click the upload icon to load a calculation</span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              if (window.confirm('Are you sure you want to clear all saved calculations?')) {
                savedCalculations?.forEach((_, index) => onDeleteCalculation(index));
              }
            }}
            iconName="Trash2"
            iconSize={14}
            className="text-error hover:text-error/80"
          >
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SavedCalculations;
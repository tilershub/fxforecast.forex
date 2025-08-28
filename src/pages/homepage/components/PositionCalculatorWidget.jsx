import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const PositionCalculatorWidget = () => {
  const [accountSize, setAccountSize] = useState('100000');
  const [riskPercentage, setRiskPercentage] = useState('1');
  const [entryPrice, setEntryPrice] = useState('1.0850');
  const [stopLoss, setStopLoss] = useState('1.0800');
  const [results, setResults] = useState({
    riskAmount: 0,
    pipValue: 0,
    positionSize: 0,
    lotSize: 0
  });

  useEffect(() => {
    calculatePosition();
  }, [accountSize, riskPercentage, entryPrice, stopLoss]);

  const calculatePosition = () => {
    const account = parseFloat(accountSize) || 0;
    const risk = parseFloat(riskPercentage) || 0;
    const entry = parseFloat(entryPrice) || 0;
    const stop = parseFloat(stopLoss) || 0;

    if (account > 0 && risk > 0 && entry > 0 && stop > 0 && entry !== stop) {
      const riskAmount = (account * risk) / 100;
      const pipDifference = Math.abs(entry - stop) * 10000; // Convert to pips
      const pipValue = riskAmount / pipDifference;
      const positionSize = riskAmount / Math.abs(entry - stop);
      const lotSize = positionSize / 100000; // Standard lot size

      setResults({
        riskAmount: riskAmount?.toFixed(2),
        pipValue: pipValue?.toFixed(2),
        positionSize: positionSize?.toFixed(0),
        lotSize: lotSize?.toFixed(2)
      });
    } else {
      setResults({
        riskAmount: 0,
        pipValue: 0,
        positionSize: 0,
        lotSize: 0
      });
    }
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Live Position Size Calculator
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience our risk management tools firsthand. This calculator demonstrates the precision and discipline that separates professional traders from gamblers.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator Form */}
          <div className="bg-card rounded-xl p-8 border border-border">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                <Icon name="Calculator" size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Position Calculator</h3>
                <p className="text-sm text-muted-foreground">Professional risk management tool</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <Input
                label="Account Size ($)"
                type="number"
                value={accountSize}
                onChange={(e) => setAccountSize(e?.target?.value)}
                placeholder="100000"
                description="Your total trading account balance"
              />
              
              <Input
                label="Risk Percentage (%)"
                type="number"
                value={riskPercentage}
                onChange={(e) => setRiskPercentage(e?.target?.value)}
                placeholder="1"
                description="Percentage of account to risk per trade"
                min="0.1"
                max="5"
                step="0.1"
              />
              
              <Input
                label="Entry Price"
                type="number"
                value={entryPrice}
                onChange={(e) => setEntryPrice(e?.target?.value)}
                placeholder="1.0850"
                description="Your planned entry price"
                step="0.0001"
              />
              
              <Input
                label="Stop Loss Price"
                type="number"
                value={stopLoss}
                onChange={(e) => setStopLoss(e?.target?.value)}
                placeholder="1.0800"
                description="Your stop loss level"
                step="0.0001"
              />
            </div>
          </div>
          
          {/* Results Display */}
          <div className="bg-card rounded-xl p-8 border border-border">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mr-4">
                <Icon name="Target" size={24} className="text-success" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Calculated Results</h3>
                <p className="text-sm text-muted-foreground">Your optimized position parameters</p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-surface rounded-lg p-4">
                <div className="text-2xl font-bold text-error mb-1">${results?.riskAmount}</div>
                <div className="text-sm text-muted-foreground">Risk Amount</div>
              </div>
              
              <div className="bg-surface rounded-lg p-4">
                <div className="text-2xl font-bold text-primary mb-1">${results?.pipValue}</div>
                <div className="text-sm text-muted-foreground">Per Pip Value</div>
              </div>
              
              <div className="bg-surface rounded-lg p-4">
                <div className="text-2xl font-bold text-accent mb-1">{results?.positionSize}</div>
                <div className="text-sm text-muted-foreground">Position Size</div>
              </div>
              
              <div className="bg-surface rounded-lg p-4">
                <div className="text-2xl font-bold text-success mb-1">{results?.lotSize}</div>
                <div className="text-sm text-muted-foreground">Lot Size</div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <div className="flex items-start space-x-3">
                <Icon name="Lightbulb" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-accent mb-1">Pro Tip</h4>
                  <p className="text-sm text-foreground">
                    This calculation follows our OUR framework's Unified component - consistent 1-2% risk per trade regardless of market conditions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Link to="/position-size-calculator">
                <Button 
                  fullWidth
                  iconName="ExternalLink"
                  iconPosition="right"
                >
                  Access Full Calculator Suite
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-card rounded-xl p-6 border border-border inline-block">
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-lg font-bold text-primary mb-1">1-2%</div>
                <div className="text-xs text-muted-foreground">Max Risk Per Trade</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-lg font-bold text-success mb-1">1:3</div>
                <div className="text-xs text-muted-foreground">Min Risk:Reward</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <div className="text-lg font-bold text-accent mb-1">5%</div>
                <div className="text-xs text-muted-foreground">Max Daily Risk</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositionCalculatorWidget;
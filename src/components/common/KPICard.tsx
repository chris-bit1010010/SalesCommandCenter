import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { KPI } from '../../types';

interface KPICardProps {
  kpi: KPI;
  className?: string;
}

export function KPICard({ kpi, className = '' }: KPICardProps) {
  const getTrendIcon = () => {
    if (kpi.trend === 'up') return <TrendingUp className="w-4 h-4" />;
    if (kpi.trend === 'down') return <TrendingDown className="w-4 h-4" />;
    return <Minus className="w-4 h-4" />;
  };

  const getTrendColor = () => {
    if (kpi.trend === 'up') return 'text-green-600 dark:text-green-400';
    if (kpi.trend === 'down') return 'text-red-600 dark:text-red-400';
    return 'text-gray-600 dark:text-gray-400';
  };

  const formatValue = (value: number | string) => {
    if (typeof value === 'number') {
      return value.toLocaleString();
    }
    return value;
  };

  const getProgress = () => {
    if (!kpi.target || typeof kpi.value !== 'number') return null;
    return Math.min((kpi.value / kpi.target) * 100, 100);
  };

  const progress = getProgress();

  return (
    <div className={`bg-white dark:bg-deep-dark-200 rounded-lg shadow-md p-6 transition-colors border border-transparent dark:border-deep-dark-50 ${className}`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-300">{kpi.title}</h3>
        {kpi.change !== undefined && (
          <div className={`flex items-center gap-1 ${getTrendColor()}`}>
            {getTrendIcon()}
            <span className="text-sm font-medium">
              {kpi.change > 0 ? '+' : ''}{kpi.change}%
            </span>
          </div>
        )}
      </div>
      
      <div className="mb-2">
        <p className="text-3xl font-bold text-gray-900 dark:text-white">
          {kpi.prefix}{formatValue(kpi.value)}{kpi.suffix}
        </p>
      </div>

      {progress !== null && (
        <div className="mt-4">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-1">
            <span>Progress</span>
            <span>{progress.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-deep-dark-400 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all ${
                progress >= 90 ? 'bg-green-500' : progress >= 70 ? 'bg-blue-500' : 'bg-yellow-500'
              }`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

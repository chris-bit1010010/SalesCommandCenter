import { TrendingUp, TrendingDown } from 'lucide-react';
import type { KPI } from '../../types';
import './KPICard.css';

interface KPICardProps {
  kpi: KPI;
}

export const KPICard = ({ kpi }: KPICardProps) => {
  const trendPositive = (kpi.trend || 0) >= 0;
  
  return (
    <div className={`kpi-card kpi-card--${kpi.status || 'default'}`}>
      <div className="kpi-card__header">
        <h3 className="kpi-card__label">{kpi.label}</h3>
      </div>
      <div className="kpi-card__body">
        <div className="kpi-card__value">{kpi.value}</div>
        {kpi.trend !== undefined && (
          <div className={`kpi-card__trend ${trendPositive ? 'kpi-card__trend--positive' : 'kpi-card__trend--negative'}`}>
            {trendPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            <span>{Math.abs(kpi.trend)}%</span>
          </div>
        )}
      </div>
      {kpi.target !== undefined && (
        <div className="kpi-card__footer">
          <div className="kpi-card__progress">
            <div 
              className="kpi-card__progress-bar" 
              style={{ width: `${Math.min(100, (parseFloat(String(kpi.value).replace(/[^0-9.]/g, '')) / kpi.target) * 100)}%` }}
            />
          </div>
          <span className="kpi-card__target">Target: {kpi.target}{kpi.unit || '%'}</span>
        </div>
      )}
    </div>
  );
};

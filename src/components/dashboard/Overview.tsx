import { Play, Eye, BarChart3 } from 'lucide-react';
import { KPICard } from '../common/KPICard';
import { ChartPanel } from '../common/ChartPanel';
import { usePresentation } from '../../contexts/PresentationContext';
import { useRealtimeUpdates } from '../../hooks/useRealtimeUpdates';
import { generateKPIs, generateSalesData } from '../../data/mockData';
import './Overview.css';

export const Overview = () => {
  const { startPresentation, togglePresenterView } = usePresentation();
  const initialKPIs = generateKPIs();
  const kpis = useRealtimeUpdates(initialKPIs);
  const salesData = generateSalesData();

  return (
    <div className="overview">
      <div className="overview__header">
        <div>
          <h1 className="overview__title">Sales Command Center</h1>
          <p className="overview__subtitle">Real-time insights and presentation dashboard</p>
        </div>
        <div className="overview__actions">
          <button 
            className="btn btn--secondary"
            onClick={togglePresenterView}
          >
            <Eye size={20} />
            Presenter View
          </button>
          <button 
            className="btn btn--primary"
            onClick={startPresentation}
          >
            <Play size={20} />
            Start Presentation
          </button>
        </div>
      </div>

      <div className="overview__kpis">
        {kpis.map(kpi => (
          <KPICard key={kpi.id} kpi={kpi} />
        ))}
      </div>

      <div className="overview__charts">
        <div className="overview__chart">
          <ChartPanel
            title="Sales Performance"
            data={salesData}
            type="line"
            dataKeys={[
              { key: 'sales', color: '#428bca', name: 'Sales' },
              { key: 'target', color: '#5cb85c', name: 'Target' },
            ]}
            height={350}
          />
        </div>
        <div className="overview__chart">
          <ChartPanel
            title="Monthly Orders"
            data={salesData}
            type="bar"
            dataKeys={[
              { key: 'orders', color: '#f0ad4e', name: 'Orders' },
            ]}
            height={350}
          />
        </div>
      </div>

      <div className="overview__cta">
        <div className="cta-card">
          <BarChart3 size={48} className="cta-card__icon" />
          <h3 className="cta-card__title">Explore Dashboard Sections</h3>
          <p className="cta-card__description">
            Navigate through Sales Analytics, Marketing Performance, Team Stats, and Reports
          </p>
        </div>
      </div>
    </div>
  );
};

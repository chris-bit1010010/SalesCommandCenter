import { ChartPanel } from '../common/ChartPanel';
import { generateCampaigns } from '../../data/mockData';
import { TrendingUp } from 'lucide-react';
import { formatCurrency } from '../../utils/export';
import './MarketingPerformance.css';

export const MarketingPerformance = () => {
  const campaigns = generateCampaigns();

  const campaignData = campaigns.map(c => ({
    date: c.name.split(' ')[0],
    roi: c.roi,
    leads: c.leads,
    conversions: c.conversions,
  }));

  return (
    <div className="marketing-performance">
      <div className="section-header">
        <div>
          <h2 className="section-title">Marketing Performance</h2>
          <p className="section-subtitle">Campaign ROI and lead generation metrics</p>
        </div>
      </div>

      <div className="marketing-performance__charts">
        <ChartPanel
          title="Campaign ROI"
          data={campaignData}
          type="bar"
          dataKeys={[
            { key: 'roi', color: '#5cb85c', name: 'ROI (%)' },
          ]}
          height={350}
        />
      </div>

      <div className="marketing-performance__campaigns">
        <h3 className="subsection-title">Active Campaigns</h3>
        <div className="campaigns-grid">
          {campaigns.map(campaign => (
            <div key={campaign.id} className="campaign-card">
              <div className="campaign-card__header">
                <h4 className="campaign-card__title">{campaign.name}</h4>
                <div className="campaign-card__roi">
                  <TrendingUp size={16} />
                  {campaign.roi}% ROI
                </div>
              </div>
              <div className="campaign-card__stats">
                <div className="stat">
                  <span className="stat__label">Spend</span>
                  <span className="stat__value">{formatCurrency(campaign.spend)}</span>
                </div>
                <div className="stat">
                  <span className="stat__label">Revenue</span>
                  <span className="stat__value">{formatCurrency(campaign.revenue)}</span>
                </div>
                <div className="stat">
                  <span className="stat__label">Leads</span>
                  <span className="stat__value">{campaign.leads.toLocaleString()}</span>
                </div>
                <div className="stat">
                  <span className="stat__label">Conversions</span>
                  <span className="stat__value">{campaign.conversions}</span>
                </div>
              </div>
              <div className="campaign-card__footer">
                <div className="conversion-rate">
                  Conversion Rate: {((campaign.conversions / campaign.leads) * 100).toFixed(2)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

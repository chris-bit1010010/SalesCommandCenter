import { TrendingUp } from 'lucide-react';
import { ChartPanel } from '../components/common/ChartPanel';
import { mockCampaigns } from '../data/mockData';

export function MarketingPage() {
  const conversionFunnelData = [
    { name: 'Visitors', value: 10000 },
    { name: 'Leads', value: 4800 },
    { name: 'Qualified', value: 2200 },
    { name: 'Opportunities', value: 850 },
    { name: 'Customers', value: 315 },
  ];

  const leadGenData = [
    { name: 'Jan', leads: 320, conversions: 45 },
    { name: 'Feb', leads: 280, conversions: 38 },
    { name: 'Mar', leads: 410, conversions: 62 },
    { name: 'Apr', leads: 380, conversions: 55 },
    { name: 'May', leads: 450, conversions: 71 },
    { name: 'Jun', leads: 420, conversions: 68 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-deep-dark-500 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Marketing Performance
            </h1>
          </div>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Campaign ROI, lead generation, and conversion metrics
          </p>
        </div>

        <div className="space-y-6">
          {/* Campaign ROI */}
          <div className="bg-white dark:bg-deep-dark-200 rounded-lg shadow-md p-6 transition-colors">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Campaign Performance
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-deep-dark-50">
                    <th className="text-left py-3 px-4 text-gray-900 dark:text-white">Campaign Name</th>
                    <th className="text-right py-3 px-4 text-gray-900 dark:text-white">ROI</th>
                    <th className="text-right py-3 px-4 text-gray-900 dark:text-white">Leads</th>
                    <th className="text-right py-3 px-4 text-gray-900 dark:text-white">Conversions</th>
                    <th className="text-right py-3 px-4 text-gray-900 dark:text-white">Spend</th>
                  </tr>
                </thead>
                <tbody>
                  {mockCampaigns.map((campaign) => (
                    <tr key={campaign.id} className="border-b border-gray-100 dark:border-deep-dark-50 hover:bg-gray-50 dark:hover:bg-deep-dark-300">
                      <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">
                        {campaign.name}
                      </td>
                      <td className="text-right py-3 px-4 text-green-600 dark:text-green-400 font-semibold">
                        {campaign.roi}x
                      </td>
                      <td className="text-right py-3 px-4 text-gray-700 dark:text-gray-300">
                        {campaign.leads.toLocaleString()}
                      </td>
                      <td className="text-right py-3 px-4 text-gray-700 dark:text-gray-300">
                        {campaign.conversions}
                      </td>
                      <td className="text-right py-3 px-4 text-gray-700 dark:text-gray-300">
                        ${campaign.spend.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Lead Generation */}
          <ChartPanel
            title="Lead Generation & Conversions"
            data={leadGenData}
            type="bar"
            dataKeys={[
              { key: 'leads', color: '#3b82f6', name: 'Leads' },
              { key: 'conversions', color: '#10b981', name: 'Conversions' }
            ]}
          />

          {/* Conversion Funnel */}
          <ChartPanel
            title="Conversion Funnel"
            data={conversionFunnelData}
            type="bar"
            dataKeys={[
              { key: 'value', color: '#f59e0b', name: 'Count' }
            ]}
          />
        </div>
      </div>
    </div>
  );
}

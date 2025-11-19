import { ChartPanel } from '../components/common/ChartPanel';
import { mockSalesData, mockProducts } from '../data/mockData';
import { BarChart3 } from 'lucide-react';

export function SalesPage() {
  const channelData = [
    { name: 'Direct', value: 450000 },
    { name: 'Partner', value: 380000 },
    { name: 'Online', value: 290000 },
    { name: 'Retail', value: 125000 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-deep-dark-500 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3">
            <BarChart3 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Sales Analytics
            </h1>
          </div>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Detailed sales performance analysis and trends
          </p>
        </div>

        <div className="space-y-6">
          {/* Sales Over Time */}
          <ChartPanel
            title="Sales Performance Over Time"
            data={mockSalesData}
            type="line"
            dataKeys={[
              { key: 'sales', color: '#3b82f6', name: 'Sales Volume' },
              { key: 'revenue', color: '#10b981', name: 'Revenue ($)' }
            ]}
          />

          {/* Top Products */}
          <div className="bg-white dark:bg-deep-dark-200 rounded-lg shadow-md p-6 transition-colors">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Top Products by Revenue
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-deep-dark-50">
                    <th className="text-left py-3 px-4 text-gray-900 dark:text-white">Product Name</th>
                    <th className="text-right py-3 px-4 text-gray-900 dark:text-white">Sales Volume</th>
                    <th className="text-right py-3 px-4 text-gray-900 dark:text-white">Revenue</th>
                    <th className="text-right py-3 px-4 text-gray-900 dark:text-white">Growth Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {mockProducts.map((product) => (
                    <tr key={product.id} className="border-b border-gray-100 dark:border-deep-dark-50 hover:bg-gray-50 dark:hover:bg-deep-dark-300">
                      <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">
                        {product.name}
                      </td>
                      <td className="text-right py-3 px-4 text-gray-700 dark:text-gray-300">
                        {product.sales.toLocaleString()}
                      </td>
                      <td className="text-right py-3 px-4 text-gray-700 dark:text-gray-300">
                        ${(product.revenue / 1000).toFixed(0)}k
                      </td>
                      <td className={`text-right py-3 px-4 font-semibold ${
                        product.growth > 0 
                          ? 'text-green-600 dark:text-green-400' 
                          : 'text-red-600 dark:text-red-400'
                      }`}>
                        {product.growth > 0 ? '+' : ''}{product.growth}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sales by Channel */}
          <ChartPanel
            title="Sales by Channel"
            data={channelData}
            type="bar"
            dataKeys={[
              { key: 'value', color: '#8b5cf6', name: 'Revenue' }
            ]}
          />
        </div>
      </div>
    </div>
  );
}

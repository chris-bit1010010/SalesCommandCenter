import { Link } from 'react-router-dom';
import { Play, Eye, BarChart3, Activity } from 'lucide-react';
import { KPICard } from '../components/common/KPICard';
import { ChartPanel } from '../components/common/ChartPanel';
import { Leaderboard } from '../components/common/Leaderboard';
import { useRealTimeData } from '../hooks/useRealTimeData';
import { mockKPIs, mockSalesData, mockTeamMembers } from '../data/mockData';

export function OverviewPage() {
  const { kpis, isConnected } = useRealTimeData(mockKPIs, true);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-deep-dark-500 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Sales Command Center
              </h1>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Real-time sales analytics and performance dashboard
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${
                isConnected 
                  ? 'bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300' 
                  : 'bg-gray-100 dark:bg-deep-dark-200 text-gray-700 dark:text-gray-300'
              }`}>
                <Activity className={`w-4 h-4 ${isConnected ? 'animate-pulse' : ''}`} />
                <span className="text-sm font-medium">
                  {isConnected ? 'Live' : 'Offline'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Link
            to="/presentation"
            className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg shadow-md transition-colors"
          >
            <Play className="w-5 h-5" />
            Start Presentation
          </Link>
          <Link
            to="/presenter-view"
            className="flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-lg shadow-md transition-colors"
          >
            <Eye className="w-5 h-5" />
            Presenter View
          </Link>
          <Link
            to="/sales"
            className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg shadow-md transition-colors"
          >
            <BarChart3 className="w-5 h-5" />
            View Analytics
          </Link>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi) => (
            <KPICard key={kpi.id} kpi={kpi} />
          ))}
        </div>

        {/* Charts and Leaderboard */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ChartPanel
              title="Sales Performance"
              data={mockSalesData}
              type="line"
              dataKeys={[
                { key: 'sales', color: '#3b82f6', name: 'Sales' },
                { key: 'revenue', color: '#10b981', name: 'Revenue' }
              ]}
            />
          </div>
          <div>
            <Leaderboard members={mockTeamMembers} />
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-300">
          <p>Data updates every 5 seconds • Last updated: {new Date().toLocaleTimeString()}</p>
        </div>
      </div>
    </div>
  );
}

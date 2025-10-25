import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useKeyboardShortcuts } from '../hooks/useKeyboardShortcuts';
import { KPICard } from '../components/common/KPICard';
import { ChartPanel } from '../components/common/ChartPanel';
import { Leaderboard } from '../components/common/Leaderboard';
import { useRealTimeData } from '../hooks/useRealTimeData';
import { mockKPIs, mockSalesData, mockProducts, mockTeamMembers } from '../data/mockData';

const slides = [
  {
    id: 'overview',
    title: 'Sales Command Center Overview',
    type: 'kpis' as const,
    notes: 'Welcome to the Sales Command Center. Today we\'ll review our key performance indicators, which show strong growth across all metrics. Pay special attention to our 12.5% increase in total sales.'
  },
  {
    id: 'sales-trend',
    title: 'Sales Performance Trends',
    type: 'chart' as const,
    notes: 'This chart shows our monthly sales progression. Notice the consistent upward trend from January through December. Highlight the peak in November and discuss seasonal factors.'
  },
  {
    id: 'top-products',
    title: 'Top Products',
    type: 'products' as const,
    notes: 'Our Enterprise Plan leads in revenue generation. Premium Add-ons show the highest growth at 31.2%. Discuss strategy for improving Basic Plan performance which is down 2.1%.'
  },
  {
    id: 'team-performance',
    title: 'Team Performance',
    type: 'leaderboard' as const,
    notes: 'Team performance has been exceptional. Mike Chen and Lisa Anderson have exceeded their targets. Recognize their achievements and discuss strategies being used by top performers.'
  },
];

export function PresenterViewPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const { kpis } = useRealTimeData(mockKPIs, true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const exitPresentation = () => {
    navigate('/');
  };

  useKeyboardShortcuts({
    'arrowright': nextSlide,
    'arrowleft': prevSlide,
    'escape': exitPresentation,
  });

  const renderSlideContent = (slideIndex: number) => {
    const slide = slides[slideIndex];

    switch (slide.type) {
      case 'kpis':
        return (
          <div className="grid grid-cols-2 gap-4">
            {kpis.map((kpi) => (
              <KPICard key={kpi.id} kpi={kpi} className="transform scale-90" />
            ))}
          </div>
        );

      case 'chart':
        return (
          <ChartPanel
            title="Monthly Sales Performance"
            data={mockSalesData}
            type="line"
            dataKeys={[
              { key: 'sales', color: '#3b82f6', name: 'Sales' },
              { key: 'revenue', color: '#10b981', name: 'Revenue' }
            ]}
          />
        );

      case 'products':
        return (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-2 text-gray-900 dark:text-white">Product</th>
                  <th className="text-right py-2 text-gray-900 dark:text-white">Sales</th>
                  <th className="text-right py-2 text-gray-900 dark:text-white">Revenue</th>
                  <th className="text-right py-2 text-gray-900 dark:text-white">Growth</th>
                </tr>
              </thead>
              <tbody>
                {mockProducts.map((product) => (
                  <tr key={product.id} className="border-b border-gray-100 dark:border-gray-700">
                    <td className="py-2 text-gray-900 dark:text-white">{product.name}</td>
                    <td className="text-right py-2 text-gray-700 dark:text-gray-300">{product.sales.toLocaleString()}</td>
                    <td className="text-right py-2 text-gray-700 dark:text-gray-300">${(product.revenue / 1000).toFixed(0)}k</td>
                    <td className={`text-right py-2 ${
                      product.growth > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                    }`}>
                      {product.growth > 0 ? '+' : ''}{product.growth}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

      case 'leaderboard':
        return <Leaderboard members={mockTeamMembers} />;

      default:
        return null;
    }
  };

  const currentSlideData = slides[currentSlide];
  const nextSlideIndex = (currentSlide + 1) % slides.length;

  return (
    <div className="fixed inset-0 bg-gray-50 dark:bg-gray-900 z-50">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">Presenter View</h1>
          <button
            onClick={exitPresentation}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Exit presenter view"
          >
            <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>

      <div className="h-[calc(100vh-73px)] overflow-auto">
        <div className="grid grid-cols-2 gap-6 p-6 h-full">
          {/* Left Column - Current Slide */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Current Slide ({currentSlide + 1}/{slides.length})
              </h2>
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                <h3 className="text-md font-semibold text-gray-900 dark:text-white mb-4">
                  {currentSlideData.title}
                </h3>
                {renderSlideContent(currentSlide)}
              </div>
            </div>

            {/* Speaker Notes */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Speaker Notes
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {currentSlideData.notes}
              </p>
            </div>
          </div>

          {/* Right Column - Next Slide Preview & Controls */}
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Next Slide Preview
              </h2>
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 opacity-75">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-400 mb-4">
                  {slides[nextSlideIndex].title}
                </h3>
                <div className="transform scale-75 origin-top-left">
                  {renderSlideContent(nextSlideIndex)}
                </div>
              </div>
            </div>

            {/* Timer and Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Presentation Info
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Current Time:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {new Date().toLocaleTimeString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Slide:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {currentSlide + 1} of {slides.length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Progress:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {Math.round(((currentSlide + 1) / slides.length) * 100)}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prevSlide}
            className="flex items-center gap-2 px-6 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors"
            disabled={currentSlide === 0}
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>

          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

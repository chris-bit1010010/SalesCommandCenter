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
  },
  {
    id: 'sales-trend',
    title: 'Sales Performance Trends',
    type: 'chart' as const,
  },
  {
    id: 'top-products',
    title: 'Top Products',
    type: 'products' as const,
  },
  {
    id: 'team-performance',
    title: 'Team Performance',
    type: 'leaderboard' as const,
  },
];

export function PresentationPage() {
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
    ' ': nextSlide, // Space bar
  });

  const renderSlideContent = () => {
    const slide = slides[currentSlide];

    switch (slide.type) {
      case 'kpis':
        return (
          <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
            {kpis.map((kpi) => (
              <KPICard key={kpi.id} kpi={kpi} className="transform scale-110" />
            ))}
          </div>
        );

      case 'chart':
        return (
          <div className="max-w-6xl mx-auto">
            <ChartPanel
              title="Monthly Sales Performance"
              data={mockSalesData}
              type="line"
              dataKeys={[
                { key: 'sales', color: '#3b82f6', name: 'Sales Volume' },
                { key: 'revenue', color: '#10b981', name: 'Revenue' }
              ]}
            />
          </div>
        );

      case 'products':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 text-gray-900 dark:text-white">Product</th>
                    <th className="text-right py-4 text-gray-900 dark:text-white">Sales</th>
                    <th className="text-right py-4 text-gray-900 dark:text-white">Revenue</th>
                    <th className="text-right py-4 text-gray-900 dark:text-white">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {mockProducts.map((product) => (
                    <tr key={product.id} className="border-b border-gray-100 dark:border-gray-700">
                      <td className="py-4 text-gray-900 dark:text-white font-medium">{product.name}</td>
                      <td className="text-right py-4 text-gray-700 dark:text-gray-300">{product.sales.toLocaleString()}</td>
                      <td className="text-right py-4 text-gray-700 dark:text-gray-300">${(product.revenue / 1000).toFixed(0)}k</td>
                      <td className={`text-right py-4 font-semibold ${
                        product.growth > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                      }`}>
                        {product.growth > 0 ? '+' : ''}{product.growth}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'leaderboard':
        return (
          <div className="max-w-4xl mx-auto">
            <Leaderboard members={mockTeamMembers} />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 text-white z-50">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/50 to-transparent z-10">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold">{slides[currentSlide].title}</h1>
          <button
            onClick={exitPresentation}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Exit presentation"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="h-full flex items-center justify-center px-8 py-20">
        {renderSlideContent()}
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <button
            onClick={prevSlide}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
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
                  index === currentSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Keyboard Shortcuts Hint */}
      <div className="absolute bottom-20 right-6 text-sm text-white/60">
        Use ← → or Space to navigate • ESC to exit
      </div>
    </div>
  );
}

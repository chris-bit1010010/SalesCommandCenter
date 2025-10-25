import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { usePresentation } from '../../contexts/PresentationContext';
import { useKeyboardShortcuts } from '../../hooks/useRealtimeUpdates';
import { Overview } from '../dashboard/Overview';
import { SalesAnalytics } from '../dashboard/SalesAnalytics';
import { MarketingPerformance } from '../dashboard/MarketingPerformance';
import { TeamPerformance } from '../dashboard/TeamPerformance';
import { ReportsLibrary } from '../dashboard/ReportsLibrary';
import './PresentationMode.css';

export const PresentationMode = () => {
  const {
    isPresentationMode,
    currentSlide,
    slides,
    stopPresentation,
    nextSlide,
    previousSlide,
  } = usePresentation();

  useKeyboardShortcuts({
    'Escape': stopPresentation,
    'ArrowRight': nextSlide,
    'ArrowLeft': previousSlide,
    'n': nextSlide,
    'p': previousSlide,
  });

  if (!isPresentationMode) return null;

  const currentSlideData = slides[currentSlide];

  const renderSlideContent = () => {
    switch (currentSlideData.type) {
      case 'overview':
        return <Overview />;
      case 'sales':
        return <SalesAnalytics />;
      case 'marketing':
        return <MarketingPerformance />;
      case 'team':
        return <TeamPerformance />;
      case 'reports':
        return <ReportsLibrary />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="presentation-mode">
      <div className="presentation-mode__header">
        <div className="presentation-mode__title">
          {currentSlideData.title}
        </div>
        <div className="presentation-mode__controls">
          <span className="presentation-mode__counter">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            className="presentation-mode__btn"
            onClick={previousSlide}
            disabled={currentSlide === 0}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="presentation-mode__btn"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            <ChevronRight size={20} />
          </button>
          <button
            className="presentation-mode__btn presentation-mode__btn--close"
            onClick={stopPresentation}
          >
            <X size={20} />
          </button>
        </div>
      </div>
      <div className="presentation-mode__content">
        {renderSlideContent()}
      </div>
      <div className="presentation-mode__shortcuts">
        <kbd>←</kbd> <kbd>→</kbd> Navigate | <kbd>Esc</kbd> Exit
      </div>
    </div>
  );
};

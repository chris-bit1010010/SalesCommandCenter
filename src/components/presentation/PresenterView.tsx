import { X } from 'lucide-react';
import { usePresentation } from '../../contexts/PresentationContext';
import { Overview } from '../dashboard/Overview';
import { SalesAnalytics } from '../dashboard/SalesAnalytics';
import { MarketingPerformance } from '../dashboard/MarketingPerformance';
import { TeamPerformance } from '../dashboard/TeamPerformance';
import { ReportsLibrary } from '../dashboard/ReportsLibrary';
import './PresenterView.css';

export const PresenterView = () => {
  const {
    isPresenterView,
    currentSlide,
    slides,
    togglePresenterView,
    goToSlide,
  } = usePresentation();

  if (!isPresenterView) return null;

  const currentSlideData = slides[currentSlide];
  const nextSlideData = currentSlide < slides.length - 1 ? slides[currentSlide + 1] : null;

  const renderSlideContent = (type: string) => {
    switch (type) {
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
    <div className="presenter-view">
      <div className="presenter-view__header">
        <h2 className="presenter-view__title">Presenter View</h2>
        <button
          className="presenter-view__close"
          onClick={togglePresenterView}
        >
          <X size={20} />
        </button>
      </div>

      <div className="presenter-view__layout">
        <div className="presenter-view__current">
          <h3 className="presenter-view__section-title">Current Slide</h3>
          <div className="presenter-view__slide-preview">
            {renderSlideContent(currentSlideData.type)}
          </div>
        </div>

        <div className="presenter-view__sidebar">
          <div className="presenter-view__notes">
            <h3 className="presenter-view__section-title">Speaker Notes</h3>
            <p className="presenter-view__notes-content">
              {currentSlideData.notes || 'No notes available for this slide.'}
            </p>
          </div>

          {nextSlideData && (
            <div className="presenter-view__next">
              <h3 className="presenter-view__section-title">Next Slide</h3>
              <div className="presenter-view__next-preview">
                <div className="presenter-view__next-title">{nextSlideData.title}</div>
              </div>
            </div>
          )}

          <div className="presenter-view__navigation">
            <h3 className="presenter-view__section-title">All Slides</h3>
            <div className="presenter-view__slide-list">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  className={`presenter-view__slide-item ${
                    index === currentSlide ? 'presenter-view__slide-item--active' : ''
                  }`}
                  onClick={() => goToSlide(index)}
                >
                  <span className="presenter-view__slide-number">{index + 1}</span>
                  <span className="presenter-view__slide-name">{slide.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

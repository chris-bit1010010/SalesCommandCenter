/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { SlideData } from '../types';

interface PresentationContextType {
  isPresentationMode: boolean;
  isPresenterView: boolean;
  currentSlide: number;
  slides: SlideData[];
  startPresentation: () => void;
  stopPresentation: () => void;
  togglePresenterView: () => void;
  nextSlide: () => void;
  previousSlide: () => void;
  goToSlide: (index: number) => void;
}

const PresentationContext = createContext<PresentationContextType | undefined>(undefined);

const defaultSlides: SlideData[] = [
  { id: 'overview', title: 'Overview Dashboard', type: 'overview', notes: 'Welcome to the Sales Command Center. This overview shows our key performance indicators.' },
  { id: 'sales', title: 'Sales Analytics', type: 'sales', notes: 'Detailed sales performance over time, top products, and channel analysis.' },
  { id: 'marketing', title: 'Marketing Performance', type: 'marketing', notes: 'Campaign ROI, lead generation statistics, and conversion funnels.' },
  { id: 'team', title: 'Team Performance', type: 'team', notes: 'Team leaderboards, activity metrics, and individual performance stats.' },
  { id: 'reports', title: 'Reports Library', type: 'reports', notes: 'Access to saved reports with search and filter capabilities.' },
];

export const PresentationProvider = ({ children }: { children: ReactNode }) => {
  const [isPresentationMode, setIsPresentationMode] = useState(false);
  const [isPresenterView, setIsPresenterView] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides] = useState<SlideData[]>(defaultSlides);

  const startPresentation = useCallback(() => {
    setIsPresentationMode(true);
    setCurrentSlide(0);
  }, []);

  const stopPresentation = useCallback(() => {
    setIsPresentationMode(false);
    setIsPresenterView(false);
  }, []);

  const togglePresenterView = useCallback(() => {
    setIsPresenterView(prev => !prev);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  const previousSlide = useCallback(() => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  }, [slides.length]);

  return (
    <PresentationContext.Provider
      value={{
        isPresentationMode,
        isPresenterView,
        currentSlide,
        slides,
        startPresentation,
        stopPresentation,
        togglePresenterView,
        nextSlide,
        previousSlide,
        goToSlide,
      }}
    >
      {children}
    </PresentationContext.Provider>
  );
};

export const usePresentation = () => {
  const context = useContext(PresentationContext);
  if (!context) {
    throw new Error('usePresentation must be used within PresentationProvider');
  }
  return context;
};

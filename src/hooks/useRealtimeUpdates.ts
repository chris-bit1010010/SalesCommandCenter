import { useEffect, useState } from 'react';
import type { KPI } from '../types';
import { simulateRealtimeUpdate } from '../data/mockData';

// This hook simulates real-time updates
// In production, this would connect to a WebSocket server
export const useRealtimeUpdates = (initialKPIs: KPI[]) => {
  const [kpis, setKpis] = useState<KPI[]>(initialKPIs);

  useEffect(() => {
    const interval = setInterval(() => {
      setKpis(prevKpis =>
        prevKpis.map(kpi => {
          if (typeof kpi.value === 'string' && kpi.value.includes('$')) {
            // Update monetary values
            const numericValue = parseFloat(kpi.value.replace(/[$,M]/g, ''));
            const updated = simulateRealtimeUpdate(numericValue, 0.01);
            const isMillions = kpi.value.includes('M');
            const newValue = isMillions
              ? `$${updated.toFixed(1)}M`
              : `$${Math.floor(updated).toLocaleString()}`;
            
            // Update trend
            const oldTrend = kpi.trend || 0;
            const trendChange = (Math.random() - 0.5) * 2;
            const newTrend = parseFloat((oldTrend + trendChange).toFixed(1));
            
            return { ...kpi, value: newValue, trend: newTrend };
          } else if (typeof kpi.value === 'string' && kpi.value.includes('%')) {
            // Update percentage values
            const numericValue = parseFloat(kpi.value.replace('%', ''));
            const updated = simulateRealtimeUpdate(numericValue, 0.02);
            const newValue = `${Math.max(0, Math.min(100, updated)).toFixed(1)}%`;
            
            // Update trend
            const oldTrend = kpi.trend || 0;
            const trendChange = (Math.random() - 0.5) * 2;
            const newTrend = parseFloat((oldTrend + trendChange).toFixed(1));
            
            // Update status based on value
            let status: 'success' | 'warning' | 'danger' = 'success';
            const percentValue = parseFloat(newValue);
            if (kpi.target) {
              if (percentValue >= kpi.target * 0.9) status = 'success';
              else if (percentValue >= kpi.target * 0.7) status = 'warning';
              else status = 'danger';
            }
            
            return { ...kpi, value: newValue, trend: newTrend, status };
          }
          return kpi;
        })
      );
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return kpis;
};

// Hook for keyboard shortcuts
export const useKeyboardShortcuts = (handlers: { [key: string]: () => void }) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key;
      if (handlers[key]) {
        event.preventDefault();
        handlers[key]();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handlers]);
};

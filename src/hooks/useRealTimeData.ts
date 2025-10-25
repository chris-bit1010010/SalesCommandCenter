import { useEffect, useState, useCallback } from 'react';
import type { KPI } from '../types';
import { getUpdatedKPIs } from '../data/mockData';

export function useRealTimeData(initialKPIs: KPI[], enabled: boolean = true) {
  const [kpis, setKpis] = useState<KPI[]>(initialKPIs);
  const [isConnected, setIsConnected] = useState(false);

  const updateData = useCallback(() => {
    setKpis(current => getUpdatedKPIs(current));
  }, []);

  useEffect(() => {
    if (!enabled) {
      setIsConnected(false);
      return;
    }

    // Simulate WebSocket connection
    setIsConnected(true);

    // Update data every 5 seconds to simulate real-time updates
    const interval = setInterval(() => {
      updateData();
    }, 5000);

    return () => {
      clearInterval(interval);
      setIsConnected(false);
    };
  }, [enabled, updateData]);

  return { kpis, isConnected };
}

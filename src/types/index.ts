// Core types for Sales Command Center

export interface KPI {
  id: string;
  title: string;
  value: number | string;
  change?: number;
  prefix?: string;
  suffix?: string;
  trend?: 'up' | 'down' | 'neutral';
  target?: number;
  unit?: string;
}

export interface ChartDataPoint {
  name: string;
  value?: number;
  [key: string]: string | number | undefined;
}

export interface SalesData {
  name: string;
  sales: number;
  revenue: number;
  date?: string;
  [key: string]: string | number | undefined;
}

export interface Product {
  id: string;
  name: string;
  sales: number;
  revenue: number;
  growth: number;
}

export interface Campaign {
  id: string;
  name: string;
  roi: number;
  leads: number;
  conversions: number;
  spend: number;
}

export interface TeamMember {
  id: string;
  name: string;
  sales: number;
  deals: number;
  target: number;
  avatar?: string;
}

export interface Report {
  id: string;
  title: string;
  description: string;
  tags: string[];
  createdAt: string;
  type: 'sales' | 'marketing' | 'team' | 'custom';
}

export interface SlideContent {
  id: string;
  title: string;
  type: 'overview' | 'sales' | 'marketing' | 'team' | 'reports';
  speakerNotes?: string;
  component?: React.ComponentType<Record<string, unknown>>;
}

export type ThemeMode = 'light' | 'dark';

export interface FilterOptions {
  dateRange?: {
    start: Date;
    end: Date;
  };
  team?: string[];
  region?: string[];
  product?: string[];
}

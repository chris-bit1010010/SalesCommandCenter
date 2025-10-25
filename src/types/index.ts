export interface KPI {
  id: string;
  label: string;
  value: number | string;
  trend?: number;
  unit?: string;
  target?: number;
  status?: 'success' | 'warning' | 'danger';
}

export interface SalesData {
  date: string;
  sales: number;
  target: number;
  orders: number;
}

export interface Product {
  name: string;
  sales: number;
  revenue: number;
  growth: number;
}

export interface Campaign {
  id: string;
  name: string;
  spend: number;
  revenue: number;
  roi: number;
  leads: number;
  conversions: number;
}

export interface TeamMember {
  id: string;
  name: string;
  sales: number;
  deals: number;
  rank: number;
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

export interface SlideData {
  id: string;
  title: string;
  type: 'overview' | 'sales' | 'marketing' | 'team' | 'reports';
  notes?: string;
}

export type ThemeMode = 'light' | 'dark';

export interface FilterOptions {
  dateRange: {
    start: Date;
    end: Date;
  };
  teams?: string[];
  regions?: string[];
  products?: string[];
}

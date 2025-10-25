// Mock data for Sales Command Center
import type { KPI, SalesData, Product, Campaign, TeamMember, Report } from '../types';

export const mockKPIs: KPI[] = [
  {
    id: 'total-sales',
    title: 'Total Sales',
    value: 1245000,
    change: 12.5,
    prefix: '$',
    trend: 'up',
    target: 1500000,
    unit: 'USD'
  },
  {
    id: 'monthly-goal',
    title: 'Monthly Goal',
    value: 83,
    change: 5.2,
    suffix: '%',
    trend: 'up',
    target: 100
  },
  {
    id: 'growth-rate',
    title: 'Growth Rate',
    value: 18.7,
    change: 2.3,
    suffix: '%',
    trend: 'up'
  },
  {
    id: 'arr',
    title: 'Annual Recurring Revenue',
    value: 14940000,
    change: -1.2,
    prefix: '$',
    trend: 'down',
    unit: 'USD'
  }
];

export const mockSalesData: SalesData[] = [
  { name: 'Jan', sales: 4000, revenue: 240000 },
  { name: 'Feb', sales: 3000, revenue: 198000 },
  { name: 'Mar', sales: 5000, revenue: 390000 },
  { name: 'Apr', sales: 4500, revenue: 345000 },
  { name: 'May', sales: 6000, revenue: 480000 },
  { name: 'Jun', sales: 5500, revenue: 425000 },
  { name: 'Jul', sales: 7000, revenue: 560000 },
  { name: 'Aug', sales: 6500, revenue: 520000 },
  { name: 'Sep', sales: 8000, revenue: 640000 },
  { name: 'Oct', sales: 7500, revenue: 600000 },
  { name: 'Nov', sales: 9000, revenue: 720000 },
  { name: 'Dec', sales: 8500, revenue: 680000 }
];

export const mockProducts: Product[] = [
  { id: 'p1', name: 'Enterprise Plan', sales: 1200, revenue: 3600000, growth: 15.3 },
  { id: 'p2', name: 'Professional Plan', sales: 3500, revenue: 1750000, growth: 8.7 },
  { id: 'p3', name: 'Basic Plan', sales: 5800, revenue: 580000, growth: -2.1 },
  { id: 'p4', name: 'Premium Add-ons', sales: 2100, revenue: 420000, growth: 22.5 },
  { id: 'p5', name: 'Consulting Services', sales: 450, revenue: 900000, growth: 31.2 }
];

export const mockCampaigns: Campaign[] = [
  { id: 'c1', name: 'Summer Sale 2024', roi: 3.5, leads: 1250, conversions: 185, spend: 25000 },
  { id: 'c2', name: 'Product Launch Q4', roi: 4.2, leads: 890, conversions: 142, spend: 18000 },
  { id: 'c3', name: 'Email Nurture Series', roi: 5.8, leads: 2100, conversions: 315, spend: 12000 },
  { id: 'c4', name: 'LinkedIn Outreach', roi: 2.9, leads: 560, conversions: 78, spend: 15000 }
];

export const mockTeamMembers: TeamMember[] = [
  { id: 't1', name: 'Sarah Johnson', sales: 145000, deals: 23, target: 150000 },
  { id: 't2', name: 'Mike Chen', sales: 198000, deals: 31, target: 180000 },
  { id: 't3', name: 'Emily Rodriguez', sales: 167000, deals: 28, target: 160000 },
  { id: 't4', name: 'David Kim', sales: 134000, deals: 21, target: 140000 },
  { id: 't5', name: 'Lisa Anderson', sales: 189000, deals: 29, target: 175000 },
  { id: 't6', name: 'James Wilson', sales: 156000, deals: 25, target: 155000 }
];

export const mockReports: Report[] = [
  { 
    id: 'r1', 
    title: 'Q3 Sales Performance', 
    description: 'Comprehensive analysis of Q3 sales metrics', 
    tags: ['sales', 'quarterly', 'performance'],
    createdAt: '2024-10-01',
    type: 'sales'
  },
  { 
    id: 'r2', 
    title: 'Marketing ROI Dashboard', 
    description: 'Campaign performance and ROI metrics', 
    tags: ['marketing', 'roi', 'campaigns'],
    createdAt: '2024-10-15',
    type: 'marketing'
  },
  { 
    id: 'r3', 
    title: 'Team Leaderboard', 
    description: 'Sales team performance rankings', 
    tags: ['team', 'performance', 'leaderboard'],
    createdAt: '2024-10-20',
    type: 'team'
  }
];

// Function to simulate real-time data updates
export function getUpdatedKPIs(currentKPIs: KPI[]): KPI[] {
  return currentKPIs.map(kpi => {
    const randomChange = (Math.random() - 0.5) * 0.02; // ±1% change
    const currentValue = typeof kpi.value === 'number' ? kpi.value : parseFloat(kpi.value as string);
    const newValue = currentValue * (1 + randomChange);
    
    return {
      ...kpi,
      value: kpi.suffix === '%' ? parseFloat(newValue.toFixed(1)) : Math.round(newValue),
      change: parseFloat((Math.random() * 20 - 5).toFixed(1)) // Random change between -5 and 15
    };
  });
}

import type { KPI, SalesData, Product, Campaign, TeamMember, Report } from '../types';

// Generate mock KPIs
export const generateKPIs = (): KPI[] => [
  {
    id: 'total-sales',
    label: 'Total Sales',
    value: '$1,245,680',
    trend: 12.5,
    status: 'success',
  },
  {
    id: 'monthly-goal',
    label: 'Monthly Goal',
    value: '87%',
    trend: 5.2,
    target: 100,
    status: 'warning',
  },
  {
    id: 'growth-rate',
    label: 'Growth Rate',
    value: '24.3%',
    trend: 8.1,
    status: 'success',
  },
  {
    id: 'arr',
    label: 'ARR',
    value: '$14.9M',
    trend: 18.7,
    status: 'success',
  },
];

// Generate mock sales data
export const generateSalesData = (): SalesData[] => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months.map((month) => ({
    date: month,
    sales: Math.floor(80000 + Math.random() * 40000),
    target: 100000,
    orders: Math.floor(200 + Math.random() * 150),
  }));
};

// Generate mock product data
export const generateTopProducts = (): Product[] => [
  { name: 'Enterprise Plan', sales: 245, revenue: 489000, growth: 24.5 },
  { name: 'Professional Plan', sales: 567, revenue: 340200, growth: 18.2 },
  { name: 'Starter Plan', sales: 892, revenue: 178400, growth: -5.3 },
  { name: 'Premium Add-ons', sales: 334, revenue: 167000, growth: 32.1 },
  { name: 'Consulting Services', sales: 89, revenue: 267000, growth: 45.6 },
];

// Generate mock campaign data
export const generateCampaigns = (): Campaign[] => [
  {
    id: 'camp-1',
    name: 'Q4 Email Campaign',
    spend: 15000,
    revenue: 85000,
    roi: 467,
    leads: 2340,
    conversions: 234,
  },
  {
    id: 'camp-2',
    name: 'Social Media Ads',
    spend: 28000,
    revenue: 142000,
    roi: 407,
    leads: 3890,
    conversions: 456,
  },
  {
    id: 'camp-3',
    name: 'Content Marketing',
    spend: 12000,
    revenue: 67000,
    roi: 458,
    leads: 1890,
    conversions: 189,
  },
  {
    id: 'camp-4',
    name: 'Webinar Series',
    spend: 8000,
    revenue: 45000,
    roi: 463,
    leads: 890,
    conversions: 123,
  },
];

// Generate mock team data
export const generateTeamMembers = (): TeamMember[] => [
  { id: 'tm-1', name: 'Sarah Johnson', sales: 285000, deals: 34, rank: 1 },
  { id: 'tm-2', name: 'Michael Chen', sales: 267000, deals: 31, rank: 2 },
  { id: 'tm-3', name: 'Emily Rodriguez', sales: 245000, deals: 28, rank: 3 },
  { id: 'tm-4', name: 'David Kim', sales: 223000, deals: 26, rank: 4 },
  { id: 'tm-5', name: 'Jessica Brown', sales: 198000, deals: 24, rank: 5 },
  { id: 'tm-6', name: 'James Wilson', sales: 187000, deals: 22, rank: 6 },
  { id: 'tm-7', name: 'Anna Martinez', sales: 176000, deals: 20, rank: 7 },
  { id: 'tm-8', name: 'Robert Taylor', sales: 165000, deals: 19, rank: 8 },
];

// Generate mock reports
export const generateReports = (): Report[] => [
  {
    id: 'rep-1',
    title: 'Q3 Sales Performance',
    description: 'Comprehensive analysis of Q3 sales metrics',
    tags: ['sales', 'quarterly', 'performance'],
    createdAt: '2024-10-15',
    type: 'sales',
  },
  {
    id: 'rep-2',
    title: 'Marketing Campaign ROI',
    description: 'Analysis of marketing campaigns and their ROI',
    tags: ['marketing', 'roi', 'campaigns'],
    createdAt: '2024-10-10',
    type: 'marketing',
  },
  {
    id: 'rep-3',
    title: 'Team Performance Dashboard',
    description: 'Monthly team performance metrics and insights',
    tags: ['team', 'performance', 'monthly'],
    createdAt: '2024-10-05',
    type: 'team',
  },
  {
    id: 'rep-4',
    title: 'Regional Sales Breakdown',
    description: 'Sales performance by region and territory',
    tags: ['sales', 'regional', 'territory'],
    createdAt: '2024-09-28',
    type: 'sales',
  },
];

// Simulate real-time updates
export const simulateRealtimeUpdate = (currentValue: number, variance: number = 0.02): number => {
  const change = (Math.random() - 0.5) * variance * currentValue;
  return Math.max(0, currentValue + change);
};

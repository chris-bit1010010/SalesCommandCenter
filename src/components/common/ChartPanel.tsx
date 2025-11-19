import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartPanelProps {
  title: string;
  data: Record<string, string | number | undefined>[]; // Allow flexible data structure
  type?: 'line' | 'bar';
  dataKeys: { key: string; color: string; name: string }[];
  className?: string;
}

export function ChartPanel({ 
  title, 
  data, 
  type = 'line', 
  dataKeys,
  className = '' 
}: ChartPanelProps) {
  const Chart = type === 'line' ? LineChart : BarChart;
  const DataComponent = type === 'line' ? Line : Bar;

  return (
    <div className={`bg-white dark:bg-deep-dark-200 rounded-lg shadow-md p-6 transition-colors border border-transparent dark:border-deep-dark-50 ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <Chart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-300 dark:stroke-deep-dark-50" />
          <XAxis 
            dataKey="name" 
            className="text-gray-600 dark:text-gray-300"
            tick={{ fill: 'currentColor' }}
          />
          <YAxis 
            className="text-gray-600 dark:text-gray-300"
            tick={{ fill: 'currentColor' }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'var(--tooltip-bg)',
              border: '1px solid var(--tooltip-border)',
              borderRadius: '0.375rem'
            }}
          />
          <Legend />
          {dataKeys.map(({ key, color, name }) => (
            <DataComponent
              key={key}
              type="monotone"
              dataKey={key}
              stroke={color}
              fill={color}
              name={name}
            />
          ))}
        </Chart>
      </ResponsiveContainer>
    </div>
  );
}

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './ChartPanel.css';

interface ChartPanelProps {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  type?: 'line' | 'bar';
  dataKeys?: { key: string; color: string; name?: string }[];
  height?: number;
}

export const ChartPanel = ({ 
  title, 
  data, 
  type = 'line', 
  dataKeys = [{ key: 'value', color: '#428bca', name: 'Value' }],
  height = 300 
}: ChartPanelProps) => {
  return (
    <div className="chart-panel">
      <h3 className="chart-panel__title">{title}</h3>
      <div className="chart-panel__content">
        <ResponsiveContainer width="100%" height={height}>
          {type === 'line' ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="date" stroke="var(--text-secondary)" />
              <YAxis stroke="var(--text-secondary)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--card-bg)', 
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px'
                }} 
              />
              <Legend />
              {dataKeys.map((dk) => (
                <Line 
                  key={dk.key}
                  type="monotone" 
                  dataKey={dk.key} 
                  stroke={dk.color} 
                  strokeWidth={2}
                  name={dk.name || dk.key}
                  dot={{ fill: dk.color, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              ))}
            </LineChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
              <XAxis dataKey="date" stroke="var(--text-secondary)" />
              <YAxis stroke="var(--text-secondary)" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--card-bg)', 
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px'
                }} 
              />
              <Legend />
              {dataKeys.map((dk) => (
                <Bar 
                  key={dk.key}
                  dataKey={dk.key} 
                  fill={dk.color}
                  name={dk.name || dk.key}
                  radius={[4, 4, 0, 0]}
                />
              ))}
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

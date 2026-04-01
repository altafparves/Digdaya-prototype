import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface TrendChartProps {
  title: string;
  data: any[];
  dataKey: string;
  color: string;
  valueFormatter?: (val: number) => string;
  domain?: [any, any];
  subtitle?: string;
}

export const TrendChart = ({ 
  title, 
  data, 
  dataKey, 
  color, 
  valueFormatter = (val) => `${val}`,
  domain = ['dataMin', 'dataMax'],
  subtitle 
}: TrendChartProps) => {
  const gradientId = `color-${dataKey}`;

  return (
    <div className="bg-surface-lowest rounded-md p-5 shadow-[0_4px_24px_rgba(24,28,32,0.06)] border border-outline-variant/15 w-full h-[250px] flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xs font-extrabold text-on-surface-variant uppercase tracking-widest">{title}</h3>
          {subtitle && <p className="text-[10px] text-on-surface-variant/80 mt-1">{subtitle}</p>}
        </div>
      </div>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={color} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#c2c6d4" opacity={0.3} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#424752', fontFamily: 'Inter' }} dy={10} />
            <YAxis domain={domain} axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#424752', fontFamily: 'Inter' }} dx={-10} tickFormatter={valueFormatter} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #dfe3e8', fontSize: '12px', fontFamily: 'Inter', boxShadow: '0 4px 24px rgba(24,28,32,0.08)' }}
              itemStyle={{ color: color, fontWeight: 'bold' }}
              labelStyle={{ color: '#424752' }}
            />
            <Area type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} fillOpacity={1} fill={`url(#${gradientId})`} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

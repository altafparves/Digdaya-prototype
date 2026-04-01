
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Sen', price: 12100 },
  { name: 'Sel', price: 12200 },
  { name: 'Rab', price: 12400 },
  { name: 'Kam', price: 12300 },
  { name: 'Jum', price: 12500 },
  { name: 'Sab', price: 12700 },
  { name: 'Min', price: 12850 },
];

export const TrendChart = () => {
  return (
    <div className="bg-surface-lowest rounded-md p-5 shadow-[0_4px_24px_rgba(24,28,32,0.06)] border border-outline-variant/15 w-full h-[300px] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xs font-extrabold text-on-surface-variant uppercase tracking-widest">Tren Harga (7 Hari)</h3>
      </div>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00488d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#00488d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#c2c6d4" opacity={0.3} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#424752', fontFamily: 'Inter' }} dy={10} />
            <YAxis domain={['dataMin - 200', 'dataMax + 200']} axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#424752', fontFamily: 'Inter' }} dx={-10} tickFormatter={(val) => `Rp${val/1000}k`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#ffffff', borderRadius: '8px', border: '1px solid #dfe3e8', fontSize: '12px', fontFamily: 'Inter', boxShadow: '0 4px 24px rgba(24,28,32,0.08)' }}
              itemStyle={{ color: '#00488d', fontWeight: 'bold' }}
              labelStyle={{ color: '#424752' }}
            />
            <Area type="monotone" dataKey="price" stroke="#00488d" strokeWidth={2} fillOpacity={1} fill="url(#colorPrice)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

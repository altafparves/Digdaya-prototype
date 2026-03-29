

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  trend?: string;
  trendDirection?: 'up' | 'down';
  status?: 'neutral' | 'surplus' | 'shortage' | 'warning';
}

export const MetricCard = ({ title, value, unit, trend, trendDirection, status = 'neutral' }: MetricCardProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'surplus': return 'text-secondary';
      case 'shortage': return 'text-error';
      case 'warning': return 'text-tertiary';
      default: return 'text-on-surface-variant';
    }
  };

  return (
    <div className="bg-surface-lowest rounded-md p-5 shadow-[0_4px_24px_rgba(24,28,32,0.06)] border border-outline-variant/15 flex flex-col justify-between h-full">
      <h3 className="text-xs font-bold text-on-surface-variant mb-2 uppercase tracking-wide">{title}</h3>
      <div className="flex items-baseline gap-1 mt-auto">
        <span className="text-3xl font-extrabold font-manrope tracking-tight text-primary">{value}</span>
        {unit && <span className="text-xs font-bold text-on-surface">{unit}</span>}
      </div>
      {trend && (
        <div className={`text-[10px] font-bold mt-2 flex items-center gap-1 ${getStatusColor()}`}>
          <span className="material-symbols-outlined text-[12px]">{trendDirection === 'up' ? 'trending_up' : 'trending_down'}</span>
          {trend}
        </div>
      )}
    </div>
  );
};

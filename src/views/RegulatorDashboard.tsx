import { MetricCard } from '../components/MetricCard';
import { MapWidget } from '../components/MapWidget';
import { TrendChart } from '../components/TrendChart';
import { AlertsList } from '../components/AlertsList';

export const RegulatorDashboard = () => {
  return (
    <div className="flex flex-col gap-5 animate-in fade-in duration-300">
      
      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <MetricCard 
          title="Total Tonase" 
          value="1.4M" 
          unit="Ton" 
        />
        <MetricCard 
          title="Rata-rata Harga Nasional" 
          value="Rp 12,850" 
          trend="0.8% dari minggu lalu" 
          trendDirection="up" 
          status="warning"
        />
        <MetricCard 
          title="Defisit Aktif" 
          value="3" 
          unit="Wilayah" 
          status="shortage"
        />
        <MetricCard 
          title="Cadangan Nasional" 
          value="84" 
          unit="Hari" 
          trend="Stabil"
          status="surplus"
        />
      </div>

      {/* Intentional Asymmetry Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 min-h-[500px]">
        {/* Main Visuals - 8 columns */}
        <div className="lg:col-span-8 flex flex-col gap-5">
            <div className="h-[400px]">
              <MapWidget />
            </div>
            <div>
              <TrendChart />
            </div>
        </div>

        {/* High-density control rail - 4 columns */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          <div className="bg-surface-lowest rounded-md p-5 border border-outline-variant/15 flex flex-col justify-center items-center text-center shadow-[0_4px_24px_rgba(24,28,32,0.06)]">
            <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-4">Surplus Pasokan</h3>
            <div className="w-24 h-24 rounded-full bg-gradient-to-b from-primary to-primary-container flex items-center justify-center text-surface-lowest shadow-lg">
              <span className="text-2xl font-manrope font-extrabold">+18%</span>
            </div>
            <p className="text-[11px] text-on-surface-variant mt-4 font-medium px-4 leading-relaxed">
              Agregat surplus bahan pangan saat ini melampaui proyeksi Q3. Direkomendasikan untuk dialihkan.
            </p>
            <button className="mt-4 bg-primary text-surface-lowest px-4 py-2 rounded-md text-xs font-bold w-full hover:bg-primary-container transition-all shadow-sm">
              Optimize Logistics
            </button>
          </div>
          
          <div className="flex-1">
            <AlertsList />
          </div>
        </div>
      </div>
      
    </div>
  );
};

import { useState } from 'react';
import { MapWidget } from '../components/MapWidget';
import { TrendChart } from '../components/TrendChart';
import { AlertsList } from '../components/AlertsList';

export const RegulatorDashboard = () => {
  const [commodity, setCommodity] = useState('Beras');
  const [timeRange, setTimeRange] = useState('30 Hari');
  const [alertFilter, setAlertFilter] = useState('Semua');

  // Dummy analytics data for the TrendCharts
  const priceData = [
    { name: 'Sen', val: 14200 }, { name: 'Sel', val: 14250 }, { name: 'Rab', val: 14400 },
    { name: 'Kam', val: 14350 }, { name: 'Jum', val: 14500 }, { name: 'Sab', val: 14800 }, { name: 'Min', val: 15200 },
  ];

  const supplyDemandData = [
    { name: 'Sen', gap: 1200 }, { name: 'Sel', gap: 850 }, { name: 'Rab', gap: -200 },
    { name: 'Kam', gap: -1500 }, { name: 'Jum', gap: -2100 }, { name: 'Sab', gap: -1800 }, { name: 'Min', gap: -3200 },
  ];

  const reserveData = [
    { name: 'Sen', vol: 85 }, { name: 'Sel', vol: 84 }, { name: 'Rab', val: 82 },
    { name: 'Kam', vol: 78 }, { name: 'Jum', vol: 75 }, { name: 'Sab', vol: 71 }, { name: 'Min', vol: 65 },
  ];

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">

      {/* Top Filter Navigation Row */}
      <div className="bg-surface-lowest p-3 rounded-lg shadow-sm border border-outline-variant/15 flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 ml-2">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>filter_list</span>
          <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest font-inter">Filter Data</span>
        </div>

        <div className="h-6 w-px bg-outline-variant/20 mx-2 hidden md:block"></div>

        <div className="flex items-center gap-2">
          <label className="text-[11px] font-semibold text-on-surface-variant font-inter hidden sm:block">Komoditas:</label>
          <select value={commodity} onChange={e => setCommodity(e.target.value)} className="bg-surface-low border border-outline-variant/30 text-xs font-bold font-inter rounded-md pl-3 pr-8 py-1.5 focus:ring-1 focus:ring-primary outline-none">
            <option>Beras</option>
            <option>Cabai</option>
            <option>Bawang</option>
            <option>Jagung</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-[11px] font-semibold text-on-surface-variant font-inter hidden sm:block">Rentang Waktu:</label>
          <select value={timeRange} onChange={e => setTimeRange(e.target.value)} className="bg-surface-low border border-outline-variant/30 text-xs font-bold font-inter rounded-md pl-3 pr-8 py-1.5 focus:ring-1 focus:ring-primary outline-none">
            <option>Hari Ini</option>
            <option>7 Hari</option>
            <option>30 Hari</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-[11px] font-semibold text-on-surface-variant font-inter hidden sm:block">Tingkat Peringatan:</label>
          <select value={alertFilter} onChange={e => setAlertFilter(e.target.value)} className="bg-surface-low border border-outline-variant/30 text-xs font-bold font-inter rounded-md pl-3 pr-8 py-1.5 focus:ring-1 focus:ring-error outline-none">
            <option>Semua Peringatan</option>
            <option>Kritis (Merah)</option>
            <option>Waspada (Kuning)</option>
          </select>
        </div>

        <button className="ml-auto bg-primary hover:bg-primary-container text-surface-lowest transition-colors px-4 py-1.5 rounded-md text-xs font-bold font-inter flex items-center gap-2 shadow-sm">
          <span className="material-symbols-outlined text-[14px]">refresh</span>
          Sinkronisasi Otomatis
        </button>
      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[600px]">

        {/* Central Map - 8 Columns */}
        <div className="lg:col-span-8 h-[600px] flex flex-col relative group">
          <div className="absolute top-4 left-4 z-10 bg-surface-lowest/90 backdrop-blur-md px-4 py-2 border border-outline-variant/20 rounded-lg shadow-sm">
            <h2 className="text-sm font-extrabold text-on-surface font-manrope">Peta Supply-Demand Nasional</h2>
            <p className="text-[10px] text-on-surface-variant font-medium mt-0.5 flex items-center gap-1.5 font-inter">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span> Realtime Intelligence mode
            </p>
          </div>
          <MapWidget />
        </div>

        {/* Right Intelligence Panel - 4 Columns */}
        <div className="lg:col-span-4 flex flex-col h-[600px]">
          <AlertsList />
        </div>

      </div>

      {/* Bottom Trend Analytics Row */}
      <div className="mb-6">
        <h3 className="text-sm font-extrabold text-on-surface font-manrope mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-xl">analytics</span>
          Analitik Tren Nasional
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TrendChart
            title="Tren Harga Rata-Rata"
            subtitle="Pergerakan harga komoditas (7 Hari Terakhir)"
            data={priceData}
            dataKey="val"
            color="#3b82f6"
            valueFormatter={(val) => `Rp ${(val / 1000).toFixed(1)}k`}
          />
          <TrendChart
            title="Surplus/Defisit (Delta)"
            subtitle="Kesenjangan Supply-Demand Nasional"
            data={supplyDemandData}
            dataKey="gap"
            color="#ef4444"
            domain={['dataMin - 1000', 'dataMax + 1000']}
            valueFormatter={(val) => `${val > 0 ? '+' : ''}${(val / 1000).toFixed(1)}k T`}
          />
          <TrendChart
            title="Tren Cadangan Pangan"
            subtitle="Estimasi ketahanan stok (dalam Hari)"
            data={reserveData}
            dataKey="vol"
            color="#10b981"
            domain={[0, 100]}
            valueFormatter={(val) => `${val} Hari`}
          />
        </div>
      </div>

    </div>
  );
};

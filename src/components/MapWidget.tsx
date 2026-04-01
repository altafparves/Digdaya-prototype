import { useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Polyline, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const defaultCenter: [number, number] = [-2.5489, 118.0149]; // Center of Indonesia

// Mock Province Data
const PROVINCES = [
  { id: 'DKI', name: 'DKI Jakarta', lat: -6.2088, lng: 106.8456, status: 'deficit', supply: 12000, demand: 25000, price: 15400, risk: 'High', trend: '+12.5%' },
  { id: 'JBR', name: 'Jawa Barat', lat: -6.9175, lng: 107.6191, status: 'surplus', supply: 85000, demand: 42000, price: 12100, risk: 'Low', trend: '-2.1%' },
  { id: 'JTM', name: 'Jawa Timur', lat: -7.2504, lng: 112.7688, status: 'surplus', supply: 98000, demand: 50000, price: 11800, risk: 'Low', trend: '-1.5%' },
  { id: 'BTN', name: 'Banten', lat: -6.4058, lng: 106.0640, status: 'warning', supply: 22000, demand: 24000, price: 13500, risk: 'Medium', trend: '+4.2%' },
  { id: 'JTG', name: 'Jawa Tengah', lat: -7.1504, lng: 110.1403, status: 'surplus', supply: 76000, demand: 40000, price: 12300, risk: 'Low', trend: '-0.5%' },
  { id: 'NTT', name: 'Nusa Tenggara Timur', lat: -8.6574, lng: 121.0794, status: 'deficit', supply: 5000, demand: 18000, price: 16200, risk: 'High', trend: '+15.2%' },
];

const FLOWS = [
  { from: [-6.9175, 107.6191], to: [-6.2088, 106.8456] }, // Jabar to DKI
  { from: [-7.1504, 110.1403], to: [-6.4058, 106.0640] }, // Jateng to Banten
  { from: [-7.2504, 112.7688], to: [-8.6574, 121.0794] }, // Jatim to NTT
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'surplus': return '#059669'; // Emerald 600
    case 'deficit': return '#DC2626'; // Red 600
    case 'warning': return '#D97706'; // Amber 600
    default: return '#6B7280';
  }
};

export const MapWidget = () => {
  const [selectedProvince, setSelectedProvince] = useState<typeof PROVINCES[0] | null>(null);

  return (
    <div className="relative w-full h-full min-h-[400px] rounded-[16px] overflow-hidden shadow-[0_4px_24px_rgba(24,28,32,0.06)] border border-outline-variant/20 bg-[#1e293b]">
      <MapContainer center={defaultCenter} zoom={5} scrollWheelZoom={false} className="w-full h-full absolute inset-0 z-0">
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">Carto</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" // Dark theme to look like intelligence dashboard
        />
        
        {/* Draw Simulated Distribution Flows */}
        {FLOWS.map((flow, idx) => (
          <Polyline 
            key={idx} 
            positions={[flow.from as [number, number], flow.to as [number, number]]} 
            color="#3b82f6" 
            weight={3} 
            dashArray="10, 10" 
            className="animate-pulse" 
            opacity={0.6}
          />
        ))}

        {/* Draw Province Heat Markers */}
        {PROVINCES.map((prov) => (
          <CircleMarker
            key={prov.id}
            center={[prov.lat, prov.lng]}
            radius={prov.status === 'deficit' ? 14 : prov.status === 'surplus' ? 20 : 12}
            pathOptions={{
              color: getStatusColor(prov.status),
              fillColor: getStatusColor(prov.status),
              fillOpacity: 0.6,
              weight: 2
            }}
            eventHandlers={{
              click: () => setSelectedProvince(prov),
            }}
          >
            <Tooltip className="font-inter custom-leaflet-tooltip font-bold text-xs" direction="top">{prov.name}</Tooltip>
          </CircleMarker>
        ))}
      </MapContainer>

      {/* Floating Intelligence Panel */}
      {selectedProvince && (
        <div className="absolute top-4 right-4 z-[400] w-72 bg-surface-lowest/95 backdrop-blur-xl p-5 rounded-xl border border-outline-variant/30 shadow-2xl animate-in slide-in-from-right-4 duration-200">
          <div className="flex justify-between items-start mb-4 border-b border-outline-variant/15 pb-3">
            <div>
              <h3 className="text-sm font-extrabold text-on-surface font-manrope">{selectedProvince.name}</h3>
              <p className="text-[10px] uppercase font-bold text-on-surface-variant flex items-center gap-1 mt-1 font-inter">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: getStatusColor(selectedProvince.status) }}></span>
                {selectedProvince.status} Status
              </p>
            </div>
            <button onClick={() => setSelectedProvince(null)} className="p-1 hover:bg-surface-low rounded text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
          
          <div className="space-y-3 font-inter">
            <div className="flex justify-between items-center">
              <span className="text-[11px] text-on-surface-variant font-medium">Supply / Demand</span>
              <span className="text-xs font-bold text-on-surface">
                {selectedProvince.supply.toLocaleString()} / {selectedProvince.demand.toLocaleString()} Ton
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-[11px] text-on-surface-variant font-medium">Gap (Delta)</span>
              <span className={`text-xs font-extrabold ${selectedProvince.supply - selectedProvince.demand > 0 ? 'text-secondary' : 'text-error'}`}>
                {selectedProvince.supply - selectedProvince.demand > 0 ? '+' : ''}
                {(selectedProvince.supply - selectedProvince.demand).toLocaleString()} Ton
              </span>
            </div>

             <div className="flex justify-between items-center bg-surface-low p-2 rounded border border-outline-variant/20">
              <span className="text-[11px] text-on-surface-variant font-medium">Avg Price</span>
              <div className="text-right">
                <div className="text-xs font-bold text-primary">Rp {selectedProvince.price.toLocaleString('id-ID')} /kg</div>
                <div className={`text-[9px] font-bold ${selectedProvince.trend.startsWith('+') ? 'text-error' : 'text-secondary'}`}>
                  {selectedProvince.trend} (7 hari)
                </div>
              </div>
            </div>

             <div className="flex justify-between items-center pt-2">
              <span className="text-[11px] text-on-surface-variant font-medium">Alert Level</span>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm ${selectedProvince.risk === 'High' ? 'bg-error/10 text-error' : selectedProvince.risk === 'Medium' ? 'bg-tertiary/10 text-tertiary' : 'bg-secondary/10 text-secondary'}`}>
                {selectedProvince.risk} Risk
              </span>
            </div>
          </div>
          
          {(selectedProvince.status === 'deficit' || selectedProvince.status === 'warning') && (
             <button className="w-full mt-5 bg-primary hover:bg-primary-container text-surface-lowest py-2 rounded-md text-xs font-bold font-inter transition-colors">
              Analisis Distribusi
             </button>
          )}
        </div>
      )}

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 z-[400] bg-surface-lowest/90 backdrop-blur-md p-3 rounded-lg border border-outline-variant/20 shadow-lg">
        <h4 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Peta Kerapatan</h4>
        <div className="space-y-1.5 text-[11px] font-medium font-inter text-on-surface">
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#059669] opacity-80"></span> Surplus</div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#D97706] opacity-80"></span> Warning</div>
          <div className="flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#DC2626] opacity-80"></span> Defisit</div>
        </div>
      </div>
    </div>
  );
};

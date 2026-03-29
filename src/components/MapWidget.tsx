
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in React Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const defaultCenter: [number, number] = [-6.2088, 106.8456]; // Jakarta

export const MapWidget = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] rounded-md overflow-hidden shadow-[0_4px_24px_rgba(24,28,32,0.06)]">
      <MapContainer center={defaultCenter} zoom={7} scrollWheelZoom={false} className="w-full h-full absolute inset-0 z-0">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        
        <Marker position={[-6.2088, 106.8456]}>
          <Popup>
            <div className="font-inter">
              <h4 className="font-bold text-primary font-manrope">Jakarta Hub</h4>
              <p className="text-xs text-error font-bold mt-1">Shortage Alert</p>
            </div>
          </Popup>
        </Marker>
        <Marker position={[-6.9175, 107.6191]}>
          <Popup>
            <div className="font-inter">
              <h4 className="font-bold text-primary font-manrope">Bandung Hub</h4>
              <p className="text-xs text-secondary font-bold mt-1">Surplus Status</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Glassmorphic Overlay control pod as defined in design system */}
      <div className="absolute top-4 right-4 z-[400] bg-surface-lowest/80 backdrop-blur-md p-4 rounded-md border border-outline-variant/20 shadow-[0_4px_24px_rgba(24,28,32,0.08)]">
        <h3 className="text-xs font-bold text-primary uppercase tracking-tighter mb-2">Regional Status: West Java</h3>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center gap-4">
            <span className="text-[10px] text-on-surface-variant font-medium">Supply vs Demand</span>
            <span className="text-xs font-bold text-tertiary">-12.4k Tons</span>
          </div>
          <div className="flex justify-between items-center gap-4">
            <span className="text-[10px] text-on-surface-variant font-medium">Avg Price</span>
            <span className="text-xs font-bold text-on-surface">Rp 14,200/kg</span>
          </div>
        </div>
      </div>
    </div>
  );
};

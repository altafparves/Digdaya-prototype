import { Link, useLocation } from 'react-router-dom';
import { useRole } from '../context/RoleContext';

export const Sidebar = () => {
  const { role } = useRole();
  const location = useLocation();

  const getLinks = () => {
    switch (role) {
      case 'regulator':
        return [
          { icon: 'dashboard', label: 'Dashboard Nasional', path: '/regulator' },
          { icon: 'map', label: 'Peta Supply-Demand', path: '/regulator-supply' },
          { icon: 'trending_up', label: 'Forecast Harga', path: '/trends' },
          { icon: 'warning', label: 'Peringatan Inflasi', path: '/inflation' },
          { icon: 'inventory_2', label: 'Cadangan Pangan', path: '/reserve' },
          { icon: 'local_shipping', label: 'Distribusi Antarwilayah', path: '/distribution' },
          { icon: 'description', label: 'Laporan', path: '/reports' },
        ];
      case 'farmer':
        return [
          { icon: 'dashboard', label: 'Dashboard', path: '/farmer' },
          { icon: 'inventory_2', label: 'Pasokan Saya', path: '/my-supply' },
          { icon: 'insights', label: 'Insight Harga', path: '/insights' },
          { icon: 'handshake', label: 'Permintaan Buyer', path: '/buyer-requests' },
          { icon: 'history', label: 'Riwayat Distribusi', path: '/history' },
          { icon: 'description', label: 'Laporan', path: '/reports' },
        ];
      case 'buyer':
        return [
          { icon: 'dashboard', label: 'Dashboard', path: '/buyer' },
          { icon: 'shopping_cart', label: 'Pengadaan', path: '/procurement' },
          { icon: 'handshake', label: 'Jaringan Supplier', path: '/suppliers' },
          { icon: 'trending_up', label: 'Forecast Harga', path: '/trends' },
          { icon: 'history', label: 'Riwayat Order', path: '/history' },
          { icon: 'description', label: 'Laporan', path: '/reports' },
        ];
    }
  };

  const links = getLinks();
  const roleDisplay = role === 'regulator' ? 'Regulator Access' : role === 'farmer' ? 'Producer Access' : 'Distributor Access';

  return (
    <aside className="hidden lg:flex flex-col h-[calc(100vh-65px)] w-64 sticky top-[65px] bg-surface-lowest border-r border-outline-variant/15 py-6 shrink-0 transition-colors duration-300 shadow-[2px_0_12px_rgba(24,28,32,0.02)]">
      <div className="px-6 mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-surface-low border border-outline-variant/30 flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              {role === 'regulator' ? 'admin_panel_settings' : role === 'farmer' ? 'agriculture' : 'storefront'}
            </span>
          </div>
          <div>
            <h3 className="font-manrope font-extrabold text-primary text-sm tracking-tight leading-tight">Intelligence Hub</h3>
            <p className="font-inter text-[10px] font-bold text-on-surface-variant tracking-wide uppercase mt-0.5">{roleDisplay}</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1.5 px-3">
        {links.map((link, idx) => {
          const isActive = location.pathname === link.path || (link.path === `/${role}` && location.pathname === '/');
          return (
            <Link 
              key={idx} 
              to={link.path}
              className={`flex items-center gap-3 mx-1 px-3 py-3 rounded-lg transition-all duration-200 group
                ${isActive 
                  ? 'bg-surface-low border border-primary/20 text-primary shadow-sm' 
                  : 'text-on-surface-variant hover:bg-surface-high hover:text-on-surface border border-transparent'}
              `}
            >
              <span className={`material-symbols-outlined text-lg transition-transform group-hover:scale-110 ${isActive ? 'text-primary' : 'text-on-surface-variant opacity-80'}`} style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}>
                {link.icon}
              </span>
              <span className="font-inter text-[13px] font-bold tracking-tight">{link.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-4 mt-auto space-y-1.5 pt-6 border-t border-outline-variant/15 mx-4">
        <Link to="/help" className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-high hover:text-on-surface px-3 py-2 rounded-lg transition-all group">
          <span className="material-symbols-outlined text-[18px] opacity-80 group-hover:opacity-100">help</span>
          <span className="font-inter text-xs font-bold">Help Center</span>
        </Link>
        <Link to="/settings" className="flex items-center gap-3 text-on-surface-variant hover:bg-surface-high hover:text-on-surface px-3 py-2 rounded-lg transition-all group">
          <span className="material-symbols-outlined text-[18px] opacity-80 group-hover:opacity-100">settings</span>
          <span className="font-inter text-xs font-bold">Settings</span>
        </Link>
      </div>
    </aside>
  );
};

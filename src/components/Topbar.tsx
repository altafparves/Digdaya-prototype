import { Link } from 'react-router-dom';
import { useRole, type RoleType } from '../context/RoleContext';

export const Topbar = () => {
  const { role, setRole } = useRole();
  return (
    <header className="flex justify-between items-center w-full px-6 py-3 bg-surface-lowest sticky top-0 z-50 shadow-[0_1px_4px_rgba(24,28,32,0.06)] border-b border-outline-variant/15">
      <div className="flex items-center gap-8">
        <span className="text-xl font-extrabold text-primary tracking-tight font-manrope">Food Supply Intelligence</span>
        <nav className="hidden xl:flex items-center gap-6 font-manrope text-sm font-semibold tracking-tight">
          <Link to="/" className="text-on-surface-variant pb-2 hover:text-primary transition-colors">Global View</Link>
          <Link to="/" className="text-primary border-b-2 border-primary pb-2">Commodities</Link>
          <Link to="/" className="text-on-surface-variant pb-2 hover:text-primary transition-colors">Forecasting</Link>
          <Link to="/" className="text-on-surface-variant pb-2 hover:text-primary transition-colors">Logistics</Link>
        </nav>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Role Switcher */}
        <div className="flex items-center border border-outline-variant/30 rounded-lg p-1 bg-surface-low shadow-sm transition-all focus-within:ring-2 focus-within:ring-primary/20">
          <span className="text-[10px] font-bold uppercase tracking-widest font-inter text-on-surface-variant px-3 border-r border-outline-variant/30 hidden md:block">Active Role</span>
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value as RoleType)}
            className="bg-transparent border-none text-sm font-inter font-bold text-primary pl-3 pr-8 py-1 focus:ring-0 cursor-pointer outline-none"
          >
            <option value="regulator">Regulator</option>
            <option value="farmer">Farmer / Producer</option>
            <option value="buyer">Buyer / Distributor</option>
          </select>
        </div>

        {/* Action Icons */}
        <button className="p-2 rounded-full hover:bg-surface-low transition-colors text-on-surface-variant hidden md:block ml-2 border border-transparent hover:border-outline-variant/20">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="p-2 rounded-full hover:bg-surface-low transition-colors text-on-surface-variant border border-transparent hover:border-outline-variant/20">
          <span className="material-symbols-outlined">account_circle</span>
        </button>
      </div>
    </header>
  );
};

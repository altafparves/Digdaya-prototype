

export const FarmerDashboard = () => {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-300">
      
      {/* Registration Form Section */}
      <section className="bg-surface-lowest p-8 rounded-xl border border-outline-variant/15 shadow-[0_4px_24px_rgba(24,28,32,0.04)]">
        <div className="flex items-center gap-2 mb-8">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
          <h2 className="font-manrope text-xl font-bold">Register New Supply</h2>
        </div>
        
        <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-2">
            <label className="block text-xs font-bold font-inter text-on-surface-variant uppercase tracking-widest">Commodity</label>
            <select className="w-full bg-surface-low border border-outline-variant/30 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary text-sm font-medium transition-all focus:outline-none">
              <option>Hard Red Winter Wheat</option>
              <option>Yellow Corn No. 2</option>
              <option>Soybeans (Organic)</option>
              <option>High-Protein Barley</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label className="block text-xs font-bold font-inter text-on-surface-variant uppercase tracking-widest">Quantity (Tons)</label>
            <input className="w-full bg-surface-low border border-outline-variant/30 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary text-sm font-medium transition-all focus:outline-none" placeholder="0.00" type="number" />
          </div>
          
          <div className="space-y-2">
            <label className="block text-xs font-bold font-inter text-on-surface-variant uppercase tracking-widest">Location</label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">location_on</span>
              <input className="w-full bg-surface-low border border-outline-variant/30 rounded-md pl-10 pr-4 py-3 focus:ring-2 focus:ring-primary text-sm font-medium transition-all focus:outline-none" placeholder="Warehouse/City" type="text" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="block text-xs font-bold font-inter text-on-surface-variant uppercase tracking-widest">Harvest Date</label>
            <input className="w-full bg-surface-low border border-outline-variant/30 rounded-md px-4 py-3 focus:ring-2 focus:ring-primary text-sm font-medium transition-all focus:outline-none" type="date" />
          </div>
        </form>
        
        <div className="mt-8 flex justify-end">
          <button type="button" className="px-10 py-3 bg-primary text-surface-lowest rounded-md font-manrope font-bold text-sm tracking-wide shadow-md hover:bg-primary-container transition-all active:scale-95">
            Submit Inventory
          </button>
        </div>
      </section>

      {/* Insight Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Recommended Price */}
        <div className="bg-surface-lowest p-6 rounded-xl border border-outline-variant/15 shadow-[0_4px_24px_rgba(24,28,32,0.04)] flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-secondary uppercase tracking-tighter">Recommended Price</span>
              <span className="material-symbols-outlined text-secondary opacity-40">trending_up</span>
            </div>
            <div className="font-manrope text-3xl font-extrabold text-primary">$342.50</div>
            <div className="font-inter text-[10px] text-on-surface-variant mt-1 font-bold">USD per Metric Ton</div>
          </div>
          <div className="mt-6 py-2 px-3 bg-surface-low rounded-lg inline-flex items-center gap-2 w-fit border border-secondary/10">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span className="text-[10px] font-bold text-on-surface tracking-wide">Optimized for rapid sale</span>
          </div>
        </div>

        {/* High Demand Regions */}
        <div className="bg-surface-lowest p-6 rounded-xl border border-outline-variant/15 shadow-[0_4px_24px_rgba(24,28,32,0.04)] flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-secondary uppercase tracking-tighter">High Demand Regions</span>
              <span className="material-symbols-outlined text-secondary opacity-40">map</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-on-surface">Pacific Northwest</span>
                <span className="text-[10px] px-2 py-0.5 bg-secondary text-surface-lowest font-bold rounded-full">VH Demand</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-on-surface">Great Lakes Port</span>
                <span className="text-[10px] px-2 py-0.5 bg-surface-highest text-on-surface-variant font-bold rounded-full">H Demand</span>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-[0.03] scale-150 rotate-12 text-primary pointer-events-none">
            <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
          </div>
        </div>

        {/* Forecast Range */}
        <div className="bg-surface-lowest p-6 rounded-xl border border-outline-variant/15 shadow-[0_4px_24px_rgba(24,28,32,0.04)] flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-secondary uppercase tracking-tighter">Forecast Range</span>
              <span className="material-symbols-outlined text-secondary opacity-40">query_stats</span>
            </div>
            <div className="font-manrope text-2xl font-bold flex items-baseline gap-2">
              <span className="text-on-surface-variant text-lg font-medium">$320</span>
              <span className="text-primary">—</span>
              <span className="text-primary font-extrabold">$385</span>
            </div>
            <div className="w-full bg-surface-high h-1.5 rounded-full mt-4 overflow-hidden bg-surface-highest">
              <div className="bg-primary h-full w-[45%] rounded-full"></div>
            </div>
          </div>
          <p className="text-[10px] text-on-surface-variant mt-6 leading-relaxed font-medium">
            Projected volatility remains low for the next 14 days based on regional supply surplus.
          </p>
        </div>

      </section>

      {/* Recommended Buyers */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-manrope text-xl font-bold flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>handshake</span>
            Recommended Buyers
          </h3>
          <button className="text-xs font-bold text-primary hover:underline transition-all">View All Offers</button>
        </div>
        
        <div className="space-y-4">
          {[
            { name: "Cargill Grain Processing", loc: "Minneapolis, MN", price: "$348.00", icon: "factory" },
            { name: "Global Ag-Logistics Co.", loc: "Chicago Hub", price: "$345.25", icon: "warehouse" },
            { name: "Regional Cooperative A-4", loc: "Local Pickup", price: "$342.00", icon: "store" }
          ].map((buyer, idx) => (
            <div key={idx} className="bg-surface-lowest p-4 md:p-5 rounded-xl border border-outline-variant/15 hover:border-outline-variant/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-low rounded-lg flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-surface-lowest transition-colors">
                  <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{buyer.icon}</span>
                </div>
                <div>
                  <h4 className="font-manrope font-bold text-sm text-on-surface">{buyer.name}</h4>
                  <p className="text-[10px] font-medium text-on-surface-variant flex items-center gap-1 mt-0.5">
                    <span className="material-symbols-outlined text-[14px]">location_on</span> {buyer.loc}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between md:justify-end gap-6 md:gap-8 border-t md:border-t-0 border-outline-variant/15 pt-4 md:pt-0">
                <div className="text-left md:text-right">
                  <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Offer Price</div>
                  <div className="font-manrope font-extrabold text-primary text-lg">{buyer.price}</div>
                </div>
                <button className="px-6 py-2.5 bg-primary text-surface-lowest rounded-lg font-manrope font-bold text-xs shadow-sm hover:shadow-md transition-all active:scale-95">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

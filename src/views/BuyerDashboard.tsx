

export const BuyerDashboard = () => {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-300">
      
      {/* Hero Sourcing Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Input Panel */}
        <div className="lg:col-span-4 bg-surface-lowest p-6 rounded-xl shadow-[0_4px_24px_rgba(24,28,32,0.04)] border border-outline-variant/15">
          <h2 className="text-on-surface text-lg font-manrope font-bold mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>track_changes</span>
            Procurement Request
          </h2>
          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-semibold font-inter text-on-surface-variant uppercase tracking-wider">Commodity Needed</label>
              <select className="w-full bg-surface-low border border-outline-variant/30 rounded-lg py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all">
                <option>Hard Red Winter Wheat</option>
                <option>Yellow Corn No. 2</option>
                <option>Organic Soybeans</option>
                <option>Long Grain Rice</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold font-inter text-on-surface-variant uppercase tracking-wider">Quantity (Metric Tons)</label>
              <div className="relative">
                <input className="w-full bg-surface-low border border-outline-variant/30 rounded-lg py-3 px-4 text-sm font-medium focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all" type="number" defaultValue="1200" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold font-inter text-outline">MT</span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold font-inter text-on-surface-variant uppercase tracking-wider">Target Location</label>
              <div className="flex items-center bg-surface-low border border-outline-variant/30 rounded-lg px-4 focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                <span className="material-symbols-outlined text-outline text-lg">location_on</span>
                <input className="w-full bg-transparent border-none py-3 px-2 text-sm font-medium focus:outline-none" placeholder="Port of Rotterdam, NL" type="text" />
              </div>
            </div>
            <button type="button" className="w-full mt-2 bg-gradient-to-r from-primary to-primary-container text-surface-lowest py-4 rounded-lg font-bold font-manrope shadow-lg shadow-primary/20 hover:scale-[0.98] transition-transform flex items-center justify-center gap-2">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
              Analyze Supply Network
            </button>
          </form>
        </div>
        
        {/* Procurement Price & Insights */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
            
            {/* Metric Card 1 */}
            <div className="bg-surface-high p-8 rounded-xl flex flex-col justify-between border border-outline-variant/15">
              <div>
                <span className="text-xs font-bold text-on-secondary-container font-inter uppercase tracking-widest">Est. Procurement Price</span>
                <div className="text-4xl font-manrope font-extrabold text-primary mt-2">€342,800.00</div>
                <div className="flex items-center mt-2 text-tertiary font-semibold text-sm">
                  <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                  +4.2% from last quarter
                </div>
              </div>
              <div className="mt-8">
                <p className="text-xs font-inter text-on-surface-variant leading-relaxed font-medium">Price calculation based on current market trends, logistics from Eastern Europe, and seasonal demand spikes.</p>
              </div>
            </div>
            
            {/* Metric Card 2 */}
            <div className="relative overflow-hidden bg-primary text-surface-lowest p-8 rounded-xl flex flex-col justify-between shadow-xl">
              <div className="absolute -right-10 -bottom-10 opacity-10">
                <span className="material-symbols-outlined text-[160px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              </div>
              <div>
                <span className="text-xs font-bold font-inter opacity-80 uppercase tracking-widest">Supply Confidence Index</span>
                <div className="text-4xl font-manrope font-extrabold mt-2">94%</div>
                <div className="flex items-center mt-2 text-secondary-fixed-dim font-semibold font-inter text-sm">
                  <span className="material-symbols-outlined text-sm mr-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  High Liquidity Verified
                </div>
              </div>
              <div className="mt-8 z-10">
                <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-bold font-inter backdrop-blur-md transition-colors">
                  View Risk Breakdown
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Supply List & Recommended Suppliers */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl font-manrope font-extrabold text-on-surface tracking-tight">Supply Intelligence Feed</h2>
          <div className="flex gap-2">
            <button className="p-2 bg-surface-lowest hover:bg-surface-low border border-outline-variant/20 rounded-md transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined text-xl">filter_list</span>
            </button>
            <button className="p-2 bg-surface-lowest hover:bg-surface-low border border-outline-variant/20 rounded-md transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined text-xl">download</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Supply List Table */}
          <div className="lg:col-span-8 bg-surface-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/15">
            <div className="p-4 bg-surface-high flex justify-between items-center border-b border-outline-variant/15">
              <span className="text-xs font-bold uppercase font-inter text-on-surface-variant tracking-widest">Regional Liquidity Pool</span>
              <span className="text-xs font-medium font-inter text-on-surface-variant">Last updated: 14:02 GMT</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-on-surface-variant font-inter border-b border-outline-variant/15 bg-surface-low/50">
                    <th className="px-6 py-4 font-bold text-xs uppercase tracking-wide">Region / Hub</th>
                    <th className="px-6 py-4 font-bold text-xs uppercase tracking-wide text-right">Unit Price</th>
                    <th className="px-6 py-4 font-bold text-xs uppercase tracking-wide text-right">Available Vol</th>
                    <th className="px-6 py-4 font-bold text-xs uppercase tracking-wide">Status</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/10">
                  
                  {/* Row 1 */}
                  <tr className="hover:bg-surface-bright transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-surface-low border border-outline-variant/20 flex items-center justify-center">
                          <span className="material-symbols-outlined text-secondary text-lg">lan</span>
                        </div>
                        <div>
                          <div className="text-sm font-bold font-inter text-on-surface">Black Sea Region</div>
                          <div className="text-[10px] font-inter font-medium text-on-surface-variant">Port of Odesa Terminal</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm font-inter font-medium text-right">€285.50 / MT</td>
                    <td className="px-6 py-5 text-sm font-inter font-bold text-right">4,500 MT</td>
                    <td className="px-6 py-5">
                      <span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-inter text-[10px] font-bold uppercase tracking-wide border border-secondary-container/50">Surplus</span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined">chevron_right</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-surface-bright transition-colors group">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-surface-low border border-outline-variant/20 flex items-center justify-center">
                          <span className="material-symbols-outlined text-secondary text-lg">lan</span>
                        </div>
                        <div>
                          <div className="text-sm font-bold font-inter text-on-surface">São Paulo, BR</div>
                          <div className="text-[10px] font-inter font-medium text-on-surface-variant">Santos Export Terminal</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm font-inter font-medium text-right">€305.80 / MT</td>
                    <td className="px-6 py-5 text-sm font-inter font-bold text-right">800 MT</td>
                    <td className="px-6 py-5">
                      <span className="px-2.5 py-1 rounded-full bg-[#ffdad6] text-[#93000a] font-inter text-[10px] font-bold uppercase tracking-wide border border-[#ffdad6]/50">Shortage</span>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="material-symbols-outlined">chevron_right</span>
                      </button>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>

          {/* Recommended Suppliers List */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-surface-low p-6 rounded-xl border border-outline-variant/15 shadow-[0_4px_24px_rgba(24,28,32,0.02)]">
              <h3 className="text-sm font-inter font-extrabold uppercase tracking-widest text-on-surface-variant mb-6">Top Ranked Suppliers</h3>
              
              <div className="space-y-4">
                
                {/* Supplier Card */}
                <div className="bg-surface-lowest p-5 rounded-lg border border-primary/20 shadow-sm relative group overflow-hidden">
                  <div className="absolute top-0 right-0 py-1 px-2.5 bg-primary/10 border-b border-l border-primary/20 rounded-bl-lg">
                    <span className="text-[9px] font-inter font-extrabold tracking-widest uppercase text-primary">#1 Match</span>
                  </div>
                  <div className="flex flex-col gap-4 mt-1">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-surface-high flex items-center justify-center">
                         <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>agriculture</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-manrope font-bold text-on-surface">Nordic Grain Alliance</h4>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span className="material-symbols-outlined text-[14px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="text-[10px] font-inter font-bold text-on-surface-variant">4.9 · 152 Contracts</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                       <button className="flex-1 py-1.5 bg-primary text-surface-lowest text-[11px] font-inter font-bold rounded-md hover:opacity-90 transition-opacity shadow-sm">View</button>
                       <button className="flex-1 py-1.5 bg-surface-lowest border border-outline-variant text-on-surface text-[11px] font-inter font-bold rounded-md hover:bg-surface-low transition-colors shadow-sm">Contact</button>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
};

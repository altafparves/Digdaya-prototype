
export const FarmerDashboard = () => {
  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-300">
      
      <div>
        <h1 className="text-2xl font-bold text-on-surface font-manrope tracking-tight">Dasbor Produsen</h1>
        <p className="text-sm text-on-surface-variant mt-1 font-inter">Kelola pasokan Anda, periksa harga pasar, dan hubungi pembeli potensial.</p>
      </div>

      {/* Registration Form Section */}
      <section className="bg-surface-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/15 flex flex-col h-full relative overflow-hidden">
        <h2 className="text-lg font-bold text-on-surface mb-6 font-manrope flex items-center gap-2 relative z-10">
          <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>add_box</span>
          Daftarkan Pasokan Baru
        </h2>
        
        <form className="space-y-4 flex-1 flex flex-col relative z-10">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold font-inter text-on-surface-variant">Jenis Komoditas</label>
            <select className="w-full bg-surface-low border border-outline-variant/30 rounded-lg py-2.5 px-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none">
              <option>Beras - Long Grain</option>
              <option>Gandum - Musim Dingin</option>
              <option>Kacang Kedelai</option>
            </select>
          </div>
          
          <div className="space-y-1.5">
            <label className="text-xs font-semibold font-inter text-on-surface-variant">Kuantitas Tersedia (Metrik Ton)</label>
            <input type="number" placeholder="Contoh: 50" className="w-full bg-surface-low border border-outline-variant/30 rounded-lg py-2.5 px-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none" />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold font-inter text-on-surface-variant">Lokasi Panen</label>
            <input type="text" placeholder="Pilih Fasilitas / Silo" className="w-full bg-surface-low border border-outline-variant/30 rounded-lg py-2.5 px-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none" />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold font-inter text-on-surface-variant">Perkiraan Tanggal Tersedia</label>
            <input type="date" className="w-full bg-surface-low border border-outline-variant/30 rounded-lg py-2.5 px-3 text-sm focus:ring-2 focus:ring-primary/20 outline-none text-on-surface-variant" />
          </div>

          <div className="pt-4 mt-auto">
            <button type="button" className="w-full bg-primary text-surface-lowest py-3.5 rounded-lg font-bold font-manrope shadow-md hover:bg-primary/90 transition-colors flex justify-center items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">publish</span>
              Publish to Market
            </button>
          </div>
        </form>
      </section>

      {/* Insight Bento Grid */}
      <div className="lg:col-span-8">
        <h2 className="text-lg font-bold text-on-surface mb-4 font-manrope">Intelijen Pasar</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Bento 1: Recommended Price */}
          <div className="bg-surface-lowest p-6 rounded-2xl border border-secondary/20 shadow-[0_2px_12px_rgba(24,28,32,0.03)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-secondary/10 transition-colors"></div>
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-secondary uppercase tracking-tighter">Rekomendasi Harga</span>
              <span className="material-symbols-outlined text-secondary opacity-40">trending_up</span>
            </div>
            <div className="font-manrope text-3xl font-extrabold text-primary">Rp 14.500</div>
            <div className="font-inter text-[10px] text-on-surface-variant mt-1 font-bold">IDR per Kg</div>
            <div className="mt-6 py-2 px-3 bg-surface-low rounded-lg inline-flex items-center gap-2 w-fit border border-secondary/10">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="text-[10px] font-bold text-on-surface tracking-wide">Dioptimalkan untuk penjualan cepat</span>
            </div>
          </div>

          {/* High Demand Regions */}
          <div className="bg-surface-lowest p-6 rounded-2xl border border-outline-variant/15 shadow-[0_2px_12px_rgba(24,28,32,0.03)] flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Wilayah Permintaan Tinggi</span>
              <span className="material-symbols-outlined text-on-surface-variant opacity-40">map</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-on-surface">Jawa Tengah</span>
                <span className="text-[10px] px-2 py-0.5 bg-secondary text-surface-lowest font-bold rounded-full">Permintaan Sangat Tinggi</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-on-surface">Jawa Barat</span>
                <span className="text-[10px] px-2 py-0.5 bg-surface-highest text-on-surface-variant font-bold rounded-full">Permintaan Tinggi</span>
              </div>
            </div>
            <div className="mt-auto pt-4">
               <button className="text-xs font-bold text-primary hover:underline font-inter">View Logistics Quotes &rarr;</button>
            </div>
          </div>

          {/* Forecast Range */}
          <div className="md:col-span-2 bg-surface-lowest p-6 rounded-2xl border border-outline-variant/15 shadow-[0_2px_12px_rgba(24,28,32,0.03)] flex flex-col justify-between">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-on-surface-variant uppercase tracking-tighter">Prakiraan Harga (30 Hari)</span>
              <span className="material-symbols-outlined text-secondary opacity-40">query_stats</span>
            </div>
            <div className="font-manrope text-2xl font-bold flex items-baseline gap-2">
              <span className="text-on-surface-variant text-lg font-medium">Rp 13.500</span>
              <span className="text-primary">—</span>
              <span className="text-primary font-extrabold">Rp 15.200</span>
            </div>
            <div className="w-full bg-surface-high h-1.5 rounded-full mt-4 overflow-hidden bg-surface-highest">
              <div className="bg-primary h-full w-[45%] rounded-full"></div>
            </div>
            <p className="text-[10px] text-on-surface-variant mt-6 leading-relaxed font-medium">
              Volatilitas yang diproyeksikan tetap rendah selama 14 hari ke depan berdasarkan surplus pasokan regional.
            </p>
          </div>
        </div>
      </div>

      {/* Recommended Buyers */}
      <section className="mt-6 pt-6 border-t border-outline-variant/15">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-xl font-bold text-on-surface font-manrope">Rekomendasi Pembeli</h2>
            <p className="text-xs text-on-surface-variant mt-1 font-inter">Pencocokan berdasarkan inventaris beras long grain Anda.</p>
          </div>
          <button className="text-sm font-bold text-primary hover:underline font-inter">View All</button>
        </div>
        
        <div className="space-y-4">
          {[
            { name: "PT Indofood CBP", loc: "Jakarta, ID", price: "Rp 14.500", icon: "factory" },
            { name: "Koperasi Tani Maju", loc: "Surabaya, ID", price: "Rp 14.200", icon: "warehouse" },
            { name: "Bulog Jabar", loc: "Bandung, ID", price: "Rp 14.000", icon: "store" }
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
                  <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Harga Penawaran</div>
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

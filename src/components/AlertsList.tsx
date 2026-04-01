export const AlertsList = () => {
  return (
    <div className="bg-surface-lowest rounded-md p-5 shadow-[0_4px_24px_rgba(24,28,32,0.06)] border border-outline-variant/15 flex flex-col h-full">
      
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xs font-extrabold text-on-surface-variant uppercase tracking-widest">Action-Oriented Insights</h3>
          <p className="text-[10px] text-on-surface-variant mt-1">Real-time alerts via Food Supply Intelligence Matrix</p>
        </div>
        <span className="px-2 py-0.5 bg-error/10 text-error text-[10px] font-bold rounded-full border border-error/20 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-error relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-error"></span>
          </span>
          2 Critical
        </span>
      </div>
      
      <div className="space-y-4 flex-1">
        {/* Shortage Warning */}
        <div className="p-4 bg-tertiary/5 border border-tertiary/20 rounded-lg">
          <div className="flex items-start gap-3">
            <span className="material-symbols-outlined text-tertiary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-on-surface">Defisit & Peringatan Inflasi</p>
                <div className="bg-white text-[9px] font-bold text-tertiary px-1.5 py-0.5 rounded shadow-sm border border-tertiary/10">High Risk</div>
              </div>
              <p className="text-[11px] text-on-surface-variant leading-relaxed mt-2">
                DKI Jakarta reserves dropping below 7 days. Predicted price spike (+12%) for Beras Long Grain.
              </p>
              
              <div className="mt-4 pt-3 border-t border-tertiary/10">
                <p className="text-[10px] font-semibold text-on-surface mb-2">Rekomendasi Aksi:</p>
                <button className="w-full py-2 bg-white text-on-surface font-bold text-[11px] rounded-md border border-outline-variant/30 hover:bg-surface-high transition-colors flex items-center justify-center gap-1.5 shadow-sm">
                  <span className="material-symbols-outlined text-[14px] text-primary">swap_horiz</span>
                  Alokasikan 2.500 Ton dari Jawa Barat
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Action Priority */}
        <div className="p-4 border border-outline-variant/15 rounded-lg hover:bg-surface-lowest/50 transition-colors">
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-secondary text-lg mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>priority_high</span>
            <div>
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-on-surface">Surplus Gudang Jawa Tengah</p>
                <span className="text-[10px] font-medium text-on-surface-variant">2 jam yang lalu</span>
              </div>
              <p className="text-[11px] text-on-surface-variant leading-relaxed mt-1">
                Kapasitas gudang mencapai 92%. Risiko penurunan harga lokal jika tidak diekspor/didistribusi ke luar wilayah.
              </p>
              <button className="text-[10px] font-bold text-primary hover:underline mt-2 flex items-center gap-1">
                Buka Rute Logistik Baru
                <span className="material-symbols-outlined text-[12px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

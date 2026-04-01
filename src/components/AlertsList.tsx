

export const AlertsList = () => {
  return (
    <div className="bg-surface-lowest rounded-md p-5 shadow-[0_4px_24px_rgba(24,28,32,0.06)] border border-outline-variant/15 h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xs font-extrabold text-on-surface-variant uppercase tracking-widest">Peringatan Aktif</h3>
        <span className="px-2 py-0.5 bg-tertiary/10 text-tertiary text-[10px] font-bold rounded-full">3 Kritis</span>
      </div>
      
      <div className="space-y-4">
        {/* Alert Item 1 */}
        <div className="pb-4 border-b border-surface-highest last:border-0 last:pb-0">
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-tertiary text-lg mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
            <div>
              <p className="text-xs font-bold text-on-surface mb-1">Area Metropolitan Jakarta</p>
              <p className="text-[11px] text-on-surface-variant leading-relaxed">
                Harga beras diperkirakan melonjak <span className="text-tertiary font-bold">8.5%</span> dalam 72 jam ke depan akibat hambatan logistik di Tanjung Priok.
              </p>
              <button className="text-[10px] font-bold text-primary hover:underline mt-2">View Forecast</button>
            </div>
          </div>
        </div>

        {/* Alert Item 2 */}
        <div className="pb-4 border-b border-surface-highest last:border-0 last:pb-0">
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-tertiary text-lg mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
            <div>
              <p className="text-xs font-bold text-on-surface mb-1">Distribusi Jawa Timur</p>
              <p className="text-[11px] text-on-surface-variant leading-relaxed">
                Pasokan jagung turun di bawah ambang batas aman 14 hari. Diperlukan pemenuhan segera dari cadangan nasional.
              </p>
              <button className="text-[10px] font-bold text-primary hover:underline mt-2">Allocate Stock</button>
            </div>
          </div>
        </div>
        
        {/* Alert Item 3 */}
        <div className="pb-4 border-b border-surface-highest last:border-0 last:pb-0">
          <div className="flex gap-3">
            <span className="material-symbols-outlined text-secondary text-lg mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>info</span>
            <div>
              <p className="text-xs font-bold text-on-surface mb-1">Rute Jawa Tengah Dibuka</p>
              <p className="text-[11px] text-on-surface-variant leading-relaxed">
                Akses jalan alternatif pulih, menurunkan keterlambatan distribusi sebesar 12 jam.
              </p>
              <button className="text-[10px] font-bold text-primary hover:underline mt-2">Re-route Shipments</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

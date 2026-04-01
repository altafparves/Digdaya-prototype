import React, { useState } from 'react';

const mockSuppliers = [
  { id: 1, name: "Koperasi Tani Makmur", verified: true, loc: "Surabaya, Jawa Timur", qty: 850, price: 12800, rating: 4.8 },
  { id: 2, name: "CV Sumber Pangan", verified: true, loc: "Medan, Sumatera Utara", qty: 620, price: 13100, rating: 4.6 },
  { id: 3, name: "Kelompok Tani Sejahtera", verified: false, loc: "Makassar, Sulawesi Selatan", qty: 450, price: 12500, rating: 4.5 },
  { id: 4, name: "PT Agro Sentosa", verified: true, loc: "Bandung, Jawa Barat", qty: 1200, price: 13300, rating: 4.9 },
];

export const BuyerDashboard = () => {
  const [quantity, setQuantity] = useState<string>('');
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value);
  };

  const parsedQty = parseInt(quantity) || 0;
  const avgPrice = 13000;
  const totalEstimate = parsedQty * avgPrice;

  return (
    <div className="flex flex-col gap-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div>
        <h1 className="text-xl font-bold text-gray-900 font-manrope">Dasbor Pembeli / Distributor</h1>
        <p className="text-sm text-gray-500 mt-1 font-inter">Temukan pasokan tersedia dan hubungi pemasok</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          
          {/* Purchase Requirements */}
          <div className="bg-white p-6 rounded-[20px] border border-gray-100 shadow-sm">
            <h2 className="text-[15px] font-bold text-gray-900 mb-6 font-manrope">Kebutuhan Pembelian</h2>
            <form className="space-y-5">
              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-gray-700 font-inter">Komoditas yang Dibutuhkan</label>
                <div className="relative">
                  <select className="w-full bg-[#F4F4F5] border-none rounded-lg py-3 px-4 text-[13px] font-inter focus:ring-2 focus:ring-blue-600/20 outline-none appearance-none text-gray-900 font-medium">
                    <option>Cabai</option>
                    <option>Beras</option>
                    <option>Jagung</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-lg">expand_more</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-gray-700 font-inter">Kebutuhan Kuantitas (kg)</label>
                <input 
                  type="number" 
                  placeholder="Masukkan kuantitas" 
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-full bg-[#F4F4F5] border-none rounded-lg py-3 px-4 text-[13px] font-inter focus:ring-2 focus:ring-blue-600/20 outline-none text-gray-900 font-medium placeholder:text-gray-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-semibold text-gray-700 font-inter">Lokasi Pengiriman</label>
                <div className="relative">
                  <select className="w-full bg-[#F4F4F5] border-none rounded-lg py-3 px-4 text-[13px] font-inter focus:ring-2 focus:ring-blue-600/20 outline-none appearance-none text-gray-900 font-medium">
                    <option>Jawa Tengah</option>
                    <option>Jawa Barat</option>
                    <option>Jawa Timur</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-lg">expand_more</span>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button type="button" className="flex-1 bg-[#1A56DB] hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-bold font-inter transition-colors">
                  Find Suppliers
                </button>
                <button type="button" onClick={() => setQuantity('')} className="px-6 bg-white border border-gray-200 hover:bg-gray-50 text-gray-800 py-2.5 rounded-lg text-sm font-bold font-inter transition-colors">
                  Reset
                </button>
              </div>
            </form>
          </div>

          {/* Estimated Price */}
          <div className="bg-[#F0FDF4] p-6 rounded-[20px] shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/40 to-cyan-100/40 blur-3xl rounded-full -mr-10 -mt-10"></div>
            
            <div className="flex items-center gap-2 mb-4 text-[#1A56DB] relative z-10">
              <span className="material-symbols-outlined text-lg">show_chart</span>
              <h3 className="font-bold text-[15px] font-manrope">Estimasi Harga</h3>
            </div>
            
            <div className="mb-8 relative z-10">
              <div className="text-3xl font-extrabold text-[#1A56DB] font-manrope tracking-tight">Rp 13.000/kg</div>
              <p className="text-[13px] text-[#1A56DB]/70 mt-1 font-inter font-medium">Rata-rata pasar untuk wilayah Anda</p>
            </div>

            <div className="space-y-3 border-t border-[#1A56DB]/10 pt-5 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-[13px] text-[#1A56DB]/80 font-medium font-inter">Total estimasi:</span>
                <span className="text-[13px] font-bold text-[#1A56DB] font-inter">Rp {totalEstimate.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[13px] text-[#1A56DB]/80 font-medium font-inter">Pemasok ditemukan:</span>
                <span className="text-[13px] font-bold text-[#1A56DB] font-inter">{mockSuppliers.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          
          {/* Available Supply Table */}
          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden flex flex-col border border-gray-100/50">
            <div className="px-6 py-5 border-b border-gray-100/80">
              <h2 className="text-[15px] font-bold text-gray-900 font-manrope">Pasokan Tersedia</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-100/80">
                    <th className="px-6 py-3.5 text-[12px] font-bold text-gray-900 bg-white font-inter">Pemasok</th>
                    <th className="px-6 py-3.5 text-[12px] font-bold text-gray-900 bg-white font-inter">Lokasi</th>
                    <th className="px-6 py-3.5 text-[12px] font-bold text-gray-900 bg-white font-inter">Kuantitas</th>
                    <th className="px-6 py-3.5 text-[12px] font-bold text-gray-900 bg-white font-inter">Harga</th>
                    <th className="px-6 py-3.5 text-[12px] font-bold text-gray-900 bg-white font-inter text-center">Peringkat</th>
                    <th className="px-6 py-3.5 text-[12px] font-bold text-gray-900 bg-white font-inter text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50/80">
                  {mockSuppliers.map((supplier) => (
                    <tr key={supplier.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="text-[13px] font-bold text-gray-800 font-inter">{supplier.name}</span>
                          {supplier.verified && (
                            <div className="bg-[#DCFCE7] text-[#166534] w-[18px] h-[18px] rounded flex items-center justify-center">
                              <span className="material-symbols-outlined text-[12px] font-bold">check</span>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5 text-gray-500">
                          <span className="material-symbols-outlined text-[14px]">location_on</span>
                          <span className="text-[12px] font-medium font-inter">{supplier.loc}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[13px] font-bold text-gray-900 font-inter">{supplier.qty} kg</td>
                      <td className="px-6 py-4 text-[13px] font-bold text-gray-900 font-inter">Rp {supplier.price.toLocaleString('id-ID')}/kg</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-1">
                          <span className="material-symbols-outlined text-[14px] text-[#EAB308]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                          <span className="text-[13px] font-bold text-gray-900 font-inter">{supplier.rating}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="text-[12px] font-bold text-gray-800 bg-white border border-gray-200 hover:bg-gray-50 px-4 py-1.5 rounded-md transition-colors font-inter">
                          Contact
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recommended Suppliers List Grid */}
          <div className="mt-2">
            <h2 className="text-[15px] font-bold text-gray-900 mb-4 font-manrope">Rekomendasi Pemasok</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {mockSuppliers.slice(0, 2).map((supplier) => {
                const estSupplierTotal = parsedQty > 0 ? parsedQty * supplier.price : 0;
                
                return (
                <div key={supplier.id} className="bg-white rounded-[20px] border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[14px] font-bold text-gray-900 font-inter">{supplier.name}</h3>
                      {supplier.verified && (
                        <span className="bg-[#DCFCE7] text-[#166534] text-[10px] font-bold px-2 py-0.5 rounded-md">Terverifikasi</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 bg-[#FEF9C3] px-2 py-0.5 rounded-md">
                      <span className="material-symbols-outlined text-[12px] text-[#EAB308]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                      <span className="text-[12px] font-bold text-gray-900 font-inter">{supplier.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 mb-6">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    <span className="text-[11px] font-medium font-inter">{supplier.loc}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-[11px] text-gray-500 font-medium mb-1 font-inter">Stok Tersedia</div>
                      <div className="text-[15px] font-bold text-gray-900 font-manrope">{supplier.qty} kg</div>
                    </div>
                    <div>
                      <div className="text-[11px] text-gray-500 font-medium mb-1 font-inter">Harga per kg</div>
                      <div className="text-[15px] font-bold text-[#166534] font-manrope">Rp {supplier.price.toLocaleString('id-ID')}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-5 border-t border-gray-100">
                    <div className="text-[11px] text-gray-500 font-medium font-inter">
                      Est. total: <span className="font-bold text-gray-900">Rp {estSupplierTotal.toLocaleString('id-ID')}</span>
                    </div>
                    <button className="bg-[#1A56DB] hover:bg-blue-700 text-white text-[12px] font-bold px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer font-inter shadow-sm">
                      <span className="material-symbols-outlined text-[16px]">shopping_cart</span>
                      Request
                    </button>
                  </div>
                </div>
              )})}
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

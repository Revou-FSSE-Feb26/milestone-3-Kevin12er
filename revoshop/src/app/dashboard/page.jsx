'use client';

import { useState, useEffect } from 'react';

export default function DashboardAdmin() {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ id: null, title: '', price: '', description: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetch('https://escuelajs.co')
      .then((res) => {
        if (!res.ok) throw new Error('Respon server API bermasalah');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal memuat produk:", err);
        setLoading(false); 
      });
  }, []);




  const tanganiSubmit = async (e) => {
    e.preventDefault();
    if (!form.title || !form.price || !form.description) {
      alert('Semua kolom formulir wajib diisi!');
      return;
    }

    const dataKirim = {
      title: form.title,
      price: Number(form.price),
      description: form.description,
      categoryId: 1,
      images: ['https://placehold.co']
    };

    if (isEditing) {
      try {
        const res = await fetch(`https://escuelajs.co{form.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataKirim)
        });
        if (res.ok) {
          const dataBaru = await res.json();
          setProducts(products.map((p) => p.id === form.id ? dataBaru : p));
          alert('Produk berhasil diperbarui!');
          resetForm();
        }
      } catch (err) { alert('Gagal memperbarui produk'); }
    } else {
      try {
        const res = await fetch('https://escuelajs.co', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(dataKirim)
        });
        if (res.ok) {
          const dataBaru = await res.json();
          setProducts([dataBaru, ...products]);
          alert('Produk baru berhasil ditambahkan!');
          resetForm();
        }
      } catch (err) { alert('Gagal menambah produk'); }
    }
  };

 
  const tanganiHapus = async (id) => {
    if (!confirm('Apakah Anda yakin ingin menghapus produk ini?')) return;
    try {
      const res = await fetch(`https://escuelajs.co{id}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        setProducts(products.filter((p) => p.id !== id));
        alert('Produk berhasil dihapus!');
      }
    } catch (err) { alert('Gagal menghapus produk'); }
  };

  const siapkanEdit = (produk) => {
    setIsEditing(true);
    setForm({ id: produk.id, title: produk.title, price: produk.price, description: produk.description });
  };

  const resetForm = () => {
    setIsEditing(false);
    setForm({ id: null, title: '', price: '', description: '' });
  };

  if (loading) return <p className="text-white text-center py-12">Memuat Sistem Manajemen...</p>;

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 text-white min-h-screen font-sans">
      <h1 className="text-3xl font-bold font-scipio mb-8 tracking-wide text-center">MANAJEMEN PRODUK CRUD</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
    
        <div className="bg-container p-6 rounded-2xl border border-white/10">
          <h2 className="text-sm font-bold tracking-wider mb-4 border-b border-white/10 pb-2 uppercase text-green-400">
            {isEditing ? 'Edit Produk' : 'Tambah Produk Baru'}
          </h2>
          <form onSubmit={tanganiSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-teks/60 mb-1">Nama Produk</label>
              <input type="text" value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} className="w-full bg-background border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none" placeholder="Masukkan nama produk" />
            </div>
            <div>
              <label className="block text-xs text-teks/60 mb-1">Harga ($)</label>
              <input type="number" value={form.price} onChange={(e) => setForm({...form, price: e.target.value})} className="w-full bg-background border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none" placeholder="Contoh: 150" />
            </div>
            <div>
              <label className="block text-xs text-teks/60 mb-1">Deskripsi Ringkas</label>
              <textarea rows="3" value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} className="w-full bg-background border border-white/10 rounded-xl p-3 text-xs text-white focus:outline-none resize-none" placeholder="Tulis deskripsi detail produk..."></textarea>
            </div>
            <button type="submit" className="w-full bg-background text-container font-bold py-2.5 rounded-xl text-xs hover:bg-opacity-90 transition-all">
              {isEditing ? 'SIMPAN PERUBAHAN' : 'INPUT PRODUK'}
            </button>
            {isEditing && (
              <button type="button" onClick={resetForm} className="w-full bg-white/5 border border-white/10 text-white py-2.5 rounded-xl text-xs hover:bg-white/10 transition-all mt-2">
                Batal Edit
              </button>
            )}
          </form>
        </div>

     
        <div className="lg:col-span-2 bg-container p-6 rounded-2xl border border-white/10 space-y-3">
          <h2 className="text-sm font-bold tracking-wider border-b border-white/10 pb-2 mb-4 uppercase">Daftar Katalog Produk</h2>
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
            {products.map((product) => (
              <div key={product.id} className="flex items-center justify-between bg-background p-3 rounded-xl border border-white/5 text-xs">
                <div className="flex items-center space-x-3 truncate flex-1">
                  <img src={Array.isArray(product.images) ? product.images[0] : product.images} alt="" className="w-10 h-10 object-cover rounded-lg flex-shrink-0 bg-container" />
                  <div className="truncate">
                    <p className="font-semibold truncate max-w-[180px]">{product.title}</p>
                    <p className="text-teks/60 mt-0.5">${product.price}</p>
                  </div>
                </div>
                <div className="flex space-x-2 pl-4">
                  <button onClick={() => siapkanEdit(product)} className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1.5 rounded-lg hover:bg-blue-500/20 transition-colors">Edit</button>
                  <button onClick={() => tanganiHapus(product.id)} className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1.5 rounded-lg hover:bg-red-500/20 transition-colors">Hapus</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

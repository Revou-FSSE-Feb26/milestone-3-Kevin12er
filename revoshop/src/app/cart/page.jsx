"use client";

import { useCart } from '@/app/context/Cartcontext';
import Link from 'next/link';

export default function CartPage() {
  const { cart, addItem, hapusDariKeranjang, kurangiItem } = useCart();
  
  const totalHarga = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-white px-4">
        <h2 className="text-2xl font-bold mb-4 font-scipio text-center">KERANJANG ANDA KOSONG</h2>
        <p className="text-sm text-neutral-400 mb-6 font-sans text-center">Yuk, isi keranjang belanjaan Anda dengan produk RevoShop!</p>
        <Link href="/" className="bg-container text-white  px-6 py-3 rounded-xl transform font-semibold hover:bg-opacity-80 transition hover:-y-translate-1 font-sans text-sm shadow-lg">
          Mulai Belanja
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 text-white min-h-[80vh]">
      <h1 className="text-3xl font-bold mb-8 font-scipio tracking-wide">KERANJANG BELANJA</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => {
            const gambarProduk = Array.isArray(item.images) && item.images.length > 0 
              ? item.images[0] 
              : (typeof item.images === 'string' ? item.images : 'https://placehold.co');

            return (
              <div key={item.id} className="flex flex-col sm:flex-row sm:items-center justify-between bg-(--container) p-4 rounded-2xl border border-white/10 font-sans gap-4">
                <div className="flex items-center space-x-4 flex-1">
                  <img 
                    src={gambarProduk} 
                    alt={item.title} 
                    className="w-20 h-20 object-cover rounded-xl bg-(--background) flex-shrink-0 border border-white/5" 
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm line-clamp-1 pr-2">{item.title}</h3>
                    <p className="text-xs opacity-60 mt-1">${item.price}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end space-x-4 border-t border-white/5 pt-2 sm:border-none sm:pt-0">
                  <div className="flex items-center border border-white/20 rounded-lg overflow-hidden bg-(--background)">
                    <button 
                      onClick={() => {
                        if (item.quantity > 1) {
                          if (kurangiItem) kurangiItem(item.id);
                        } else {
                          hapusDariKeranjang(item.id);
                        }
                      }} 
                      className="px-3 py-1 bg-white/5 hover:bg-white/10 transition-colors text-sm font-bold"
                    >
                      -
                    </button>
                    <span className="px-3 text-sm font-medium w-8 text-center select-none">{item.quantity}</span>
                    <button 
                      onClick={() => addItem(item)} 
                      className="px-3 py-1 bg-white/5 hover:bg-white/10 transition-colors text-sm font-bold"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => hapusDariKeranjang(item.id)} 
                    className="text-white/40 hover:text-red-500 transition-colors text-sm p-1"
                    title="Hapus semua produk ini"
                  >
                    ✕
                  </button>
                </div>
              </div>
            );
          })}
        </div>


        <div className="bg-(--container) p-6 rounded-2xl border border-white/10 h-fit space-y-6 font-sans md:sticky md:top-6 shadow-xl">
          <h2 className="font-semibold text-lg tracking-wide border-b border-white/10 pb-3">RINGKASAN</h2>
          <div className="flex justify-between text-sm">
            <span className="opacity-60">Total Item</span>
            <span className="font-medium">{cart.reduce((total, item) => total + item.quantity, 0)} Pcs</span>
          </div>
          <div className="flex justify-between text-base border-t border-white/10 pt-4 font-bold">
            <span>Total Harga</span>
            <span className="text-white">${totalHarga}</span>
          </div>

          <Link href="/checkout" className="block text-center w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-opacity-90 active:scale-95 transition-all text-sm tracking-wider shadow-md">
            LANJUT KE CHECKOUT
          </Link>
        </div>
      </div>
        <Link href={"/"}  className="flex items-center text-xs cursor-pointer flex justify-center w-full md:w-[65%] border border-white/20 mt-8 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">Kembali</Link>
    </div>
  );
}

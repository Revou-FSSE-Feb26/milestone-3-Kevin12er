"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function ProdukTerkait({ category }) {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
      .then((res) => {
        if (!res.ok) throw new Error('Gagal memuat produk terkait');
        return res.json();
      })
      .then((data) => {
        const hasil = data
          .map((item) => {
            let mainImage = "https://placehold.co/150";
            if (Array.isArray(item.images) && item.images.length > 0) {
              mainImage = item.images[0].replace(/[\[\]"']/g, "").trim();
            }
            return { ...item, cleanedImage: mainImage };
          })
          .filter((item) => {
            const kategoriCocok = item.category?.id === category?.id || item.category?.name === category?.name;
            return kategoriCocok;
          });

  
        setRelated(hasil.slice(0, 3));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [category]);

  if (loading) return <p className="text-white text-xs text-center py-4">Memuat produk terkait...</p>;
  if (related.length === 0) return <p className="text-gray-400 text-xs text-center py-4">Tidak ada produk terkait.</p>;

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-full">
      {related.map((item) => (
        <article key={item.id} className="flex flex-col items-center text-center bg-white/5 p-4 rounded-xl border border-white/5">
          <figure className="w-full">
            <img
              src={item.cleanedImage}
              alt={item.title}
              className="w-full h-32 object-cover rounded-lg"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/150";
              }}
            />
          </figure>

          <h1 className="text-white text-sm capitalize my-2 font-medium truncate w-full max-w-[150px]">
            {item.title}
          </h1>
          
          <Link 
            href={`/products/${item.id}`} 
            className="text-center text-xs text-white cursor-pointer border border-white/20 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors mt-auto w-full"
          >
            Lihat Produk
          </Link>
        </article>
      ))}
    </section>
  );
}
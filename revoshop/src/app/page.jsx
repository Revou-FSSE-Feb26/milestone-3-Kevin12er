"use client";

// import { products } from "./data/data";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import { useCart } from '@/app/context/Cartcontext'; 


export default function Home() {



const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)
const { addItem } = useCart();



useEffect(() => {

  const fetchData = async () => {


  try {

    const products = await fetch('https://api.escuelajs.co/api/v1/products');

    if (!products.ok) {
      throw new Error(`Gagal mengambil data, status: ${products.status}`)
    };

    const data = await products.json();
    setProducts(data);
    setLoading(false);

    }  catch (error) {
    console.log(`ERROR: ${error.message}`)
  }

  }

  fetchData()

}, [])


if (loading) return <p className="text-(--teks) text-center text-sm md:text-2xl py-8">Halaman sedang dimuat...</p>

  
return (
  <main className="min-h-screen bg-(--background) flex flex-col items-center p-6 text-(--teks)">
    
    <div className="space-y-2 mb-8 text-center">
      <h1 className="font-scipio text-4xl tracking-tight">RevoShop</h1>
      <p className="text-(--teks) opacity-80">
        Jelajahi produk kami dan dapatkan diskon sebesar{" "}
        <span className="font-bold italic opacity-100">20%</span>
      </p>
    </div>

    
    <section className="grid grid-cols md:grid-cols-4 gap-5 bg-(--container) p-8 rounded-2xl shadow-xl w-full border border-white/10">
      {products.map((product) => (
        <article
          key={product.id}
          className="bg-(--background) border border-white/10 rounded-2xl overflow-hidden flex flex-col"
        >
          
          <div className="relative">
            <Image
              src={product.images[0]}
              width={400}
              height={160}
              alt={product.title}
              className="w-full object-cover h-80"
               unoptimized
            />
            <span className="absolute top-2 left-2 bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-lg">
              -20%
            </span>
          </div>

          
          <div className="flex flex-col flex-1 p-4 gap-2">
            <span className="capitalize font-semibold text-base leading-relaxed">
              {product.title}
            </span>
            <span className="text-sm opacity-60 leading-relaxed flex-1">
              {product.description}
            </span>
          </div>

          
          <div className="flex items-center justify-between px-4 py-3 border-t border-white/10">
            <div className="flex flex-col">
              <span className="font-semibold text-sm">${product.price}</span>
            </div>

            <div className="flex gap-2">
              <Link  href={`/products/${product.id}`} className="text-center text-xs cursor-pointer border border-white/20 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">Lihat Produk</Link>
              <Link onClick={() => addItem(product)} href="/cart" className="flex items-center gap-1 text-xs cursor-pointer border border-white/20 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                + Tambah
              </Link>
            </div>
          </div>

        </article>
      ))}
    </section>

  </main>
);
}

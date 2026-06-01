import { products } from "./data/data";
import Image from "next/image";
import Link from "next/link";


export default function Home() {

  
return (
  <main className="min-h-screen bg-(--background) flex flex-col items-center p-6 text-(--teks)">
    
    <div className="space-y-2 mb-8 text-center">
      <h1 className="font-scipio text-4xl tracking-tight">RevoShop</h1>
      <p className="text-(--teks) opacity-80">
        Jelajahi produk kami dan dapatkan diskon sebesar{" "}
        <span className="font-bold italic opacity-100">20%</span>
      </p>
    </div>

    
    <section className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5 bg-(--container) p-8 rounded-2xl shadow-xl w-full border border-white/10">
      {products.map((product) => (
        <article
          key={product.id}
          className="bg-(--background) border border-white/10 rounded-2xl overflow-hidden flex flex-col"
        >
          
          <div className="relative">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full object-cover h-40"
            />
            <span className="absolute top-2 left-2 bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-lg">
              -20%
            </span>
          </div>

          
          <div className="flex flex-col flex-1 p-4 gap-2">
            <span className="capitalize font-semibold text-base leading-relaxed">
              {product.name}
            </span>
            <span className="text-sm opacity-60 leading-relaxed flex-1">
              {product.description}
            </span>
            <div className="flex items-center gap-1 text-sm opacity-70">
              <span>⭐</span>
              <span>{product.rating}</span>
            </div>
          </div>

          
          <div className="flex items-center justify-between px-4 py-3 border-t border-white/10">
            <div className="flex flex-col">
              <span className="font-semibold text-sm">{product.price}</span>
              <span className="text-xs opacity-40 line-through">
                {product.originalPrice}
              </span>
            </div>

            <div className="flex gap-2">
              <Link  href={`/products/${product.id}`} className="text-center text-xs cursor-pointer border border-white/20 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">Lihat Produk</Link>
              <Link  href={`/products/${product.id}`} className="flex items-center gap-1 text-xs cursor-pointer border border-white/20 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
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

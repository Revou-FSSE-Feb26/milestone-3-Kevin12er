import Link from "next/link";
import Image from "next/image"
import BukuTypescript from "./Images/typescript.png";
import BukuJavascript from "./Images/js.png";
import BukuHtml from "./Images/html.png";
import BagRevou from "./Images/bag.png";
import TshirtRevou from "./Images/t-shirt.png";
import ShoesRevou from "./Images/shoes.png";
import JacketRevou from "./Images/jacket.png";


export default function Home() {

  const products = [

    {
      id: 1,
      name: "Revou typescript book",
      price: 120_000,
      category: "book",
      rating: 4.5,
      image: BukuTypescript,
      description: "Buku panduan untuk pemula dalam menginstalasi typescript dan roadmapnya"
    },

    {
      id: 2,
      name: "Revou javascript book",
      price: 100_000,
      category: "book",
      rating: 4.0,
      image: BukuJavascript,
      description: "Buku panduan untuk pemula dalam memulai pembelajaran bahasa pemrograman javascript"
    },

    {
      id: 3,
      name: "Revou html and css5 book",
      price: 70_000,
      category: "book",
      rating: 4.9,
      image: BukuHtml,
      description: "Buku panduan untuk memulai perjalanan belajar pemrograman website"
    },

    {
      id: 4,
      name: "Revou t-shirt",
      price: 230_000,
      category: "t-shirt",
      rating: 3.0,
      image: TshirtRevou,
      description: "Kaos oversize dari perusahaan Revou, berbahan premium 24s cotton-combad"
    },

    {
      id: 5,
      name: "Revou sport shoes",
      price: 360_000,
      category: "shoes",
      rating: 5.0,
      image: ShoesRevou,
      description: "Sepatu running premium"
    },

    {
      id: 6,
      name: "Revou bag",
      price: 260_000,
      category: "bag",
      rating: 3.7,
      image: BagRevou,
      description: "Berbahan polyester, tas ini dirancang untuk tahan air"
    },

    {
      id: 7,
      name: "Revou jacket",
      price: 180_000,
      category: "jacket",
      rating: 4.1,
      image: JacketRevou,
      description: "Jaket premium dan tebal berbahan polyester"
    },

  ]




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
            <span className="capitalize font-semibold text-base leading-snug">
              {product.name}
            </span>
            <span className="text-sm opacity-60 leading-relaxed">
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
              <button className="text-center text-xs cursor-pointer border border-white/20 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">Lihat Produk</button>
              <button className="flex items-center gap-1 text-xs cursor-pointer border border-white/20 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                + Tambah
              </button>
            </div>
          </div>

        </article>
      ))}
    </section>

  </main>
);
}

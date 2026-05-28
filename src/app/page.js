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
      description: "Buku panduan untuk memulai perjalanan belajar pemrograman, ini dirancang khusus agar beginner friendly dan mudah untuk dipahami"
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
      description: "Pernah mendengar brand Nike? nah Revou itu kakaknya, sepatu ini dirancang khusus agar teman-teman tidak cuma koding dan koding saja tetapi mau keluar untuk berolahraga sore walau hanya semenit"
    },

    {
      id: 6,
      name: "Revou bag",
      price: 260_000,
      category: "bag",
      rating: 3.7,
      image: BagRevou,
      description: "Tas premium dengan jahitan janda muda yang dibuat dengan sepenuh hati dan menghasilkan tas yang bisa bertahan bertahun-tahun"
    },

    {
      id: 7,
      name: "Revou jacket",
      price: 180_000,
      category: "jacket",
      rating: 4.1,
      image: JacketRevou,
      description: "Jaket premium dan tebal yang bisa melindungi anda dari dinginnya cuaca dan panasnya sinar UI/UV nya matahari"
    },

  ]




  return (
    <main className="min-h-screen bg-(--background) flex flex-col items-center  p-6 text-(--teks)">

        <div className="space-y-3 mb-4">
          <h1 className="text-center font-scipio text-3xl ">RevoShop</h1>
          <h2 className="text-center">Jelajahi produk kami dan dapatkan diskon sebesar <span className="font-bold italic">20%</span></h2>
        </div>
        


        <section className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4 bg-(--container) p-8 rounded-2xl shadow-xl h-auto w-full text-center border border-white/10">
         

          {products.map((product) => (
            <article key={product.id} className="bg-background border border-background rounded-2xl overflow-hidden flex flex-col shadow-2xl">

                
                <Image src={product.image} alt="product.name" className="w-full object-cover h-80"/>
                <span className="capitalize block font-semibold text-sm md:text-2xl text-teks">{product.name}</span>
                <span className="tracking-tight text-left">{product.description}</span>
                <span className="font-semibold text-left">{product.rating}</span>
                <span className="text-left">{product.price}</span>




            </article>
          ))}  


      </section>
    </main>
  );
}

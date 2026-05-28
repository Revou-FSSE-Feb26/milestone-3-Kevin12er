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
      description: "Buku panduan untuk memulai perjalanan belajar pemrograman, ini dirancang khusus agar beginner friendly dan muda untuk dipahami"
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

  console.log(products)


























  return (
    <main className="min-h-screen bg-(--background)] flex flex-col items-center justify-center p-6 text-(--teks)]">
      <div className="bg-(--container)] p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-white/10">

      </div>
    </main>
  );
}

import { products } from "../../data/data";
import Link from "next/link";
import Image from "next/image";


export default async function PageId({params}) {


        const { id } = await params

        const product = products.find((item => item.id === parseInt(id)))

          if(!product) {
            return `barang tidak ditemukan`
          }

      

    return (


            <section className="shadow-lg relative flex justify-center">

            <article className="bg-(--background) border border-white/10 rounded-2xl overflow-hidden flex gap-4 m-8 w-290 flex justify-center items-center">

                <figure className="flex justify-center items-center">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      className="w-220 object-cover h-150"
                    />
                </figure> 


                <div className="flex flex-col  text-left">
                <h1 className="capitalize font-semibold  leading-relaxed text-white font-scipio text-xl md:text-3xl">{product.name}</h1>
                <h2 className="leading-relaxed text-(--teks) text-sm md:text-xl">{product.description}</h2>
                <span className="text-xl text-(--teks)">Kategori: {product.category}</span>
                <span className="text-xl font-semibold text-white">Rp.{product.price}</span>
                </div>

                </article>  

                <Link href="/" className="absolute bottom-10 right-10 md:bottom-5 md:right-30  text-(--teks) text-center text-xs cursor-pointer border border-white/20 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">Kembali</Link>

            

        </section>



)}

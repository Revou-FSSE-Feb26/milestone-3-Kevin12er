	"use client";

	import { products } from "../../data/data";
	import Link from "next/link";
	import Image from "next/image";

	import { useState, useEffect } from "react";

	export default function ProdukTerkait({ category }) {

		const [related, setRelated] = useState([])

		useEffect(() => {

			const hasil = products.filter((item) => item.category === category)
			setRelated(hasil)

		}, [category]);





		return (

			<section className="flex flex-col md:flex-row justify-center items-center gap-8">
					{related.map((item) => (

						<article key={item.id} className="">
						<figure>
								<Image
									src={item.image}
									alt={item.name}
									className="w-40 object-cover h-40"
								/>
						</figure>

							<h1 className="text-white capitalize my-2">{item.name}</h1>
							<Link  href={`/products/${item.id}`} className="text-center text-xs text-white cursor-pointer border border-white/20 rounded-lg  px-3 py-2 hover:bg-white/10 transition-colors">Lihat Produk</Link>

						</article>
					))}



			</section>

			)



	}
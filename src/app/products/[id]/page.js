import { products } from "../../data/data";
import Link from "next/link";
import Image from "next/image";


export default function PageId({params}) {

        const product = products.find((item => item.id === parseInt(params.id)))

          if(!product) {

            return `barang tidak ditemukan`
          }

      

    return (





)}

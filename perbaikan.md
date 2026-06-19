button tidak ada di detail page: Requirement mewajibkan "Implement a simple Add to Cart button" di product detail page. Di home page,  tombol "+ Tambah" dan "Lihat Produk" keduanya mengarah ke URL yang sama (/products/${product.id}) — tidak ada cart functionality sama sekali. Ini adalah requirement yang belum terpenuhi.

{/* page.js — kedua tombol href-nya identik */}

<Link href={`/products/${product.id}`}>Lihat Produk</Link>

<Link href={`/products/${product.id}`}>+ Tambah</Link>



Tidak ada static pages (FAQ/Promosi): Login dan register ditambahkan (melampaui requirement dasar),  tapi halaman static seperti FAQ atau Promo — yang secara eksplisit diminta di requirement — tidak ada.

Login dan register adalah form UI saja: Tidak ada useState untuk controlled inputs,  tidak ada submit handler,  tidak ada validasi. Klik submit tidak melakukan apapun.

produkterkait.js indentasi tidak konsisten: Seluruh isi file menggunakan leading tab di setiap baris,  sementara file lain tidak. Minor secara fungsional tapi menunjukkan inkonsistensi formatting.

README memuat instruksi cd milestone-3-Kevin12er/revoshop — tapi folder revoshop tidak ada di repo. README perlu diperbarui.
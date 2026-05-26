export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col items-center justify-center p-6 text-[var(--teks)]">
      {/* Container utama menggunakan warna dari globals.css */}
      <div className="bg-[var(--container)] p-8 rounded-2xl shadow-xl max-w-md w-full text-center border border-white/10">
        
        {/* Menggunakan Font Scipio */}
        <h1 className="font-scipio text-4xl font-bold mb-4 tracking-wide text-white">
          SCIPIO SHOP
        </h1>
        
        <p className="font-sans text-sm mb-6 opacity-90">
          Selamat datang di e-commerce buatan saya. Semua tampilan di sini didesain secara manual.
        </p>

        {/* Tombol dengan font Scipio */}
        <button className="font-scipio bg-[var(--background)] hover:bg-opacity-80 text-white font-medium py-3 px-6 rounded-xl w-full transition-all duration-200">
          Masuk ke Toko
        </button>
        
      </div>
    </main>
  );
}

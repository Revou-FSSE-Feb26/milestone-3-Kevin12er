export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 shadow-4xl">
      {/* Kotak Form Login */}
      <div className="bg-container p-8 rounded-3xl shadow-2xl max-w-md w-full border border-white/10">
        
       
        <h2 className="font-scipio text-3xl font-bold text-white text-center mb-2 tracking-wide">
          MASUK
        </h2>
        <p className="text-center text-xs text-teks/80 mb-8 font-sans">
          Silakan masuk ke akun RevoShop Anda
        </p>

        {/* Form Input */} {/*saya pakai space-y-5 biar satu kali atur jarak semua child didalam nggak pakai mb*/}
        <form className="space-y-5 font-sans">
          <div>
            <label className="block text-xs font-semibold text-white mb-2 tracking-wide">
              EMAIL
            </label>
            <input 
              type="email" 
              placeholder="Masukkan email anda" 
              className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-teks/40 focus:outline-none focus:border-white/40 transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-white mb-2 tracking-wide"> {/*disini saya pakai block karena label itu bersifat inline supaya input baru auto kebawah*/}
              KATA SANDI
            </label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-teks/40 focus:outline-none focus:border-white/40 transition-colors"
              required
            />
          </div>

          {/*Tombol Login*/}
          <button 
            type="submit" 
            className="font-scipio bg-background text-white font-medium py-3 rounded-xl ml-22 cursor-pointer active:scale-95 text-sm mt-4 hover:bg-opacity-80 transition-all duration-200 tracking-wider shadow-md w-[50%]"
          >
            MASUK SEKARANG
          </button>
        </form>

        
        <p className="text-center text-xs text-teks mt-6 font-sans">
          Belum punya akun?{" "}
          <a href="/register" className="text-white font-semibold hover:underline">
            Daftar disini
          </a>
        </p>

      </div>
    </div>
  );
}

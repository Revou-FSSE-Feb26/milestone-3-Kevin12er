export default function RegisterPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 shadow-4xl">
      <div className="bg-container p-8 rounded-3xl shadow-2xl max-w-md w-full border border-white/10">
        <h2 className="text-white font-scipio font-bold text-center tracking-wide mb-4 text-3xl">
          DAFTAR
        </h2>
        
        <form action="" className="space-y-5">

            <label htmlFor="daftar-email" className="text-white font-semibold uppercase text-sm tracking-widest mb-2">Email</label> 
            <input type="email" name="email" id="daftar-email" placeholder="Masukkan Email anda" className="block w-full rounded-xl px-4 py-3 text-sm text-white bg-background focus:border-white/40 focus:outline-none order border-white/10" required/>

            <label htmlFor="password" className="text-white font-semibold uppercase text-sm tracking-widest mb-2">Password</label>
            <input type="Password" name="password" id="password" placeholder="Masukkan password anda" className="block w-full rounded-xl px-4 py-3 text-sm text-white bg-background focus:border-white/40 focus:outline-none order border-white/10" required/>

            <label htmlFor="re-passsword" className="text-white font-semibold uppercase text-sm tracking-widest mb-2">Password</label>
            <input type="password" name="re-passsword" id="re-passsword" placeholder="Masukkan kembali password anda" className="block w-full rounded-xl px-4 py-3 text-sm text-white bg-background focus:border-white/40 focus:outline-none order border-white/10" required/>

            <button type="submit" className="py-1 bg-background px-4 rounded-xl ml-33 text-white font-scipio tracking-widest active:scale-95 cursor-pointer hover:bg-teks hover:text-background">Daftar</button>

        </form>

         <p className="text-center text-xs text-teks mt-4 font-sans">
          Sudah punya akun?{" "}
          <a href="/login" className="text-white font-semibold hover:underline">
            Masuk disini
          </a>
        </p>

      </div>
    </div>
  );
}

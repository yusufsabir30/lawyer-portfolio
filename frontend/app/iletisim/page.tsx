export default function Iletisim() {
  return (
    <main className="min-h-screen bg-[#0D1B2A] font-[family-name:var(--font-inter)]">

      {/* Hero */}
      <section
        className="relative h-64 flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(13,27,42,0.85), rgba(13,27,42,0.85)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-16">
          <p className="text-[#C9A84C] text-sm uppercase tracking-[6px] mb-3">İletişim</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-white text-4xl font-bold">
            Benimle İletişime Geçin
          </h1>
        </div>
      </section>

      {/* Form + Bilgiler */}
      <section className="py-24 px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">

          {/* Sol: Bilgiler */}
          <div className="flex flex-col gap-8 flex-shrink-0 w-72">
            <div>
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-2">Telefon</p>
              <p className="text-gray-300">+90 541 354 04 67</p>
            </div>
            <div>
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-2">E-posta</p>
              <p className="text-gray-300">talipdurgn@gmail.com</p>
            </div>
            <div>
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-2">Adres</p>
              <p className="text-gray-300">Esenler/İstanbul</p>
            </div>
            <div>
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-2">Şirket</p>
              <p className="text-gray-300">Karataş & Partners</p>
            </div>
          </div>

          {/* Sağ: Form */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Adınız"
                className="flex-1 bg-transparent border border-gray-600 text-white px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none transition placeholder-gray-500"
              />
              <input
                type="text"
                placeholder="Soyadınız"
                className="flex-1 bg-transparent border border-gray-600 text-white px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none transition placeholder-gray-500"
              />
            </div>
            <input
              type="email"
              placeholder="E-posta Adresiniz"
              className="bg-transparent border border-gray-600 text-white px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none transition placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Konu"
              className="bg-transparent border border-gray-600 text-white px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none transition placeholder-gray-500"
            />
            <textarea
              placeholder="Mesajınız"
              rows={6}
              className="bg-transparent border border-gray-600 text-white px-4 py-3 text-sm focus:border-[#C9A84C] focus:outline-none transition placeholder-gray-500 resize-none"
            />
            <button className="self-start bg-[#C9A84C] text-[#0D1B2A] px-10 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-[#b8943d] transition">
              Gönder
            </button>
          </div>

        </div>
      </section>

    </main>
  )
}
import Image from "next/image";
import Link from "next/link";

export default function Hakkimda() {
  return (
    <main className="min-h-screen bg-[#0D1B2A] font-[family-name:var(--font-inter)]">

      {/* Hero */}
      <section
        className="relative h-64 flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(13,27,42,0.85), rgba(13,27,42,0.85)), url('https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1920')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-16">
          <p className="text-[#C9A84C] text-sm uppercase tracking-[6px] mb-3">Kimim</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-white text-4xl font-bold">
            Hakkımda
          </h1>
        </div>
      </section>

      {/* Fotoğraf + Bio */}
      <section className="py-24 px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-start">

          {/* Sol: Fotoğraf */}
          <div className="flex-shrink-0 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#C9A84C]"></div>
            <Image
              src="/talip.jpg"
              alt="Muhammed Talip Durgun"
              width={300}
              height={400}
              className="relative object-cover w-72 h-96"
            />
          </div>

          {/* Sağ: Bio */}
          <div className="flex flex-col gap-6">
            <p className="text-[#C9A84C] text-xs uppercase tracking-widest">Avukat</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-white text-4xl font-bold">
              Muhammed Talip Durgun
            </h2>
            <div className="w-12 h-[1px] bg-[#C9A84C]"></div>
            <p className="text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

        </div>
      </section>

      {/* Eğitim */}
      <section className="py-16 px-12 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-10">Eğitim</p>
          <div className="flex flex-col gap-8">
            <div className="flex gap-8 items-start">
              <p className="text-gray-500 text-sm w-32 flex-shrink-0">2025 — 2026</p>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-white text-xl font-bold">Leiden University</h3>
                <p className="text-gray-400 text-sm mt-1">Summer Law School</p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <p className="text-gray-500 text-sm w-32 flex-shrink-0">2020 — 2025</p>
              <div>
                <h3 className="font-[family-name:var(--font-playfair)] text-white text-xl font-bold">İstanbul Altınbaş Üniversitesi</h3>
                <p className="text-gray-400 text-sm mt-1">Hukuk Lisans (LLB)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Uzmanlık + Diller */}
      <section className="py-16 px-12 border-t border-gray-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16">

          {/* Uzmanlık */}
          <div className="flex-1">
            <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-8">Uzmanlık Alanları</p>
            <div className="flex flex-wrap gap-3">
              {["Problem Çözme", "Usul Hukuku", "ESG / İdare", "AML / CTF", "Süreç Yönetimi", "Düzenleyici Uyum"].map((item) => (
                <span key={item} className="border border-gray-600 text-gray-300 px-4 py-2 text-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Diller */}
          <div className="flex-1">
            <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-8">Diller</p>
            <div className="flex flex-col gap-4">
              {[
                { dil: "Türkçe", seviye: "Anadil" },
                { dil: "İngilizce", seviye: "İleri Seviye" },
                { dil: "Arapça", seviye: "Orta Seviye" },
              ].map((item) => (
                <div key={item.dil} className="flex justify-between border-b border-gray-800 pb-3">
                  <p className="text-white">{item.dil}</p>
                  <p className="text-gray-400 text-sm">{item.seviye}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-12 border-t border-gray-800 text-center">
        <p className="font-[family-name:var(--font-playfair)] text-white text-3xl mb-6">
          Birlikte çalışalım mı?
        </p>
        <Link href="/iletisim" className="border border-[#C9A84C] text-[#C9A84C] px-10 py-3 text-sm uppercase tracking-widest hover:bg-[#C9A84C] hover:text-[#0D1B2A] transition">
          İletişime Geç
        </Link>
      </section>

    </main>
  )
}
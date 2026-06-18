import Link from "next/link";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-inter)]">

      {/* Hero — lacivert + görsel */}
      <br></br> <br></br>
      <section
        className="relative min-h-screen flex items-center justify-center text-center px-12"
        style={{
          backgroundImage: `linear-gradient(rgba(13,27,42,0.75), rgba(13,27,42,0.75)), url('https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=1920&fit=crop&crop=center')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center gap-6 max-w-3xl mx-auto border border-[#C9A84C]/40 px-16 py-20">
          <h1 className="font-[family-name:var(--font-playfair)] text-white text-4xl md:text-5xl font-bold leading-tight">
            "Adalet kutup yıldızı gibi yerinde durur ve geri kalan her şey onun etrafında döner."
          </h1>
          <div className="w-12 h-[1px] bg-[#C9A84C]"></div>
          <p className="text-gray-300 text-sm tracking-widest uppercase"> Konfüçyus</p>
        </div>
      </section>

      {/* Hakkımda — beyaz */}
      <section className="py-32 px-12 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-shrink-0 relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#C9A84C]"></div>
            <img
              src="/talip.jpg"
              alt="Muhammed Talip Durgun"
              className="relative w-72 h-96 object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[#C9A84C] text-xs uppercase tracking-widest">Hakkımda</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-[#0D1B2A] text-4xl font-bold">
              Muhammed Talip Durgun
            </h2>
            <div className="w-12 h-[1px] bg-[#C9A84C]"></div>
            <p className="text-gray-600 leading-relaxed">
              Karataş & Partners bünyesinde Hukuki Uyum Uzmanı olarak görev yapan Muhammed Talip Durgun,
              kurumsal hukuk, düzenleyici uyum ve risk yönetimi alanlarında uzmanlaşmıştır.
              Uluslararası kuruluşlarla edindiği deneyimle müvekkillerine stratejik hukuki çözümler sunmaktadır.
            </p>
            <Link href="/hakkimda" className="self-start text-[#C9A84C] text-sm uppercase tracking-widest border-b border-[#C9A84C] pb-1 hover:opacity-70 transition">
              Daha Fazla →
            </Link>
          </div>
        </div>
      </section>

      {/* Uzmanlık — lacivert */}
      <section className="py-32 px-12 bg-[#0D1B2A]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-4">Ne Yapıyorum</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-white text-4xl font-bold">
              Uzmanlık Alanları
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { baslik: "Kurumsal Uyum", aciklama: "Şirketlerin yasal düzenlemelere uyumunu sağlamak için kapsamlı hukuki analiz ve danışmanlık hizmetleri sunmaktayım." },
              { baslik: "Risk Yönetimi", aciklama: "Kurumsal risklerin tespiti, değerlendirilmesi ve minimize edilmesi süreçlerinde stratejik hukuki destek sağlamaktayım." },
              { baslik: "Uluslararası Hukuk", aciklama: "Uluslararası kuruluşlarla edindiğim deneyimle sınır ötesi hukuki meselelerde rehberlik etmekteyim." },
            ].map((item) => (
              <div key={item.baslik} className="border border-gray-700 p-8 hover:border-[#C9A84C] transition">
                <div className="w-8 h-[1px] bg-[#C9A84C] mb-6"></div>
                <h3 className="font-[family-name:var(--font-playfair)] text-white text-xl font-bold mb-4">
                  {item.baslik}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.aciklama}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — beyaz */}
      <section className="py-32 px-12 bg-white text-center">
        <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-4">İletişim</p>
        <h2 className="font-[family-name:var(--font-playfair)] text-[#0D1B2A] text-4xl font-bold mb-8">
          Birlikte Çalışalım mı?
        </h2>
        <Link href="/iletisim" className="border border-[#0D1B2A] text-[#0D1B2A] px-10 py-3 text-sm uppercase tracking-widest hover:bg-[#0D1B2A] hover:text-white transition">
          İletişime Geç
        </Link>
      </section>

    </main>
  )
}
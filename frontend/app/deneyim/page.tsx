export default function Deneyim() {
  const deneyimler = [
    {
      tarih: "Mayıs 2024 — Günümüz",
      sirket: "Karataş & Partners Law Firm",
      sehir: "İstanbul",
      unvan: "Hukuki Uyum Uzmanı",
      madde: [
        "Kurumsal müvekkillere yönelik hukuki ve düzenleyici analizler gerçekleştirme",
        "Risk değerlendirme süreçlerine katkı sağlama",
        "Uyum ve yönetişim çerçevelerinin oluşturulmasında danışmanlık",
      ],
    },
    {
      tarih: "Temmuz 2023 — Ağustos 2023",
      sirket: "Hazine ve Maliye Bakanlığı",
      sehir: "Türkiye",
      unvan: "Hukuk Stajyeri",
      madde: [
        "Kamu mali düzenleme çerçevesinde hukuki araştırma ve belgeleme",
        "Hukuki materyallerin hazırlanması ve incelenmesine destek",
        "Devlet düzeyinde finansal hukuk sistemlerine ilişkin deneyim kazanma",
      ],
    },
    {
      tarih: "Mayıs 2023",
      sirket: "AGİT — Demokratik Kurumlar ve İnsan Hakları Ofisi",
      sehir: "İstanbul",
      unvan: "Yaz Hukuk Stajyeri",
      madde: [
        "Çok paydaşlı ortamda uluslararası seçim gözlem misyonunda görev alma",
        "Uluslararası gözlemciler ile yerel kurumlar arasında koordinasyon sağlama",
      ],
    },
    {
      tarih: "Kasım 2024",
      sirket: "COP29 İklim Süreci",
      sehir: "Azerbaycan",
      unvan: "Türkiye Gençlik İklim Elçisi",
      madde: [
        "Çok paydaşlı ortamda uluslararası iklim müzakerelerinde Türkiye'yi temsil etme",
        "Uluslararası gözlemciler ile yerel kurumlar arasında iletişim köprüsü kurma",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#0D1B2A] font-[family-name:var(--font-inter)]">

      {/* Hero */}
      <section
        className="relative h-64 flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(13,27,42,0.85), rgba(13,27,42,0.85)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-16">
          <p className="text-[#C9A84C] text-sm uppercase tracking-[6px] mb-3">Kariyer</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-white text-4xl font-bold">
            Deneyim
          </h1>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-12">
        <div className="max-w-4xl mx-auto">
          {deneyimler.map((item, index) => (
            <div key={index} className="flex gap-8 mb-16 relative">
              
              {/* Sol: Çizgi ve nokta */}
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-[#C9A84C] rounded-full mt-1 flex-shrink-0"></div>
                {index !== deneyimler.length - 1 && (
                  <div className="w-[1px] bg-gray-700 flex-1 mt-2"></div>
                )}
              </div>

              {/* Sağ: İçerik */}
              <div className="flex flex-col gap-3 pb-4">
                <p className="text-[#C9A84C] text-xs uppercase tracking-widest">{item.tarih}</p>
                <h2 className="font-[family-name:var(--font-playfair)] text-white text-2xl font-bold">
                  {item.unvan}
                </h2>
                <p className="text-gray-400 text-sm">{item.sirket} — {item.sehir}</p>
                <ul className="flex flex-col gap-2 mt-2">
                  {item.madde.map((m, i) => (
                    <li key={i} className="text-gray-300 text-sm flex gap-3">
                      <span className="text-[#C9A84C] mt-1">—</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
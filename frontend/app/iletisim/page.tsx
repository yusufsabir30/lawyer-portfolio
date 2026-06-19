"use client";
import { useState } from "react";

export default function Iletisim() {
  const [form, setForm] = useState({
    ad: "", soyad: "", email: "", konu: "", mesaj: ""
  });
  const [durum, setDurum] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setDurum("loading");
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setDurum("success");
        setForm({ ad: "", soyad: "", email: "", konu: "", mesaj: "" });
      } else {
        setDurum("error");
      }
    } catch {
      setDurum("error");
    }
  };

  return (
    <main className="min-h-screen bg-[#0B0B0B] font-[family-name:var(--font-inter)]">

      {/* Hero */}
      <section
        className="relative h-64 flex items-center justify-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(11,11,11,0.85), rgba(11,11,11,0.85)), url('/hukuk2.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mt-16">
          <p className="text-[#C6A15B] text-sm uppercase tracking-[6px] mb-3">İletişim</p>
          <h1 className="font-[family-name:var(--font-playfair)] text-[#F5F1EA] text-4xl font-bold">
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
              <p className="text-[#C6A15B] text-xs uppercase tracking-widest mb-2">Telefon</p>
              <p className="text-gray-400">+90 541 354 04 67</p>
            </div>
            <div>
              <p className="text-[#C6A15B] text-xs uppercase tracking-widest mb-2">E-posta</p>
              <p className="text-gray-400">talipdurgn@gmail.com</p>
            </div>
            <div>
              <p className="text-[#C6A15B] text-xs uppercase tracking-widest mb-2">Adres</p>
              <p className="text-gray-400">Menderes Mahallesi<br />345 Sokak No:13 Daire:2</p>
            </div>
            <div>
              <p className="text-[#C6A15B] text-xs uppercase tracking-widest mb-2">Çalışma Saatleri</p>
              <p className="text-gray-400">Pzt — Cum: 09:00 — 18:00</p>
            </div>
          </div>

          {/* Sağ: Form */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="ad"
                placeholder="Adınız"
                value={form.ad}
                onChange={handleChange}
                className="flex-1 bg-transparent border border-gray-800 text-[#F5F1EA] px-4 py-3 text-sm focus:border-[#C6A15B] focus:outline-none transition placeholder-gray-600"
              />
              <input
                type="text"
                name="soyad"
                placeholder="Soyadınız"
                value={form.soyad}
                onChange={handleChange}
                className="flex-1 bg-transparent border border-gray-800 text-[#F5F1EA] px-4 py-3 text-sm focus:border-[#C6A15B] focus:outline-none transition placeholder-gray-600"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="E-posta Adresiniz"
              value={form.email}
              onChange={handleChange}
              className="bg-transparent border border-gray-800 text-[#F5F1EA] px-4 py-3 text-sm focus:border-[#C6A15B] focus:outline-none transition placeholder-gray-600"
            />
            <input
              type="text"
              name="konu"
              placeholder="Konu"
              value={form.konu}
              onChange={handleChange}
              className="bg-transparent border border-gray-800 text-[#F5F1EA] px-4 py-3 text-sm focus:border-[#C6A15B] focus:outline-none transition placeholder-gray-600"
            />
            <textarea
              name="mesaj"
              placeholder="Mesajınız"
              rows={6}
              value={form.mesaj}
              onChange={handleChange}
              className="bg-transparent border border-gray-800 text-[#F5F1EA] px-4 py-3 text-sm focus:border-[#C6A15B] focus:outline-none transition placeholder-gray-600 resize-none"
            />

            <button
              onClick={handleSubmit}
              disabled={durum === "loading"}
              className="self-start bg-[#C6A15B] text-[#0B0B0B] px-10 py-3 text-sm uppercase tracking-widest font-semibold hover:bg-[#b8943d] transition disabled:opacity-50"
            >
              {durum === "loading" ? "Gönderiliyor..." : "Gönder"}
            </button>

            {durum === "success" && (
              <p className="text-green-400 text-sm">Mesajınız iletildi, en kısa sürede dönüş yapılacaktır.</p>
            )}
            {durum === "error" && (
              <p className="text-red-400 text-sm">Bir hata oluştu, lütfen tekrar deneyin.</p>
            )}
          </div>

        </div>
      </section>

    </main>
  );
}
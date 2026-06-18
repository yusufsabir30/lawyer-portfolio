import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Muhammed Talip Durgun",
  description: "Avukat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body className={`${playfair.variable} ${inter.variable}`}>
        
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 bg-[#0D1B2A]/90 backdrop-blur-sm border-b border-[#C9A84C]/20">
          
          {/* Logo */}
          <Link href="/" className="font-playfair text-[#C9A84C] text-xl tracking-widest uppercase">
            Muhammed Talip Durğun
          </Link>

          {/* Links */}
          <div className="flex gap-10 items-center font-inter text-sm tracking-widest uppercase text-gray-300">
            <Link href="/hakkimda" className="hover:text-[#C9A84C] transition">Hakkımda</Link>
            <Link href="/deneyim" className="hover:text-[#C9A84C] transition">Deneyim</Link>
            <Link href="/makaleler" className="hover:text-[#C9A84C] transition">Makaleler</Link>
            <Link href="/iletisim" className="border border-[#C9A84C] text-[#C9A84C] px-5 py-2 hover:bg-[#C9A84C] hover:text-[#0D1B2A] transition">İletişim</Link>
          </div>

        </nav>

        {children}

      </body>
    </html>
  );
}
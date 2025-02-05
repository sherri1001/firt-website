import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "我的網站",
  description: "個人作品集網站",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold hover:opacity-50 transition-opacity">
              我的網站
            </Link>
            <div className="space-x-6">
              <Link href="/" className="hover:opacity-50 transition-opacity">首頁</Link>
              <Link href="/about" className="hover:opacity-50 transition-opacity">關於本站</Link>
              <Link href="/todo" className="hover:opacity-50 transition-opacity">代辦事項</Link>
              <Link href="/chat-room" className="hover:opacity-50 transition-opacity">聊天室</Link>
              <Link href="/contact" className="hover:opacity-50 transition-opacity">聯絡資訊</Link>
            </div>
          </div>
        </nav>
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}

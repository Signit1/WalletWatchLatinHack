import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/lib/providers/wagmi";
import { Navigation } from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WalletWatch - Mira antes de interactuar",
  description: "Semáforo de riesgo en tiempo real para wallets de criptomonedas. Análisis instantáneo con OFAC/FBI auto-flag.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white relative overflow-x-hidden`}
      >
        {/* Simple Background Effects */}
        <div className="fixed inset-0 -z-10">
          {/* Simple Grid */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `
              linear-gradient(rgba(0,245,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,245,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
          
          {/* Simple Floating Dots */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-float-1"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-float-2"></div>
          <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-green-400 rounded-full animate-float-3"></div>
        </div>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}

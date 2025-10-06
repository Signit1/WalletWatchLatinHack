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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-ww-bg text-ww-text relative overflow-x-hidden`}
      >
        {/* Futuristic Background Effects */}
        <div className="fixed inset-0 -z-10">
          {/* Animated Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-0 -left-4 w-72 h-72 bg-ww-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-ww-secondary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-ww-green/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          
          {/* Scanning Lines */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-ww-primary/5 to-transparent h-px animate-scan"></div>
        </div>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  );
}

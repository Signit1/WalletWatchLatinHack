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
          
          {/* Floating Dots */}
          <div className="absolute inset-0">
            {/* Small moving dots */}
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-ww-primary/60 rounded-full animate-float-1"></div>
            <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-ww-secondary/60 rounded-full animate-float-2"></div>
            <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-ww-green/60 rounded-full animate-float-3"></div>
            <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-ww-primary/40 rounded-full animate-float-4"></div>
            <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-ww-secondary/40 rounded-full animate-float-5"></div>
            <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-ww-green/40 rounded-full animate-float-6"></div>
            <div className="absolute top-1/5 left-3/4 w-1 h-1 bg-ww-primary/50 rounded-full animate-float-7"></div>
            <div className="absolute top-2/5 right-1/2 w-1 h-1 bg-ww-secondary/50 rounded-full animate-float-8"></div>
            <div className="absolute top-3/5 left-1/3 w-1 h-1 bg-ww-green/50 rounded-full animate-float-9"></div>
            <div className="absolute top-4/5 right-2/3 w-1 h-1 bg-ww-primary/30 rounded-full animate-float-10"></div>
            
            {/* Medium moving dots */}
            <div className="absolute top-1/4 right-1/5 w-2 h-2 bg-ww-primary/30 rounded-full animate-float-slow-1"></div>
            <div className="absolute top-1/2 left-1/5 w-2 h-2 bg-ww-secondary/30 rounded-full animate-float-slow-2"></div>
            <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-ww-green/30 rounded-full animate-float-slow-3"></div>
            <div className="absolute top-1/6 left-2/3 w-2 h-2 bg-ww-primary/20 rounded-full animate-float-slow-4"></div>
            <div className="absolute top-2/3 right-1/6 w-2 h-2 bg-ww-secondary/20 rounded-full animate-float-slow-5"></div>
          </div>
          
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

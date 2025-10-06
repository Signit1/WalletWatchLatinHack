'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Analizar', href: '/analyze' },
  { name: 'Historial', href: '/history' },
  { name: 'Suscripciones', href: '/subscription' },
  { name: 'Metodología', href: '/methodology' },
  { name: 'Test', href: '/test' },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 border-b border-cyan-400/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/analyze" className="flex items-center space-x-3">
            <Image
              src="/logo.svg"
              alt="WalletWatch Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-cyan-400">
              WalletWatch
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-cyan-400/10 text-cyan-400'
                    : 'text-gray-400 hover:text-white hover:bg-cyan-400/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden border-t border-cyan-400/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-cyan-400/10 text-cyan-400'
                    : 'text-gray-400 hover:text-white hover:bg-cyan-400/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

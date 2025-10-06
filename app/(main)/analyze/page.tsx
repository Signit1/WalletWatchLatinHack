import Image from 'next/image';
import { WalletAnalyzer } from '@/components/WalletAnalyzer';

export default function AnalyzePage() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative py-16 overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl"></div>
              <Image
                src="/logo.svg"
                alt="WalletWatch Logo"
                width={80}
                height={80}
                className="w-20 h-20 relative z-10"
              />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-cyan-400 mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            WalletWatch
          </h1>
          
          <p className="text-xl text-white mb-2">
            Mira antes de interactuar
          </p>
          
          <p className="text-gray-400 max-w-2xl mx-auto">
            Semáforo de riesgo en tiempo real (ETH/BTC/DOT). 
            <br />
            OFAC/FBI auto-flag. Análisis instantáneo de wallets.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <WalletAnalyzer />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              ¿Por qué WalletWatch?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Análisis Instantáneo
                </h3>
                <p className="text-gray-400">
                  Obtén resultados en segundos con nuestro motor de análisis optimizado
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Múltiples Fuentes
                </h3>
                <p className="text-gray-400">
                  Integración con OFAC, FBI, INTERPOL y más fuentes de confianza
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Transparencia Total
                </h3>
                <p className="text-gray-400">
                  Ve exactamente por qué una wallet es segura o riesgosa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

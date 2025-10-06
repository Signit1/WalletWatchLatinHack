import Image from 'next/image';
import { WalletAnalyzer } from '@/components/WalletAnalyzer';

export default function AnalyzePage() {
  return (
    <div className="min-h-screen relative">
      {/* Hero Section */}
      <div className="relative py-16 overflow-hidden">
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ww-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-ww-secondary/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-ww-primary/20 rounded-full blur-xl animate-glow"></div>
              <Image
                src="/logo.svg"
                alt="WalletWatch Logo"
                width={80}
                height={80}
                className="w-20 h-20 relative z-10"
              />
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-ww-primary mb-4 animate-slide-up bg-gradient-to-r from-ww-primary via-ww-secondary to-ww-primary bg-clip-text text-transparent">
            WalletWatch
          </h1>
          
          <p className="text-xl text-ww-text mb-2 animate-slide-up animation-delay-200">
            Mira antes de interactuar
          </p>
          
          <p className="text-ww-muted max-w-2xl mx-auto animate-slide-up animation-delay-400">
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
      <div className="bg-ww-bg/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-ww-text text-center mb-12">
              ¿Por qué WalletWatch?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-ww-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-ww-text mb-2">
                  Análisis Instantáneo
                </h3>
                <p className="text-ww-muted">
                  Obtén resultados en segundos con nuestro motor de análisis optimizado
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-ww-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-ww-text mb-2">
                  Múltiples Fuentes
                </h3>
                <p className="text-ww-muted">
                  Integración con OFAC, FBI, INTERPOL y más fuentes de confianza
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-ww-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-ww-text mb-2">
                  Transparencia Total
                </h3>
                <p className="text-ww-muted">
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

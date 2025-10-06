import Image from 'next/image';
import { WalletAnalyzer } from '@/components/WalletAnalyzer';

export default function AnalyzePage() {
  return (
    <div className="min-h-screen bg-ww-bg">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-ww-bg to-ww-bg/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.svg"
              alt="WalletWatch Logo"
              width={80}
              height={80}
              className="w-20 h-20"
            />
          </div>
          
          <h1 className="text-5xl font-bold text-ww-primary mb-4">
            WalletWatch
          </h1>
          
          <p className="text-xl text-ww-text mb-2">
            Mira antes de interactuar
          </p>
          
          <p className="text-ww-muted max-w-2xl mx-auto">
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

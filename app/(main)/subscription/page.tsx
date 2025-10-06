export default function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-ww-bg">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-ww-primary mb-8">
            Suscripciones
          </h1>
          
          <div className="bg-ww-bg border border-ww-primary/20 rounded-lg p-8 text-center">
            <div className="w-24 h-24 bg-ww-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl text-ww-secondary">💎</span>
            </div>
            
            <h2 className="text-2xl font-semibold text-ww-text mb-4">
              Próximamente
            </h2>
            
            <p className="text-ww-muted mb-6">
              Planes de suscripción para análisis avanzados, monitoreo continuo 
              y acceso a APIs premium.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-ww-bg border border-ww-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-ww-text mb-2">
                  Básico
                </h3>
                <div className="text-3xl font-bold text-ww-primary mb-4">
                  Gratis
                </div>
                <ul className="text-ww-muted text-left space-y-2">
                  <li>• 10 análisis por día</li>
                  <li>• Fuentes públicas</li>
                  <li>• Resultados básicos</li>
                </ul>
              </div>
              
              <div className="bg-ww-bg border border-ww-secondary/30 rounded-lg p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-ww-secondary text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Popular
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-ww-text mb-2">
                  Pro
                </h3>
                <div className="text-3xl font-bold text-ww-secondary mb-4">
                  $29/mes
                </div>
                <ul className="text-ww-muted text-left space-y-2">
                  <li>• Análisis ilimitados</li>
                  <li>• Fuentes premium</li>
                  <li>• Monitoreo continuo</li>
                  <li>• API access</li>
                </ul>
              </div>
              
              <div className="bg-ww-bg border border-ww-primary/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-ww-text mb-2">
                  Enterprise
                </h3>
                <div className="text-3xl font-bold text-ww-primary mb-4">
                  Custom
                </div>
                <ul className="text-ww-muted text-left space-y-2">
                  <li>• Todo de Pro</li>
                  <li>• Integraciones custom</li>
                  <li>• Soporte 24/7</li>
                  <li>• SLA garantizado</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

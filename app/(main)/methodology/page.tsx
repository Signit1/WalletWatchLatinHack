export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-ww-bg">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-ww-primary mb-8">
            Metodología de Scoring
          </h1>
          
          <div className="space-y-8">
            {/* Overview */}
            <div className="bg-ww-bg border border-ww-primary/20 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-ww-text mb-4">
                ¿Cómo calculamos el score?
              </h2>
              <p className="text-ww-muted mb-4">
                Nuestro sistema de scoring combina múltiples fuentes de datos y algoritmos 
                de machine learning para proporcionar una evaluación de riesgo precisa y actualizada.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-lg font-semibold text-ww-green mb-2">
                    Factores de Riesgo Bajo (1-3)
                  </h3>
                  <ul className="text-ww-muted space-y-1">
                    <li>• Wallets nuevas o con poca actividad</li>
                    <li>• Transacciones regulares y predecibles</li>
                    <li>• Interacciones con protocolos conocidos</li>
                    <li>• Sin historial de sanciones</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-ww-yellow mb-2">
                    Factores de Riesgo Medio (4-6)
                  </h3>
                  <ul className="text-ww-muted space-y-1">
                    <li>• Actividad mixta en múltiples protocolos</li>
                    <li>• Volúmenes de transacción variables</li>
                    <li>• Interacciones con protocolos experimentales</li>
                    <li>• Patrones de comportamiento atípicos</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-ww-red mb-2">
                  Factores de Riesgo Alto (7-10)
                </h3>
                <ul className="text-ww-muted space-y-1">
                  <li>• Presencia en listas de sanciones (OFAC, FBI, INTERPOL)</li>
                  <li>• Actividad relacionada con lavado de dinero</li>
                  <li>• Interacciones con protocolos de privacidad</li>
                  <li>• Patrones de transacciones sospechosas</li>
                  <li>• Conexiones con entidades sancionadas</li>
                </ul>
              </div>
            </div>

            {/* Data Sources */}
            <div className="bg-ww-bg border border-ww-primary/20 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-ww-text mb-4">
                Fuentes de Datos
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-ww-primary mb-3">
                    Fuentes Públicas
                  </h3>
                  <ul className="text-ww-muted space-y-2">
                    <li>• <strong>OFAC:</strong> Lista de sanciones del Tesoro de EE.UU.</li>
                    <li>• <strong>FBI:</strong> Lista de personas buscadas</li>
                    <li>• <strong>INTERPOL:</strong> Notificaciones rojas</li>
                    <li>• <strong>EU:</strong> Lista de sanciones europeas</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-ww-secondary mb-3">
                    Fuentes Premium
                  </h3>
                  <ul className="text-ww-muted space-y-2">
                    <li>• <strong>Chainalysis:</strong> Análisis de blockchain</li>
                    <li>• <strong>Elliptic:</strong> Detección de riesgos</li>
                    <li>• <strong>Fireblocks:</strong> Datos institucionales</li>
                    <li>• <strong>Alchemy:</strong> Datos de transacciones</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Scoring Algorithm */}
            <div className="bg-ww-bg border border-ww-primary/20 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-ww-text mb-4">
                Algoritmo de Scoring
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-ww-red rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-ww-text">Verificación de Sanciones</h4>
                    <p className="text-ww-muted text-sm">Si se detectan sanciones → Score automático 9.6</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-ww-yellow rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-ww-text">Análisis de Patrones</h4>
                    <p className="text-ww-muted text-sm">Evaluación de comportamiento transaccional</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-ww-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-ww-text">Cálculo Final</h4>
                    <p className="text-ww-muted text-sm">Combinación ponderada de todos los factores</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-ww-red/5 border border-ww-red/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-ww-red mb-2">
                ⚠️ Descargo de Responsabilidad
              </h3>
              <p className="text-ww-muted text-sm">
                Los scores de WalletWatch son para fines informativos únicamente. 
                No constituyen asesoramiento financiero, legal o de inversión. 
                Siempre realiza tu propia investigación antes de interactuar con cualquier wallet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

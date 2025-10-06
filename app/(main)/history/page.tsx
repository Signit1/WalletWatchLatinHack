export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-ww-bg">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-ww-primary mb-8">
            Historial de Análisis
          </h1>
          
          <div className="bg-ww-bg border border-ww-primary/20 rounded-lg p-8 text-center">
            <div className="w-24 h-24 bg-ww-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl text-ww-primary">📊</span>
            </div>
            
            <h2 className="text-2xl font-semibold text-ww-text mb-4">
              Próximamente
            </h2>
            
            <p className="text-ww-muted mb-6">
              Aquí podrás ver el historial completo de tus análisis de wallets, 
              incluyendo timestamps, scores y resultados detallados.
            </p>
            
            <div className="bg-ww-primary/5 border border-ww-primary/20 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-ww-text mb-2">
                Funcionalidades Planificadas
              </h3>
              <ul className="text-ww-muted text-left space-y-1">
                <li>• Historial completo de análisis</li>
                <li>• Filtros por fecha y blockchain</li>
                <li>• Exportación de reportes</li>
                <li>• Alertas de cambios en wallets monitoreadas</li>
                <li>• Comparación de análisis históricos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

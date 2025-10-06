import { WalletAnalyzer } from '@/components/WalletAnalyzer'
import { Shield, Database, AlertTriangle, CheckCircle } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">WalletWatch</h1>
              <p className="text-sm text-gray-400">Professional Risk Analysis</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <WalletAnalyzer />
      </main>

      {/* Features Section */}
      <section className="py-16 bg-gray-900/30 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Trusted by Compliance Teams
            </h2>
            <p className="text-gray-400 text-lg">
              Comprehensive risk assessment using industry-leading blockchain intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Multi-Provider Analysis
              </h3>
              <p className="text-gray-400">
                Integrates with Alchemy, Elliptic, Fireblocks, Bridge, and Chainalysis for comprehensive coverage
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Real-time Sanctions
              </h3>
              <p className="text-gray-400">
                Instant detection of OFAC, FBI, and international sanctions lists with immediate alerts
              </p>
            </div>

            <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Compliance Ready
              </h3>
              <p className="text-gray-400">
                Detailed reports and audit trails for regulatory compliance and due diligence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 WalletWatch. Professional blockchain risk analysis platform.
          </p>
        </div>
      </footer>
    </div>
  )
}
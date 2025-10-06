'use client'

import { useState } from 'react'
import { WalletAnalysis } from '@/types/analysis'
import { analyzeWallet } from '@/lib/analysis-service'
import { isValidWalletAddress, getRiskColor } from '@/lib/utils'
import { Search, AlertTriangle, Shield, Clock } from 'lucide-react'
import { TrafficLight } from './TrafficLight'
import { ProviderCard } from './ProviderCard'

export function WalletAnalyzer() {
  const [address, setAddress] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<WalletAnalysis | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleAnalyze = async () => {
    if (!address.trim()) {
      setError('Please enter a wallet address')
      return
    }

    if (!isValidWalletAddress(address)) {
      setError('Please enter a valid Ethereum or Bitcoin address')
      return
    }

    setIsAnalyzing(true)
    setError(null)
    setResult(null)

    try {
      const analysis = await analyzeWallet(address)
      setResult(analysis)
    } catch {
      setError('Failed to analyze wallet. Please try again.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isAnalyzing) {
      handleAnalyze()
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">
          Wallet Risk Analysis
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Comprehensive risk assessment using multiple blockchain intelligence providers
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-gradient-to-r from-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-white mb-2">
              Enter Wallet Address
            </h2>
            <p className="text-gray-400">
              Analyze Ethereum or Bitcoin addresses for compliance and risk
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="0x... (Ethereum) or 1... (Bitcoin)"
                className="w-full px-6 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-lg"
                disabled={isAnalyzing}
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing || !address.trim()}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-2"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  <span>Analyze Wallet</span>
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="flex items-center space-x-2 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <p className="text-red-400">{error}</p>
            </div>
          )}
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className="space-y-8">
          {/* Overall Risk Summary */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-600 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Risk Assessment Summary
                </h2>
                <p className="text-gray-400">
                  Address: <span className="font-mono text-blue-400">{result.address}</span>
                </p>
              </div>
              <TrafficLight riskLevel={result.riskLevel} size="lg" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className={`text-4xl font-bold ${getRiskColor(result.riskLevel)} mb-2`}>
                  {result.overallScore.toFixed(1)}
                </div>
                <p className="text-gray-400">Overall Risk Score</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {result.providers.length}
                </div>
                <p className="text-gray-400">Providers Analyzed</p>
              </div>
              <div className="text-center">
                <div className={`text-4xl font-bold ${result.sanctions.isSanctioned ? 'text-red-400' : 'text-green-400'} mb-2`}>
                  {result.sanctions.isSanctioned ? '⚠️' : '✅'}
                </div>
                <p className="text-gray-400">Sanction Status</p>
              </div>
            </div>

            {/* Sanction Alert */}
            {result.sanctions.isSanctioned && (
              <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <h3 className="text-lg font-semibold text-red-400">
                    SANCTIONED ADDRESS DETECTED
                  </h3>
                </div>
                <p className="text-red-300 mb-2">
                  This address appears on the following lists:
                </p>
                <div className="flex flex-wrap gap-2">
                  {result.sanctions.lists.map((list, index) => (
                    <span key={index} className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">
                      {list}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Provider Results */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Provider Analysis Results
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {result.providers.map((provider, index) => (
                <ProviderCard key={index} provider={provider} />
              ))}
            </div>
          </div>

          {/* Analysis Metadata */}
          <div className="bg-gray-800/30 border border-gray-600 rounded-xl p-6">
            <div className="flex items-center justify-between text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>Analysis completed on {new Date(result.analysisDate).toLocaleString()}</span>
              </div>
              <div>
                <span>Blockchain: </span>
                <span className="text-blue-400 capitalize">{result.blockchain}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

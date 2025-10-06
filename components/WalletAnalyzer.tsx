'use client';

import React, { useState } from 'react';
import { AnalysisResult } from './AnalysisResult';

interface AnalyzeResponse {
  address: string;
  chain: "ETH" | "BTC" | "DOT";
  score: number;
  status: "approved" | "review" | "blocked";
  nickname: string;
  tagline: string;
  sanctions: Array<{
    authority: string;
    label: string;
    severity: string;
  }>;
  categories: string[];
}

export function WalletAnalyzer() {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalyzeResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!address.trim()) {
      setError('Por favor ingresa una dirección de wallet');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: address.trim(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al analizar la wallet');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAnalyze();
    }
  };

  return (
    <div className="space-y-8">
      {/* Input Form */}
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-8 shadow-xl">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">
            Analizar Wallet
          </h3>
          <p className="text-gray-400">
            Ingresa una dirección para obtener un análisis completo de riesgo
          </p>
        </div>
        
        <div className="space-y-6">
          {/* Address Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Dirección de Wallet
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="0x... (ETH) | 1... (BTC) | 1... (DOT) | vitalik.eth (ENS)"
              className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all duration-300 text-lg"
            />
            <p className="text-xs text-gray-500 mt-2">
              Soporta direcciones ETH, BTC, DOT y nombres ENS. La blockchain se detecta automáticamente.
            </p>
          </div>

          {/* Analyze Button */}
          <button
            onClick={handleAnalyze}
            disabled={loading || !address.trim()}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-cyan-500/25 text-lg"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                Analizando...
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></span>
                Analizar con WalletWatch
              </div>
            )}
          </button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}
      </div>

      {/* Results */}
      {result && (
        <AnalysisResult
          address={result.address}
          chain={result.chain}
          score={result.score}
          status={result.status}
          nickname={result.nickname}
          tagline={result.tagline}
          sanctions={result.sanctions}
          categories={result.categories}
        />
      )}
    </div>
  );
}
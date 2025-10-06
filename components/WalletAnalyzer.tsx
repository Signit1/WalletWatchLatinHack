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
    <div className="space-y-6">
      {/* Input Form */}
      <div className="bg-ww-bg/80 backdrop-blur-sm border border-ww-primary/30 rounded-lg p-6 relative overflow-hidden animate-slide-up">
        {/* Futuristic border effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-ww-primary/10 via-transparent to-ww-secondary/10 rounded-lg opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ww-primary to-transparent"></div>
        
        <div className="relative z-10">
          <h3 className="text-xl font-bold text-ww-text mb-4 flex items-center">
            <span className="w-2 h-2 bg-ww-primary rounded-full mr-3 animate-pulse"></span>
            Analizar Wallet
          </h3>
        
        <div className="space-y-4">
          {/* Address Input */}
          <div>
            <label className="block text-sm font-medium text-ww-text mb-2">
              Dirección de Wallet
            </label>
            <div className="relative">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="0x... (ETH) | 1... (BTC) | 1... (DOT) | vitalik.eth (ENS)"
                className="w-full px-3 py-2 bg-gray-900/50 backdrop-blur-sm border border-ww-primary/30 rounded-md text-ww-text placeholder-ww-muted focus:outline-none focus:ring-2 focus:ring-ww-primary/50 focus:border-ww-primary/60 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ww-primary/5 to-ww-secondary/5 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            <p className="text-xs text-ww-muted mt-1">
              Soporta direcciones ETH, BTC, DOT y nombres ENS. La blockchain se detecta automáticamente.
            </p>
          </div>

          {/* Analyze Button */}
          <button
            onClick={handleAnalyze}
            disabled={loading || !address.trim()}
            className="w-full relative bg-gradient-to-r from-ww-primary to-ww-secondary hover:from-ww-primary/80 hover:to-ww-secondary/80 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-black font-semibold py-3 px-4 rounded-md transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-ww-primary/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-ww-primary/20 to-ww-secondary/20 rounded-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center justify-center">
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2"></div>
                  Analizando...
                </>
              ) : (
                <>
                  <span className="w-2 h-2 bg-black rounded-full mr-2 animate-pulse"></span>
                  Analizar con WalletWatch
                </>
              )}
            </span>
          </button>
        </div>

        {/* Error Display */}
        {error && (
          <div className="mt-4 p-3 bg-ww-red/10 border border-ww-red/30 rounded-md">
            <p className="text-ww-red text-sm">{error}</p>
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

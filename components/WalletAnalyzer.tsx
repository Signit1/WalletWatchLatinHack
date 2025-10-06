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
      <div className="bg-ww-bg border border-ww-primary/20 rounded-lg p-6">
        <h3 className="text-xl font-bold text-ww-text mb-4">
          Analizar Wallet
        </h3>
        
        <div className="space-y-4">
          {/* Address Input */}
          <div>
            <label className="block text-sm font-medium text-ww-text mb-2">
              Dirección de Wallet
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="0x... (ETH) | 1... (BTC) | 1... (DOT) | vitalik.eth (ENS)"
              className="w-full px-3 py-2 bg-gray-900 border border-ww-primary/30 rounded-md text-ww-text placeholder-ww-muted focus:outline-none focus:ring-2 focus:ring-ww-primary/50"
            />
            <p className="text-xs text-ww-muted mt-1">
              Soporta direcciones ETH, BTC, DOT y nombres ENS. La blockchain se detecta automáticamente.
            </p>
          </div>

          {/* Analyze Button */}
          <button
            onClick={handleAnalyze}
            disabled={loading || !address.trim()}
            className="w-full bg-ww-primary hover:bg-ww-primary/80 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold py-3 px-4 rounded-md transition-colors"
          >
            {loading ? 'Analizando...' : 'Analizar con WalletWatch'}
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

      {/* Example Addresses */}
      <div className="bg-ww-bg border border-ww-primary/20 rounded-lg p-6">
        <h4 className="text-lg font-semibold text-ww-text mb-3">
          Direcciones de Prueba
        </h4>
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <span className="text-ww-muted">Wallet sancionada (OFAC):</span>
            <button
              onClick={() => {
                setAddress('0x8576acc5c05d6ce88f4e49bf65bdf0c62f91353c');
              }}
              className="text-ww-primary hover:text-ww-primary/80 underline"
            >
              Copiar
            </button>
          </div>
          <div className="text-xs text-ww-muted font-mono break-all">
            0x8576acc5c05d6ce88f4e49bf65bdf0c62f91353c
          </div>
          
          <div className="flex items-center justify-between mt-3">
            <span className="text-ww-muted">ENS de prueba:</span>
            <button
              onClick={() => {
                setAddress('test.eth');
              }}
              className="text-ww-primary hover:text-ww-primary/80 underline"
            >
              Copiar
            </button>
          </div>
          <div className="text-xs text-ww-muted font-mono">
            test.eth
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { useAccount, useConnect, useDisconnect, useChainId, useSwitchChain } from 'wagmi';
// import { paseoClient } from '@/lib/onchain/client';
// import { NFT_CONTRACT_ADDRESS, NETWORKS } from '@/lib/onchain/address';
// import RiskCertificateNFTABI from '@/lib/onchain/abi/RiskCertificateNFT.json';

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

export default function TestPage() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  // const { switchChain } = useSwitchChain();
  
  const [analyzeAddress, setAnalyzeAddress] = useState('');
  const [analysisResult, setAnalysisResult] = useState<AnalyzeResponse | null>(null);
  const [loading, setLoading] = useState(false);
  // const [minting, setMinting] = useState(false);
  // const [txHash, setTxHash] = useState<string | null>(null);
  // const [tokenId, setTokenId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [readTokenId, setReadTokenId] = useState('');
  // const [tokenMetadata, setTokenMetadata] = useState<Record<string, unknown> | null>(null);

  const isPaseoNetwork = false; // Temporarily disabled for deployment

  const handleAnalyze = async () => {
    if (!analyzeAddress.trim()) {
      setError('Por favor ingresa una dirección de wallet');
      return;
    }

    setLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: analyzeAddress.trim(),
          chain: 'ETH',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error al analizar la wallet');
      }

      const data = await response.json();
      setAnalysisResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const handleMintCertificate = async () => {
    setError('Funcionalidad de minting deshabilitada temporalmente para el deploy. Se habilitará cuando se configure la red Paseo.');
  };

  const handleReadToken = async () => {
    setError('Funcionalidad de lectura de tokens deshabilitada temporalmente para el deploy.');
  };

  return (
    <div className="min-h-screen bg-ww-bg">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-ww-primary mb-8">
            Test Page - Wallet Connection & NFT Minting
          </h1>

          {/* Wallet Connection */}
          <div className="bg-ww-bg border border-ww-primary/20 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-ww-text mb-4">
              Wallet Connection
            </h2>
            
            {!isConnected ? (
              <div className="space-y-4">
                <p className="text-ww-muted">Conecta tu wallet para continuar</p>
                {connectors.map((connector) => (
                  <button
                    key={connector.uid}
                    onClick={() => connect({ connector })}
                    className="w-full bg-ww-primary hover:bg-ww-primary/80 text-black font-semibold py-3 px-4 rounded-md transition-colors"
                  >
                    Conectar {connector.name}
                  </button>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-ww-text">Conectado: {address}</p>
                    <p className="text-ww-muted">Chain ID: {chainId || 'Desconocida'}</p>
                  </div>
                  <button
                    onClick={() => disconnect()}
                    className="bg-ww-red hover:bg-ww-red/80 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                  >
                    Desconectar
                  </button>
                </div>

                {!isPaseoNetwork && (
                  <div className="bg-ww-yellow/10 border border-ww-yellow/30 rounded-lg p-4">
                    <p className="text-ww-yellow mb-2">
                      ⚠️ Por favor cambia a la red Paseo para mintear certificados
                    </p>
                    <button
                      onClick={() => alert('Funcionalidad de cambio de red deshabilitada temporalmente')}
                      className="bg-ww-yellow hover:bg-ww-yellow/80 text-black font-semibold py-2 px-4 rounded-md transition-colors"
                    >
                      Cambiar a Paseo
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Analysis Section */}
          <div className="bg-ww-bg border border-ww-primary/20 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-semibold text-ww-text mb-4">
              Analizar y Mintear Certificado
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-ww-text mb-2">
                  Wallet a Analizar
                </label>
                <input
                  type="text"
                  value={analyzeAddress}
                  onChange={(e) => setAnalyzeAddress(e.target.value)}
                  placeholder="0x..."
                  className="w-full px-3 py-2 bg-gray-900 border border-ww-primary/30 rounded-md text-ww-text placeholder-ww-muted focus:outline-none focus:ring-2 focus:ring-ww-primary/50"
                />
              </div>

              <button
                onClick={handleAnalyze}
                disabled={loading}
                className="w-full bg-ww-primary hover:bg-ww-primary/80 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold py-3 px-4 rounded-md transition-colors"
              >
                {loading ? 'Analizando...' : 'Analizar Wallet'}
              </button>

              {analysisResult && (
                <div className="bg-ww-bg border border-ww-primary/20 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-ww-text mb-2">
                    Resultado del Análisis
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-ww-muted">Score:</span> {analysisResult.score}</p>
                    <p><span className="text-ww-muted">Status:</span> {analysisResult.status}</p>
                    <p><span className="text-ww-muted">Nickname:</span> {analysisResult.nickname}</p>
                    <p><span className="text-ww-muted">Tagline:</span> {analysisResult.tagline}</p>
                  </div>

                  {isConnected && (
                    <button
                      onClick={handleMintCertificate}
                      className="mt-4 w-full bg-ww-secondary hover:bg-ww-secondary/80 text-white font-semibold py-3 px-4 rounded-md transition-colors"
                    >
                      Mintear Certificado NFT (Demo)
                    </button>
                  )}
                </div>
              )}

              {/* NFT minting results temporarily disabled */}
            </div>
          </div>

          {/* Read Token Section */}
          <div className="bg-ww-bg border border-ww-primary/20 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-ww-text mb-4">
              Leer Certificado
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-ww-text mb-2">
                  Token ID
                </label>
                <input
                  type="text"
                  value={readTokenId}
                  onChange={(e) => setReadTokenId(e.target.value)}
                  placeholder="0"
                  className="w-full px-3 py-2 bg-gray-900 border border-ww-primary/30 rounded-md text-ww-text placeholder-ww-muted focus:outline-none focus:ring-2 focus:ring-ww-primary/50"
                />
              </div>

              <button
                onClick={handleReadToken}
                className="w-full bg-ww-primary hover:bg-ww-primary/80 text-black font-semibold py-3 px-4 rounded-md transition-colors"
              >
                Leer Metadata
              </button>

              {/* Token metadata display temporarily disabled */}
            </div>
          </div>

          {/* Error Display */}
          {error && (
            <div className="mt-8 p-4 bg-ww-red/10 border border-ww-red/30 rounded-lg">
              <p className="text-ww-red">{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

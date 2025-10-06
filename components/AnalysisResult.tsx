import React from 'react';
import { TrafficLight } from './TrafficLight';

interface AnalysisResultProps {
  address: string;
  chain: string;
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

export function AnalysisResult({
  address,
  chain,
  score,
  status,
  nickname,
  tagline,
  sanctions,
  categories
}: AnalysisResultProps) {
  const getStatusColor = () => {
    switch (status) {
      case "approved": return "text-green-400";
      case "review": return "text-yellow-400";
      case "blocked": return "text-red-400";
      default: return "text-white";
    }
  };

  const getTrafficStatus = () => {
    switch (status) {
      case "approved": return "green";
      case "review": return "yellow";
      case "blocked": return "red";
      default: return "green";
    }
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-xl p-8 space-y-8 shadow-xl">
      {/* Header with Traffic Light */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <TrafficLight status={getTrafficStatus()} />
          <div>
            <h3 className="text-2xl font-bold text-white flex items-center">
              <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              Análisis Completado
            </h3>
            <p className="text-gray-400 text-sm font-mono mt-1">
              {address} ({chain})
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className={`text-4xl font-bold ${getStatusColor()}`}>
            {score.toFixed(1)}
          </div>
          <div className="text-gray-400 text-sm">Score</div>
        </div>
      </div>

      {/* Nickname and Tagline */}
      <div className="text-center py-6 border-t border-b border-gray-600">
        <h2 className="text-3xl font-bold text-cyan-400 mb-2">{nickname}</h2>
        <p className="text-gray-300 italic text-lg">&ldquo;{tagline}&rdquo;</p>
      </div>

      {/* Sanctions Table */}
      {sanctions.length > 0 && (
        <div>
          <h4 className="text-xl font-semibold text-red-400 mb-4 flex items-center">
            <span className="text-2xl mr-2">⚠️</span>
            Sanciones Detectadas
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-gray-900/50 rounded-lg overflow-hidden">
              <thead>
                <tr className="border-b border-gray-600 bg-gray-800/50">
                  <th className="text-left py-3 px-4 text-gray-300 font-medium">Autoridad</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-medium">Etiqueta</th>
                  <th className="text-left py-3 px-4 text-gray-300 font-medium">Severidad</th>
                </tr>
              </thead>
              <tbody>
                {sanctions.map((sanction, index) => (
                  <tr key={index} className="border-b border-gray-700/50">
                    <td className="py-3 px-4 text-gray-400">{sanction.authority}</td>
                    <td className="py-3 px-4 text-white">{sanction.label}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        sanction.severity === 'High' 
                          ? 'bg-red-500/20 text-red-400' 
                          : sanction.severity === 'Medium'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-green-500/20 text-green-400'
                      }`}>
                        {sanction.severity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Categories */}
      <div>
        <h4 className="text-xl font-semibold text-white mb-4">
          Categorías Detectadas
        </h4>
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Status Summary */}
      <div className="bg-gray-700/30 border border-gray-600 rounded-lg p-6">
        <div className="flex items-center space-x-3">
          <div className={`w-4 h-4 rounded-full ${
            status === "approved" ? "bg-green-400" :
            status === "review" ? "bg-yellow-400" : "bg-red-400"
          }`} />
          <span className="font-semibold text-white text-lg">
            Estado: {status === "approved" ? "Aprobado" : 
                    status === "review" ? "En Revisión" : "Bloqueado"}
          </span>
        </div>
        <p className="text-gray-400 mt-2">
          {status === "approved" && "Esta wallet es segura para interactuar."}
          {status === "review" && "Se recomienda precaución antes de interactuar."}
          {status === "blocked" && "Esta wallet presenta riesgos significativos."}
        </p>
      </div>
    </div>
  );
}

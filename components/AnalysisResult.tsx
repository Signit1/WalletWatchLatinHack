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
      case "approved": return "text-ww-green";
      case "review": return "text-ww-yellow";
      case "blocked": return "text-ww-red";
      default: return "text-ww-text";
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
    <div className="bg-ww-bg/80 backdrop-blur-sm border border-ww-primary/30 rounded-lg p-6 space-y-6 relative overflow-hidden animate-slide-up">
      {/* Futuristic background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-ww-primary/5 via-transparent to-ww-secondary/5 rounded-lg"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ww-primary to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-ww-secondary to-transparent"></div>
      {/* Header with Traffic Light */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-4">
          <TrafficLight status={getTrafficStatus()} />
          <div>
            <h3 className="text-xl font-bold text-ww-text flex items-center">
              <span className="w-2 h-2 bg-ww-green rounded-full mr-3 animate-pulse"></span>
              Análisis Completado
            </h3>
            <p className="text-ww-muted text-sm font-mono">
              {address} ({chain})
            </p>
          </div>
        </div>
        <div className="text-right">
          <div className={`text-3xl font-bold ${getStatusColor()} relative`}>
            <div className="absolute inset-0 bg-gradient-to-r from-current/20 to-transparent rounded blur-sm"></div>
            <span className="relative z-10">{score.toFixed(1)}</span>
          </div>
          <div className="text-ww-muted text-sm">Score</div>
        </div>
      </div>

      {/* Nickname and Tagline */}
      <div className="text-center py-4 border-t border-b border-ww-primary/10">
        <h2 className="text-2xl font-bold text-ww-primary">{nickname}</h2>
        <p className="text-ww-muted italic">&ldquo;{tagline}&rdquo;</p>
      </div>

      {/* Sanctions Table */}
      {sanctions.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-ww-red mb-3">
            ⚠️ Sanciones Detectadas
          </h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-ww-primary/20">
                  <th className="text-left py-2 text-ww-text">Autoridad</th>
                  <th className="text-left py-2 text-ww-text">Etiqueta</th>
                  <th className="text-left py-2 text-ww-text">Severidad</th>
                </tr>
              </thead>
              <tbody>
                {sanctions.map((sanction, index) => (
                  <tr key={index} className="border-b border-ww-primary/10">
                    <td className="py-2 text-ww-muted">{sanction.authority}</td>
                    <td className="py-2 text-ww-text">{sanction.label}</td>
                    <td className="py-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        sanction.severity === 'high' 
                          ? 'bg-ww-red/20 text-ww-red' 
                          : sanction.severity === 'medium'
                          ? 'bg-ww-yellow/20 text-ww-yellow'
                          : 'bg-ww-green/20 text-ww-green'
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
        <h4 className="text-lg font-semibold text-ww-text mb-3">
          Categorías Detectadas
        </h4>
        <div className="flex flex-wrap gap-2">
          {categories.map((category, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-ww-secondary/20 text-ww-secondary rounded-full text-sm font-medium"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Status Summary */}
      <div className="bg-ww-primary/5 border border-ww-primary/20 rounded-lg p-4">
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${
            status === "approved" ? "bg-ww-green" :
            status === "review" ? "bg-ww-yellow" : "bg-ww-red"
          }`} />
          <span className="font-semibold text-ww-text">
            Estado: {status === "approved" ? "Aprobado" : 
                    status === "review" ? "En Revisión" : "Bloqueado"}
          </span>
        </div>
        <p className="text-ww-muted text-sm mt-1">
          {status === "approved" && "Esta wallet es segura para interactuar."}
          {status === "review" && "Se recomienda precaución antes de interactuar."}
          {status === "blocked" && "Esta wallet presenta riesgos significativos."}
        </p>
      </div>
    </div>
  );
}

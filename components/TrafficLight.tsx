import React from 'react';

interface TrafficLightProps {
  status: "green" | "yellow" | "red";
  label?: string;
}

export function TrafficLight({ status, label }: TrafficLightProps) {
  const getStatusLabel = () => {
    if (label) return label;
    switch (status) {
      case "green": return "Seguro";
      case "yellow": return "Precaución";
      case "red": return "Bloqueado";
      default: return "Desconocido";
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex flex-col space-y-2 relative">
        {/* Futuristic container */}
        <div className="absolute inset-0 bg-gradient-to-b from-ww-primary/10 to-ww-secondary/10 rounded-lg blur-sm"></div>
        
        {/* Green light */}
        <div 
          className={`w-4 h-4 rounded-full border-2 relative ${
            status === "green" 
              ? "bg-ww-green border-ww-green shadow-lg shadow-ww-green/50 animate-pulse" 
              : "bg-gray-800 border-gray-600"
          }`}
        >
          {status === "green" && (
            <div className="absolute inset-0 bg-ww-green rounded-full blur-sm animate-glow"></div>
          )}
        </div>
        
        {/* Yellow light */}
        <div 
          className={`w-4 h-4 rounded-full border-2 relative ${
            status === "yellow" 
              ? "bg-ww-yellow border-ww-yellow shadow-lg shadow-ww-yellow/50 animate-pulse" 
              : "bg-gray-800 border-gray-600"
          }`}
        >
          {status === "yellow" && (
            <div className="absolute inset-0 bg-ww-yellow rounded-full blur-sm animate-glow"></div>
          )}
        </div>
        
        {/* Red light */}
        <div 
          className={`w-4 h-4 rounded-full border-2 relative ${
            status === "red" 
              ? "bg-ww-red border-ww-red shadow-lg shadow-ww-red/50 animate-pulse" 
              : "bg-gray-800 border-gray-600"
          }`}
        >
          {status === "red" && (
            <div className="absolute inset-0 bg-ww-red rounded-full blur-sm animate-glow"></div>
          )}
        </div>
      </div>
      
      {label && (
        <span className="text-sm font-medium text-ww-text">
          {getStatusLabel()}
        </span>
      )}
    </div>
  );
}

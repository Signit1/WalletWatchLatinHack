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
      <div className="flex flex-col space-y-2">
        {/* Green light */}
        <div 
          className={`w-4 h-4 rounded-full border-2 ${
            status === "green" 
              ? "bg-ww-green border-ww-green shadow-lg shadow-ww-green/50" 
              : "bg-gray-800 border-gray-600"
          }`}
        />
        
        {/* Yellow light */}
        <div 
          className={`w-4 h-4 rounded-full border-2 ${
            status === "yellow" 
              ? "bg-ww-yellow border-ww-yellow shadow-lg shadow-ww-yellow/50" 
              : "bg-gray-800 border-gray-600"
          }`}
        />
        
        {/* Red light */}
        <div 
          className={`w-4 h-4 rounded-full border-2 ${
            status === "red" 
              ? "bg-ww-red border-ww-red shadow-lg shadow-ww-red/50" 
              : "bg-gray-800 border-gray-600"
          }`}
        />
      </div>
      
      {label && (
        <span className="text-sm font-medium text-ww-text">
          {getStatusLabel()}
        </span>
      )}
    </div>
  );
}

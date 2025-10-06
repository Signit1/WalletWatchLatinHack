'use client'

import { cn } from '@/lib/utils'

interface TrafficLightProps {
  riskLevel: 'low' | 'medium' | 'high'
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
}

export function TrafficLight({ riskLevel, size = 'md', showLabel = true }: TrafficLightProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-6 h-6'
  }

  const getStatusInfo = () => {
    switch (riskLevel) {
      case 'low':
        return {
          color: 'bg-green-500',
          label: 'Low Risk',
          textColor: 'text-green-500'
        }
      case 'medium':
        return {
          color: 'bg-yellow-500',
          label: 'Medium Risk',
          textColor: 'text-yellow-500'
        }
      case 'high':
        return {
          color: 'bg-red-500',
          label: 'High Risk',
          textColor: 'text-red-500'
        }
    }
  }

  const status = getStatusInfo()

  return (
    <div className="flex items-center space-x-3">
      <div className="flex flex-col items-center space-y-1">
        {/* Traffic Light Container */}
        <div className="flex flex-col space-y-1 p-2 bg-gray-800 rounded-lg border border-gray-700">
          {/* Red Light */}
          <div className={cn(
            sizeClasses[size],
            'rounded-full border-2 transition-all duration-300',
            riskLevel === 'high' 
              ? 'bg-red-500 border-red-400 shadow-lg shadow-red-500/50' 
              : 'bg-gray-600 border-gray-500'
          )} />
          
          {/* Yellow Light */}
          <div className={cn(
            sizeClasses[size],
            'rounded-full border-2 transition-all duration-300',
            riskLevel === 'medium' 
              ? 'bg-yellow-500 border-yellow-400 shadow-lg shadow-yellow-500/50' 
              : 'bg-gray-600 border-gray-500'
          )} />
          
          {/* Green Light */}
          <div className={cn(
            sizeClasses[size],
            'rounded-full border-2 transition-all duration-300',
            riskLevel === 'low' 
              ? 'bg-green-500 border-green-400 shadow-lg shadow-green-500/50' 
              : 'bg-gray-600 border-gray-500'
          )} />
        </div>
        
        {showLabel && (
          <span className={cn('text-xs font-medium', status.textColor)}>
            {status.label}
          </span>
        )}
      </div>
    </div>
  )
}

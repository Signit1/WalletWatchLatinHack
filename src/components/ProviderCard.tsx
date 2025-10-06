'use client'

import { ProviderResult } from '@/types/analysis'
import { cn, getRiskColor, getRiskBgColor } from '@/lib/utils'
import { CheckCircle, AlertCircle, XCircle, Clock } from 'lucide-react'

interface ProviderCardProps {
  provider: ProviderResult
}

export function ProviderCard({ provider }: ProviderCardProps) {
  const getStatusIcon = () => {
    switch (provider.status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />
      case 'error':
        return <XCircle className="w-5 h-5 text-red-500" />
    }
  }

  const getStatusColor = () => {
    switch (provider.status) {
      case 'success':
        return 'border-green-500/20 bg-green-500/5'
      case 'warning':
        return 'border-yellow-500/20 bg-yellow-500/5'
      case 'error':
        return 'border-red-500/20 bg-red-500/5'
    }
  }

  return (
    <div className={cn(
      'p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg',
      getStatusColor()
    )}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {getStatusIcon()}
          <h3 className="text-lg font-semibold text-white">{provider.name}</h3>
        </div>
        <div className="flex items-center space-x-2">
          <div className={cn(
            'px-3 py-1 rounded-full text-xs font-medium',
            getRiskBgColor(provider.riskLevel),
            'text-white'
          )}>
            {provider.score.toFixed(1)}
          </div>
        </div>
      </div>

      {/* Score Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Risk Score</span>
          <span className={getRiskColor(provider.riskLevel)}>
            {provider.riskLevel.toUpperCase()}
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className={cn(
              'h-2 rounded-full transition-all duration-500',
              getRiskBgColor(provider.riskLevel)
            )}
            style={{ width: `${(provider.score / 10) * 100}%` }}
          />
        </div>
      </div>

      {/* Details */}
      <p className="text-gray-300 text-sm mb-4">{provider.details}</p>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-1">
          <Clock className="w-3 h-3" />
          <span>Updated {new Date(provider.lastUpdated).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  )
}

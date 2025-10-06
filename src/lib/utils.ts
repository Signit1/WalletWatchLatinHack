import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Wallet validation utilities
export function isValidEthereumAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address)
}

export function isValidBitcoinAddress(address: string): boolean {
  return /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address) || /^bc1[a-z0-9]{39,59}$/.test(address)
}

export function isValidWalletAddress(address: string): boolean {
  return isValidEthereumAddress(address) || isValidBitcoinAddress(address)
}

// Risk scoring utilities
export function calculateOverallRisk(providerScores: Record<string, number>): number {
  const scores = Object.values(providerScores)
  if (scores.length === 0) return 0
  return scores.reduce((sum, score) => sum + score, 0) / scores.length
}

export function getRiskLevel(score: number): 'low' | 'medium' | 'high' {
  if (score >= 7) return 'high'
  if (score >= 4) return 'medium'
  return 'low'
}

export function getRiskColor(level: 'low' | 'medium' | 'high'): string {
  switch (level) {
    case 'low': return 'text-green-500'
    case 'medium': return 'text-yellow-500'
    case 'high': return 'text-red-500'
  }
}

export function getRiskBgColor(level: 'low' | 'medium' | 'high'): string {
  switch (level) {
    case 'low': return 'bg-green-500'
    case 'medium': return 'bg-yellow-500'
    case 'high': return 'bg-red-500'
  }
}

import { WalletAnalysis, ProviderResult, SanctionCheck } from '@/types/analysis'
import { getRiskLevel } from './utils'

// Mock data for demonstration
const PROVIDERS = [
  'Alchemy',
  'Elliptic',
  'Fireblocks',
  'Bridge',
  'Chainalysis'
]

// Mock sanction lists
const SANCTIONED_ADDRESSES = [
  '0x8576acc5c05d6ce88f4e49bf65bdf0c62f91353c', // North Korean Hacker Group
  '0x742d35cc6634fbc5a21efbe9c69b5b0f83234567', // Sanctioned Individual
  '0xabc123def456abc123def456abc123def456abc1', // Money Laundering Suspect
]

export async function analyzeWallet(address: string): Promise<WalletAnalysis> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000))

  // Check if address is sanctioned
  const isSanctioned = SANCTIONED_ADDRESSES.includes(address.toLowerCase())
  
  // Generate mock provider results
  const providers: ProviderResult[] = PROVIDERS.map(provider => {
    let score: number
    let status: 'success' | 'error' | 'warning' = 'success'
    let details: string

    if (isSanctioned) {
      score = Math.random() * 2 + 8 // High risk (8-10)
      details = 'Address flagged in multiple risk databases'
    } else {
      // Generate realistic scores based on address hash
      const hash = address.split('').reduce((a, b) => {
        a = ((a << 5) - a) + b.charCodeAt(0)
        return a & a
      }, 0)
      
      score = Math.abs(hash % 100) / 10 // 0-10 scale
      
      if (score > 7) {
        status = 'warning'
        details = 'Elevated risk indicators detected'
      } else if (score < 3) {
        details = 'Low risk profile'
      } else {
        details = 'Moderate risk assessment'
      }
    }

    return {
      name: provider,
      score: Math.round(score * 10) / 10,
      status,
      details,
      riskLevel: getRiskLevel(score),
      lastUpdated: new Date().toISOString()
    }
  })

  // Calculate overall score
  const overallScore = providers.reduce((sum, p) => sum + p.score, 0) / providers.length

  // Sanction check
  const sanctions: SanctionCheck = {
    isSanctioned,
    lists: isSanctioned ? ['OFAC SDN', 'FBI Wanted', 'EU Sanctions'] : [],
    authorities: isSanctioned ? ['OFAC', 'FBI', 'EU'] : [],
    severity: isSanctioned ? 'high' : 'low'
  }

  // Determine blockchain
  let blockchain: 'ethereum' | 'bitcoin' | 'unknown' = 'unknown'
  if (address.startsWith('0x')) {
    blockchain = 'ethereum'
  } else if (address.startsWith('1') || address.startsWith('3') || address.startsWith('bc1')) {
    blockchain = 'bitcoin'
  }

  return {
    address,
    overallScore: Math.round(overallScore * 10) / 10,
    riskLevel: getRiskLevel(overallScore),
    providers,
    sanctions,
    analysisDate: new Date().toISOString(),
    blockchain
  }
}

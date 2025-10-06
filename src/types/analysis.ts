export interface ProviderResult {
  name: string
  score: number
  status: 'success' | 'error' | 'warning'
  details: string
  riskLevel: 'low' | 'medium' | 'high'
  lastUpdated: string
}

export interface SanctionCheck {
  isSanctioned: boolean
  lists: string[]
  authorities: string[]
  severity: 'low' | 'medium' | 'high'
}

export interface WalletAnalysis {
  address: string
  overallScore: number
  riskLevel: 'low' | 'medium' | 'high'
  providers: ProviderResult[]
  sanctions: SanctionCheck
  analysisDate: string
  blockchain: 'ethereum' | 'bitcoin' | 'unknown'
}

export interface AnalysisRequest {
  address: string
  providers: string[]
}

export interface AnalysisResponse {
  success: boolean
  data?: WalletAnalysis
  error?: string
}

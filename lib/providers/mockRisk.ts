import { checkSanctions } from './publicSanctions';

export interface RiskAnalysis {
  score: number;
  categories: string[];
  sanctions: Array<{
    authority: string;
    label: string;
    severity: string;
  }>;
}

// Simple hash function to derive pseudo-random score from address
function hashAddress(address: string): number {
  let hash = 0;
  for (let i = 0; i < address.length; i++) {
    const char = address.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

export async function mockRisk(address: string): Promise<RiskAnalysis> {
  // Check for sanctions first
  const sanctions = checkSanctions({ eth: address });
  
  // If there are sanctions, force high risk score
  if (sanctions.length > 0) {
    return {
      score: 9.6,
      categories: ["sanctions", "high-risk", "blocked"],
      sanctions: sanctions.map(s => ({
        authority: s.authority,
        label: s.label,
        severity: s.severity
      }))
    };
  }
  
  // Generate pseudo-random score based on address hash (1-10 range)
  const hash = hashAddress(address);
  const score = 1 + (hash % 900) / 100; // 1.00 to 9.99
  
  // Generate categories based on score
  const categories: string[] = [];
  
  if (score >= 8) {
    categories.push("high-risk", "suspicious-activity");
  } else if (score >= 6) {
    categories.push("medium-risk", "mixed-history");
  } else {
    categories.push("low-risk", "clean-history");
  }
  
  // Add some random categories for variety
  const allCategories = [
    "defi-user", "nft-trader", "cex-user", "dex-trader", 
    "liquidity-provider", "yield-farmer", "arbitrageur",
    "whale", "retail", "institutional", "bot", "human"
  ];
  
  const randomCategory = allCategories[hash % allCategories.length];
  if (!categories.includes(randomCategory)) {
    categories.push(randomCategory);
  }
  
  return {
    score: Math.round(score * 10) / 10, // Round to 1 decimal
    categories,
    sanctions: []
  };
}

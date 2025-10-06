import { NextRequest, NextResponse } from 'next/server';
import { mockRisk } from '@/lib/providers/mockRisk';
import { checkSanctions } from '@/lib/providers/publicSanctions';
import { trafficStatus } from '@/lib/scoring/traffic';
import { nicknameFor } from '@/lib/scoring/nickname';

export interface AnalyzeRequest {
  address: string;
  chain?: "ETH" | "BTC" | "DOT";
  ens?: string;
}

export interface AnalyzeResponse {
  address: string;
  chain: "ETH" | "BTC" | "DOT";
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

// Mock ENS resolver (in production, this would call a real ENS resolver)
function resolveENS(ens: string): string {
  // For demo purposes, return a mock address
  // In production, you'd use a real ENS resolver
  const mockResolutions: Record<string, string> = {
    "vitalik.eth": "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
    "ethereum.eth": "0x0000000000000000000000000000000000000000",
    "test.eth": "0x8576acc5c05d6ce88f4e49bf65bdf0c62f91353c" // This is a sanctioned address for testing
  };
  
  return mockResolutions[ens.toLowerCase()] || "0x0000000000000000000000000000000000000000";
}

export async function POST(request: NextRequest) {
  try {
    const body: AnalyzeRequest = await request.json();
    const { address, chain = "ETH", ens } = body;

    if (!address && !ens) {
      return NextResponse.json(
        { error: "Address or ENS name is required" },
        { status: 400 }
      );
    }

    let finalAddress = address;
    
    // Resolve ENS if provided
    if (ens) {
      finalAddress = resolveENS(ens);
    }

    // Perform risk analysis
    const riskAnalysis = await mockRisk(finalAddress);
    
    // Check for sanctions
    const sanctions = checkSanctions({ 
      eth: chain === "ETH" ? finalAddress : undefined,
      btc: chain === "BTC" ? finalAddress : undefined,
      dot: chain === "DOT" ? finalAddress : undefined
    });

    // Determine traffic status
    const traffic = trafficStatus({ 
      score: riskAnalysis.score, 
      hasSanction: sanctions.length > 0 
    });

    // Get nickname
    const nickname = nicknameFor(riskAnalysis.score);

    // Determine final status
    let status: "approved" | "review" | "blocked";
    if (sanctions.length > 0) {
      status = "blocked"; // Hard rule: sanctions = blocked
    } else if (traffic === "red") {
      status = "blocked";
    } else if (traffic === "yellow") {
      status = "review";
    } else {
      status = "approved";
    }

    const response: AnalyzeResponse = {
      address: finalAddress,
      chain,
      score: riskAnalysis.score,
      status,
      nickname: nickname.name,
      tagline: nickname.tagline,
      sanctions: [...sanctions, ...riskAnalysis.sanctions],
      categories: riskAnalysis.categories
    };

    return NextResponse.json(response);

  } catch (error) {
    console.error('Analysis error:', error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

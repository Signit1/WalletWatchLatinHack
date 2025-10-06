import { NextResponse } from 'next/server';

export interface HealthResponse {
  providers: {
    publicSanctions: boolean;
    chainalysis: boolean;
    elliptic: boolean;
    fireblocks: boolean;
    tether: boolean;
    circle: boolean;
    talentProtocol: boolean;
    alchemy: boolean;
  };
  version: string;
  uptimeSec: number;
}

const startTime = Date.now();

export async function GET() {
  const uptimeSec = Math.floor((Date.now() - startTime) / 1000);
  
  const response: HealthResponse = {
    providers: {
      publicSanctions: process.env.FF_PUBLIC_SANCTIONS === 'true',
      chainalysis: process.env.FF_CHAINALYSIS === 'true',
      elliptic: process.env.FF_ELLIPTIC === 'true',
      fireblocks: process.env.FF_FIREBLOCKS === 'true',
      tether: process.env.FF_TETHER === 'true',
      circle: process.env.FF_CIRCLE === 'true',
      talentProtocol: process.env.FF_TALENT_PROTOCOL === 'true',
      alchemy: process.env.FF_ALCHEMY === 'true',
    },
    version: "1.0.0",
    uptimeSec
  };

  return NextResponse.json(response);
}

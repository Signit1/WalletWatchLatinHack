export interface SanctionHit {
  authority: "OFAC" | "FBI" | "INTERPOL" | "EU";
  label: string;
  severity: "high" | "medium" | "low";
}

export interface SanctionCheckParams {
  eth?: string;
  btc?: string;
  dot?: string;
}

// Mock sanctions database for demo purposes
const SANCTIONS_DB: Array<{
  address: string;
  label: string;
  authority: "OFAC" | "FBI" | "INTERPOL" | "EU";
  severity: "high" | "medium" | "low";
}> = [
  {
    address: "0x8576acc5c05d6ce88f4e49bf65bdf0c62f91353c",
    label: "Tornado Cash Developer",
    authority: "OFAC",
    severity: "high"
  },
  {
    address: "0x12d66f87a04a9e220743712ce6d9bb1b5616b8fc",
    label: "Tornado Cash Relayer",
    authority: "OFAC",
    severity: "high"
  },
  {
    address: "0x47ce0c6ed5b0ce3d3a51fdb1c52dc66a7c3aa293",
    label: "Tornado Cash Pool",
    authority: "OFAC",
    severity: "high"
  },
  {
    address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
    label: "Genesis Block Address",
    authority: "FBI",
    severity: "medium"
  },
  {
    address: "0x098b716b8aaf21512996dc57eb0615e2383e2f96",
    label: "Suspected Money Launderer",
    authority: "INTERPOL",
    severity: "high"
  },
  {
    address: "0x3cd751e6b0078be393132286c442345e5dc49699",
    label: "Dark Web Marketplace",
    authority: "EU",
    severity: "medium"
  },
  {
    address: "0x5a0b54d5dc17e0aadc383d2db43b0a0d3e029c4c",
    label: "Ransomware Operator",
    authority: "FBI",
    severity: "high"
  },
  {
    address: "0x6ac7ea33f8831ea9dcc53393aaa88b25a785dbf0",
    label: "Sanctioned Entity",
    authority: "OFAC",
    severity: "high"
  },
  {
    address: "0x722122df12d4e14e13ac3b6895a86e84145b6967",
    label: "Tornado Cash Mixer",
    authority: "OFAC",
    severity: "high"
  },
  {
    address: "0xdd4c48c0b24039969fc41d589591b490c5e72c44",
    label: "Suspected Terrorist Funding",
    authority: "INTERPOL",
    severity: "high"
  }
];

export function checkSanctions({ eth, btc, dot }: SanctionCheckParams): SanctionHit[] {
  const hits: SanctionHit[] = [];
  
  // Check ETH addresses
  if (eth) {
    const ethLower = eth.toLowerCase();
    const ethHits = SANCTIONS_DB.filter(sanction => 
      sanction.address.toLowerCase() === ethLower
    );
    hits.push(...ethHits.map(hit => ({
      authority: hit.authority,
      label: hit.label,
      severity: hit.severity
    })));
  }
  
  // Check BTC addresses
  if (btc) {
    const btcHits = SANCTIONS_DB.filter(sanction => 
      sanction.address === btc
    );
    hits.push(...btcHits.map(hit => ({
      authority: hit.authority,
      label: hit.label,
      severity: hit.severity
    })));
  }
  
  // Check DOT addresses
  if (dot) {
    const dotHits = SANCTIONS_DB.filter(sanction => 
      sanction.address === dot
    );
    hits.push(...dotHits.map(hit => ({
      authority: hit.authority,
      label: hit.label,
      severity: hit.severity
    })));
  }
  
  return hits;
}

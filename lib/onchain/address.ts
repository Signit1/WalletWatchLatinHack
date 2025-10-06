// Contract addresses for different networks
export const NFT_CONTRACT_ADDRESS = process.env.NFT_CONTRACT_ADDRESS || "";

// Network configurations
export const NETWORKS = {
  paseo: {
    chainId: parseInt(process.env.PASEO_CHAIN_ID || "0"),
    rpcUrl: process.env.PASEO_RPC_URL || "",
    name: "Paseo",
    currency: "PASEO"
  }
} as const;

export type NetworkName = keyof typeof NETWORKS;

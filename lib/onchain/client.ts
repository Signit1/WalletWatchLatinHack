import { createPublicClient, http, type PublicClient } from 'viem';
import { NETWORKS } from './address';

// Create viem client for Paseo network
export function createPaseoClient(): PublicClient {
  const network = NETWORKS.paseo;
  
  if (!network.rpcUrl) {
    throw new Error('PASEO_RPC_URL environment variable is required');
  }
  
  return createPublicClient({
    chain: {
      id: network.chainId,
      name: network.name,
      nativeCurrency: {
        name: network.currency,
        symbol: network.currency,
        decimals: 18,
      },
      rpcUrls: {
        default: {
          http: [network.rpcUrl],
        },
        public: {
          http: [network.rpcUrl],
        },
      },
    },
    transport: http(),
  });
}

// Export the default client
export const paseoClient = createPaseoClient();

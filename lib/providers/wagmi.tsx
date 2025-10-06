'use client';

import { createConfig, http } from 'wagmi';
import { injected, metaMask, walletConnect } from 'wagmi/connectors';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { ReactNode } from 'react';

// Configure Paseo chain
const paseoChain = {
  id: parseInt(process.env.NEXT_PUBLIC_PASEO_CHAIN_ID || '0'),
  name: 'Paseo',
  nativeCurrency: {
    name: 'PASEO',
    symbol: 'PASEO',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [process.env.NEXT_PUBLIC_PASEO_RPC_URL || ''],
    },
    public: {
      http: [process.env.NEXT_PUBLIC_PASEO_RPC_URL || ''],
    },
  },
  blockExplorers: {
    default: {
      name: 'Paseo Explorer',
      url: process.env.NEXT_PUBLIC_PASEO_RPC_URL?.replace('/rpc', '') || '',
    },
  },
};

export const config = createConfig({
  chains: [paseoChain],
  connectors: [
    injected(),
    metaMask(),
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
    }),
  ],
  transports: {
    [paseoChain.id]: http(),
  },
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}

declare module 'wagmi' {
  interface Register {
    config: typeof config;
  }
}

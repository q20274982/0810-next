import type { AppProps } from "next/app";
import { ThirdwebProvider, bloctoWallet } from "@thirdweb-dev/react";
import {
  Ethereum,
  Polygon,
  Arbitrum,
  Optimism,
  Avalanche,
  Binance, // Mainnets
  Goerli,
  Mumbai,
  ArbitrumGoerli,
  OptimismGoerli,
  AvalancheFuji,
  BinanceTestnet // Testnets
} from "@thirdweb-dev/chains";

import "../styles/globals.css";

const BLOCTO_SUPPORTED_MAINNET_CHAIN = [
  Ethereum,
  Polygon,
  Arbitrum,
  Optimism,
  Avalanche,
  Binance
];
const BLOCTO_SUPPORTED_TESTNET_CHAIN = [
  Goerli,
  Mumbai,
  ArbitrumGoerli,
  OptimismGoerli,
  AvalancheFuji,
  BinanceTestnet
];

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={Mumbai}
      supportedChains={BLOCTO_SUPPORTED_TESTNET_CHAIN}
      supportedWallets={[bloctoWallet()]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;

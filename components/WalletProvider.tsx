"use client";

import { WalletProvider } from "@suiet/wallet-kit"
import "@suiet/wallet-kit/style.css";
import "./custom-styles.css"

export default function WalletProviderWrapper({ children }: { children: any }) {
  return (
    <WalletProvider>
      {children}
    </WalletProvider>
  )
}
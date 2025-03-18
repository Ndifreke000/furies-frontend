import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Furies P2P Exchange | Decentralized Crypto-Fiat Trading on Sui",
  description:
    "A decentralized P2P platform on the Sui blockchain that enables users to exchange cryptocurrencies for fiat securely with AI-powered dispute resolution.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased dark", fontSans.variable)}>
        {children}
      </body>
    </html>
  )
}


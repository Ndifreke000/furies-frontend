"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function ConnectWalletButton() {
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  const handleConnect = async (type: string) => {
    setIsConnecting(true)

    // Simulate connection delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Generate a random Sui address
    const randomAddress = "0x" + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join("")

    setWalletAddress(randomAddress)
    setIsConnected(true)
    setIsConnecting(false)
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setWalletAddress("")
  }

  if (isConnected) {
    return (
      <Button
        variant="outline"
        className="border-cetus-border bg-cetus-dark hover:bg-cetus-dark/80 hover:border-cetus-primary/50 text-sm rounded-lg"
        onClick={handleDisconnect}
      >
        <Wallet className="mr-2 h-4 w-4 text-cetus-primary" />
        {walletAddress.substring(0, 6)}...{walletAddress.substring(walletAddress.length - 4)}
      </Button>
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-cetus-primary to-cetus-accent text-cetus-darker hover:opacity-90 rounded-lg">
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-cetus-dark border-cetus-border">
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
          <DialogDescription>Choose a method to connect to the Furies P2P Exchange</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button
            variant="outline"
            className="flex justify-between items-center h-14 border-cetus-border hover:border-cetus-primary/50 bg-cetus-darker"
            onClick={() => handleConnect("zkLogin")}
            disabled={isConnecting}
          >
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-cetus-primary to-cetus-accent flex items-center justify-center mr-3">
                <Wallet className="h-4 w-4 text-cetus-darker" />
              </div>
              <span>zkLogin with Google</span>
            </div>
            {isConnecting && <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cetus-primary"></div>}
          </Button>

          <Button
            variant="outline"
            className="flex justify-between items-center h-14 border-cetus-border hover:border-cetus-primary/50 bg-cetus-darker"
            onClick={() => handleConnect("sui")}
            disabled={isConnecting}
          >
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-crypto-sui flex items-center justify-center mr-3">
                <svg viewBox="0 0 32 32" className="h-4 w-4 text-white" fill="currentColor">
                  <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm-2.11 10.079c-.347.078-.684.197-1.007.354a5.824 5.824 0 0 0-2.356 2.355 5.768 5.768 0 0 0-.354 1.007c-.078.347-.118.704-.118 1.066v5.139c0 .362.04.72.118 1.066.078.347.197.684.354 1.007a5.824 5.824 0 0 0 2.356 2.355c.323.157.66.276 1.007.354.347.078.704.118 1.066.118h5.139c.362 0 .72-.04 1.066-.118a5.768 5.768 0 0 0 1.007-.354 5.824 5.824 0 0 0 2.355-2.355c.157-.323.276-.66.354-1.007.078-.347.118-.704.118-1.066v-5.139c0-.362-.04-.72-.118-1.066a5.768 5.768 0 0 0-.354-1.007 5.824 5.824 0 0 0-2.355-2.355 5.768 5.768 0 0 0-1.007-.354 5.768 5.768 0 0 0-1.066-.118h-5.139c-.362 0-.72.04-1.066.118z" />
                </svg>
              </div>
              <span>Sui Wallet</span>
            </div>
            {isConnecting && <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cetus-primary"></div>}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}


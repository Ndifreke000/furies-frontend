"use client"

import { useState, useEffect } from "react"

// Mock data for a trade
const mockTrades = {
  "1": {
    id: "1",
    type: "buy",
    status: "pending",
    price: 35000,
    currency: "USD",
    crypto: "SUI",
    amount: 1000,
    fiatAmount: 350,
    paymentMethod: "Bank Transfer",
    paymentDetails: {
      bankName: "Chase Bank",
      accountNumber: "XXXX-XXXX-1234",
      accountName: "John Doe",
    },
    merchant: {
      name: "CryptoTrader",
      trades: 245,
      completion: 99,
      address: "0x7a3d...f92e",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
    timeRemaining: 150, // minutes
    escrowAddress: "0x8f4d2a1b3c5e7f9g8h6j5k4l3m2n1p0q9r8s7t6u5v4w3x2y1z",
    messages: [
      {
        id: "1",
        sender: "system",
        content: "Trade created. Waiting for payment.",
        timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
      },
      {
        id: "2",
        sender: "merchant",
        content: "Please make the payment to the provided bank account and confirm once done.",
        timestamp: new Date(Date.now() - 1000 * 60 * 25).toISOString(),
      },
    ],
  },
  "2": {
    id: "2",
    type: "sell",
    status: "completed",
    price: 34800,
    currency: "USD",
    crypto: "SUI",
    amount: 500,
    fiatAmount: 174,
    paymentMethod: "Bank Transfer",
    paymentDetails: {
      bankName: "Bank of America",
      accountNumber: "XXXX-XXXX-5678",
      accountName: "Jane Smith",
    },
    merchant: {
      name: "BlockchainMaster",
      trades: 189,
      completion: 98,
      address: "0x3f2a...b71d",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    completedAt: new Date(Date.now() - 1000 * 60 * 60 * 1).toISOString(), // 1 hour ago
    escrowAddress: "0x7b3c5d2e1f4g6h8j9k0l1m2n3p4q5r6s7t8u9v0w1x2y3z4a5b6c",
    messages: [
      {
        id: "1",
        sender: "system",
        content: "Trade created. Waiting for payment.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
      },
      {
        id: "2",
        sender: "merchant",
        content: "I've sent the payment to your bank account. Please check and release the SUI.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.5).toISOString(),
      },
      {
        id: "3",
        sender: "user",
        content: "Payment received, releasing SUI now.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.2).toISOString(),
      },
      {
        id: "4",
        sender: "system",
        content: "Trade completed successfully.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1).toISOString(),
      },
    ],
  },
}

export function useMockTrade(id) {
  const [trade, setTrade] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch trade details
    const timer = setTimeout(() => {
      setTrade(mockTrades[id] || null)
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [id])

  return { trade, loading, setTrade }
}


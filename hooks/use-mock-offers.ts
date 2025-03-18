"use client"

import { useState, useEffect } from "react"

// Mock data for offers
const initialMockOffers = [
  {
    id: "1",
    type: "buy",
    price: 35000,
    currency: "USD",
    crypto: "SUI",
    amount: 1000,
    minAmount: 100,
    maxAmount: 1000,
    paymentMethods: ["Bank Transfer", "Credit Card"],
    merchant: {
      name: "CryptoTrader",
      trades: 245,
      completion: 99,
      address: "0x7a3d...f92e",
    },
  },
  {
    id: "2",
    type: "sell",
    price: 34800,
    currency: "USD",
    crypto: "SUI",
    amount: 500,
    minAmount: 50,
    maxAmount: 500,
    paymentMethods: ["Bank Transfer"],
    merchant: {
      name: "BlockchainMaster",
      trades: 189,
      completion: 98,
      address: "0x3f2a...b71d",
    },
  },
  {
    id: "3",
    type: "buy",
    price: 34950,
    currency: "USD",
    crypto: "SUI",
    amount: 2000,
    minAmount: 200,
    maxAmount: 2000,
    paymentMethods: ["Credit Card", "PayPal"],
    merchant: {
      name: "SuiWhale",
      trades: 312,
      completion: 100,
      address: "0x9c4b...e23a",
    },
  },
  {
    id: "4",
    type: "sell",
    price: 34750,
    currency: "USD",
    crypto: "SUI",
    amount: 750,
    minAmount: 100,
    maxAmount: 750,
    paymentMethods: ["Bank Transfer", "Venmo"],
    merchant: {
      name: "P2PExchanger",
      trades: 156,
      completion: 97,
      address: "0x2d8e...a45f",
    },
  },
]

export function useMockOffers() {
  const [mockOffers, setMockOffers] = useState([])

  useEffect(() => {
    // Simulate API call to fetch offers
    setTimeout(() => {
      setMockOffers(initialMockOffers)
    }, 500)
  }, [])

  return { mockOffers }
}


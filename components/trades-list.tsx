"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TradeCard } from "@/components/trade-card"
import { Clock, CheckCircle, AlertCircle } from "lucide-react"

// Mock data for trades
const mockTrades = [
  {
    id: "1",
    type: "buy",
    status: "pending",
    price: 35000,
    currency: "USD",
    crypto: "SUI",
    amount: 1000,
    fiatAmount: 350,
    paymentMethod: "Bank Transfer",
    merchant: {
      name: "CryptoTrader",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(), // 30 minutes ago
  },
  {
    id: "2",
    type: "sell",
    status: "completed",
    price: 34800,
    currency: "USD",
    crypto: "SUI",
    amount: 500,
    fiatAmount: 174,
    paymentMethod: "Bank Transfer",
    merchant: {
      name: "BlockchainMaster",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), // 2 hours ago
    completedAt: new Date(Date.now() - 1000 * 60 * 60 * 1).toISOString(), // 1 hour ago
  },
  {
    id: "3",
    type: "buy",
    status: "disputed",
    price: 34950,
    currency: "USD",
    crypto: "SUI",
    amount: 2000,
    fiatAmount: 699,
    paymentMethod: "Credit Card",
    merchant: {
      name: "SuiWhale",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(), // 2 days ago
  },
  {
    id: "4",
    type: "sell",
    status: "payment_confirmed",
    price: 34750,
    currency: "USD",
    crypto: "SUI",
    amount: 750,
    fiatAmount: 260.63,
    paymentMethod: "Bank Transfer",
    merchant: {
      name: "P2PExchanger",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), // 5 hours ago
  },
]

export function TradesList() {
  const [activeTab, setActiveTab] = useState("all")
  const [trades, setTrades] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTrades(mockTrades)
      setLoading(false)
    }, 500)
  }, [])

  const filteredTrades = trades.filter((trade) => {
    if (activeTab === "all") return true
    if (activeTab === "active") return ["pending", "payment_confirmed"].includes(trade.status)
    if (activeTab === "completed") return trade.status === "completed"
    if (activeTab === "disputed") return trade.status === "disputed"
    return true
  })

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-500" />
      case "payment_confirmed":
        return <Clock className="h-5 w-5 text-blue-500" />
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "disputed":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      default:
        return null
    }
  }

  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return (
          <div className="bg-yellow-500/10 text-yellow-500 border-yellow-500/30 px-2 py-1 rounded-md text-sm border inline-block">
            Awaiting Payment
          </div>
        )
      case "payment_confirmed":
        return (
          <div className="bg-blue-500/10 text-blue-500 border-blue-500/30 px-2 py-1 rounded-md text-sm border inline-block">
            Payment Confirmed
          </div>
        )
      case "completed":
        return (
          <div className="bg-green-500/10 text-green-500 border-green-500/30 px-2 py-1 rounded-md text-sm border inline-block">
            Completed
          </div>
        )
      case "disputed":
        return (
          <div className="bg-red-500/10 text-red-500 border-red-500/30 px-2 py-1 rounded-md text-sm border inline-block">
            Disputed
          </div>
        )
      default:
        return <div className="px-2 py-1 rounded-md text-sm border inline-block">Unknown</div>
    }
  }

  if (loading) {
    return (
      <div className="container py-8">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-4">
            <div className="h-8 w-48 bg-slate-800/50 rounded-md animate-pulse"></div>
            <div className="h-4 w-96 bg-slate-800/50 rounded-md animate-pulse"></div>
          </div>
          <div className="h-12 w-full bg-slate-800/50 rounded-md animate-pulse"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 w-full bg-slate-800/50 rounded-md animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold tracking-tight neon-text">My Trades</h1>
          <p className="text-muted-foreground">View and manage all your P2P trades</p>
        </div>

        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue">
              All Trades
            </TabsTrigger>
            <TabsTrigger
              value="active"
              className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue"
            >
              Active
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue"
            >
              Completed
            </TabsTrigger>
            <TabsTrigger
              value="disputed"
              className="data-[state=active]:bg-neon-blue/20 data-[state=active]:text-neon-blue"
            >
              Disputed
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-4">
              {filteredTrades.length > 0 ? (
                filteredTrades.map((trade) => (
                  <TradeCard
                    key={trade.id}
                    trade={trade}
                    getStatusIcon={getStatusIcon}
                    getStatusBadge={getStatusBadge}
                  />
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No trades found.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="active" className="mt-6">
            <div className="grid gap-4">
              {filteredTrades.length > 0 ? (
                filteredTrades.map((trade) => (
                  <TradeCard
                    key={trade.id}
                    trade={trade}
                    getStatusIcon={getStatusIcon}
                    getStatusBadge={getStatusBadge}
                  />
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No active trades found.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-6">
            <div className="grid gap-4">
              {filteredTrades.length > 0 ? (
                filteredTrades.map((trade) => (
                  <TradeCard
                    key={trade.id}
                    trade={trade}
                    getStatusIcon={getStatusIcon}
                    getStatusBadge={getStatusBadge}
                  />
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No completed trades found.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="disputed" className="mt-6">
            <div className="grid gap-4">
              {filteredTrades.length > 0 ? (
                filteredTrades.map((trade) => (
                  <TradeCard
                    key={trade.id}
                    trade={trade}
                    getStatusIcon={getStatusIcon}
                    getStatusBadge={getStatusBadge}
                  />
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No disputed trades found.</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default TradesList


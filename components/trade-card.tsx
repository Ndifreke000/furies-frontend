"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function TradeCard({ trade, getStatusIcon, getStatusBadge }) {
  return (
    <Card className="web3-card overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            {getStatusIcon(trade.status)}
            <div>
              <CardTitle className="text-lg font-medium">
                {trade.type === "buy" ? "Buy" : "Sell"} SUI from {trade.merchant.name}
              </CardTitle>
              <CardDescription>{new Date(trade.createdAt).toLocaleString()}</CardDescription>
            </div>
          </div>
          {getStatusBadge(trade.status)}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Amount</p>
            <p className="text-lg font-semibold">{trade.amount.toLocaleString()} SUI</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Price</p>
            <p className="text-lg font-semibold">${trade.price.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Total</p>
            <p className="text-lg font-semibold">${trade.fiatAmount.toLocaleString()}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button
          className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/90 hover:to-neon-purple/90"
          onClick={() => (window.location.href = `/trade/${trade.id}`)}
        >
          View Details
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}


"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, CreditCard, BanknoteIcon as Bank, Wallet } from "lucide-react"

export function OfferCard({ offer }) {
  const paymentMethodIcons = {
    "Bank Transfer": <Bank className="h-4 w-4" />,
    "Credit Card": <CreditCard className="h-4 w-4" />,
    PayPal: <DollarSign className="h-4 w-4" />,
    Venmo: <Wallet className="h-4 w-4" />,
  }

  return (
    <Card className="cetus-card overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-medium">{offer.merchant.name}</CardTitle>
            <CardDescription>
              {offer.trades} trades | {offer.merchant.completion}% completion
            </CardDescription>
          </div>
          <Badge
            variant="outline"
            className={
              offer.type === "buy"
                ? "bg-cetus-primary/10 text-cetus-primary border-cetus-primary/30"
                : "bg-cetus-accent/10 text-cetus-accent border-cetus-accent/30"
            }
          >
            {offer.type === "buy" ? "Buy SUI" : "Sell SUI"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Price</p>
            <p className="text-lg font-semibold">${offer.price.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Available</p>
            <p className="text-lg font-semibold">{offer.amount.toLocaleString()} SUI</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Limits</p>
            <p className="text-base">
              ${offer.minAmount} - ${offer.maxAmount}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Payment Methods</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {offer.paymentMethods.map((method) => (
                <Badge
                  key={method}
                  variant="secondary"
                  className="flex items-center gap-1 bg-cetus-dark border-cetus-border"
                >
                  {paymentMethodIcons[method]}
                  <span className="text-xs">{method}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button
          className={
            offer.type === "buy"
              ? "w-full bg-gradient-to-r from-cetus-primary to-cetus-accent text-cetus-darker hover:opacity-90"
              : "w-full bg-gradient-to-r from-cetus-primary to-cetus-accent text-cetus-darker hover:opacity-90"
          }
          onClick={() => (window.location.href = `/trade/${offer.id}`)}
        >
          {offer.type === "buy" ? "Buy SUI" : "Sell SUI"}
        </Button>
      </CardFooter>
    </Card>
  )
}


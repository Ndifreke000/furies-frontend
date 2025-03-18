"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { CreateOfferDialog } from "@/components/create-offer-dialog"
import { OfferCard } from "@/components/offer-card"
import { useMockOffers } from "@/hooks/use-mock-offers"
import { cn } from "@/lib/utils"

export function MarketplaceContent() {
  const [activeTab, setActiveTab] = useState("buy")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCurrency, setSelectedCurrency] = useState("USD")
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("all")

  const { mockOffers } = useMockOffers()

  const filteredOffers = mockOffers.filter((offer) => {
    // Filter by tab (buy/sell)
    if (offer.type !== activeTab) return false

    // Filter by search query (merchant name)
    if (searchQuery && !offer.merchant.name.toLowerCase().includes(searchQuery.toLowerCase())) return false

    // Filter by currency
    if (selectedCurrency !== "all" && offer.currency !== selectedCurrency) return false

    // Filter by payment method
    if (selectedPaymentMethod !== "all" && !offer.paymentMethods.includes(selectedPaymentMethod)) return false

    return true
  })

  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold tracking-tight cetus-text">P2P Marketplace</h1>
          <p className="text-muted-foreground">
            Buy and sell cryptocurrencies directly with other users using your preferred payment methods.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by merchant name..."
                className="w-full pl-8 bg-cetus-dark border-cetus-border"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
                <SelectTrigger className="w-[120px] bg-cetus-dark border-cetus-border">
                  <SelectValue placeholder="Currency" />
                </SelectTrigger>
                <SelectContent className="bg-cetus-dark border-cetus-border">
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedPaymentMethod} onValueChange={setSelectedPaymentMethod}>
                <SelectTrigger className="w-[180px] bg-cetus-dark border-cetus-border">
                  <SelectValue placeholder="Payment Method" />
                </SelectTrigger>
                <SelectContent className="bg-cetus-dark border-cetus-border">
                  <SelectItem value="all">All Methods</SelectItem>
                  <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                  <SelectItem value="Credit Card">Credit Card</SelectItem>
                  <SelectItem value="PayPal">PayPal</SelectItem>
                  <SelectItem value="Venmo">Venmo</SelectItem>
                </SelectContent>
              </Select>

              <CreateOfferDialog />
            </div>
          </div>

          <Tabs defaultValue="buy" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-cetus-dark rounded-lg p-1">
              <TabsTrigger
                value="buy"
                className={cn(
                  "rounded-md text-sm",
                  "data-[state=active]:bg-gradient-to-r data-[state=active]:from-cetus-primary data-[state=active]:to-cetus-accent data-[state=active]:text-cetus-darker",
                )}
              >
                Buy SUI
              </TabsTrigger>
              <TabsTrigger
                value="sell"
                className={cn(
                  "rounded-md text-sm",
                  "data-[state=active]:bg-gradient-to-r data-[state=active]:from-cetus-primary data-[state=active]:to-cetus-accent data-[state=active]:text-cetus-darker",
                )}
              >
                Sell SUI
              </TabsTrigger>
            </TabsList>

            <TabsContent value="buy" className="mt-0">
              <div className="grid gap-4">
                {filteredOffers.length > 0 ? (
                  filteredOffers.map((offer) => <OfferCard key={offer.id} offer={offer} />)
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No offers found matching your criteria.</p>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="sell" className="mt-0">
              <div className="grid gap-4">
                {filteredOffers.length > 0 ? (
                  filteredOffers.map((offer) => <OfferCard key={offer.id} offer={offer} />)
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No offers found matching your criteria.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default MarketplaceContent


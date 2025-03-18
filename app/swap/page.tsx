"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { ChevronDown, ArrowDownUp, Info, BarChart2, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

export default function SwapPage() {
  const [fromToken, setFromToken] = useState("USDC")
  const [toToken, setToToken] = useState("SUI")
  const [fromAmount, setFromAmount] = useState("")
  const [toAmount, setToAmount] = useState("")
  const [slippage, setSlippage] = useState("0.5")
  const [aggregatorMode, setAggregatorMode] = useState(true)

  const handleSwapTokens = () => {
    const temp = fromToken
    setFromToken(toToken)
    setToToken(temp)
    setFromAmount(toAmount)
    setToAmount(fromAmount)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="w-full max-w-md mx-auto px-4">
          <div className="mb-8">
            <Tabs defaultValue="swap" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-cetus-dark rounded-lg p-1">
                <TabsTrigger
                  value="swap"
                  className={cn(
                    "rounded-md text-sm",
                    "data-[state=active]:bg-gradient-to-r data-[state=active]:from-cetus-primary data-[state=active]:to-cetus-accent data-[state=active]:text-cetus-darker",
                  )}
                >
                  Swap
                </TabsTrigger>
                <TabsTrigger
                  value="limit"
                  className={cn(
                    "rounded-md text-sm",
                    "data-[state=active]:bg-gradient-to-r data-[state=active]:from-cetus-primary data-[state=active]:to-cetus-accent data-[state=active]:text-cetus-darker",
                  )}
                >
                  Limit
                </TabsTrigger>
                <TabsTrigger
                  value="dca"
                  className={cn(
                    "rounded-md text-sm",
                    "data-[state=active]:bg-gradient-to-r data-[state=active]:from-cetus-primary data-[state=active]:to-cetus-accent data-[state=active]:text-cetus-darker",
                  )}
                >
                  DCA
                </TabsTrigger>
              </TabsList>

              <div className="flex items-center justify-between mt-6 mb-4">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="aggregator-mode" className="text-sm text-muted-foreground">
                    Aggregator Mode
                  </Label>
                  <Switch
                    id="aggregator-mode"
                    checked={aggregatorMode}
                    onCheckedChange={setAggregatorMode}
                    className="data-[state=checked]:bg-cetus-primary"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Label className="text-sm text-muted-foreground">Slippage</Label>
                  <div className="bg-cetus-dark rounded-md px-2 py-1 text-sm flex items-center">
                    {slippage}%
                    <ChevronDown className="h-4 w-4 ml-1 text-muted-foreground" />
                  </div>
                </div>
              </div>

              <TabsContent value="swap" className="mt-0">
                <div className="space-y-4">
                  {/* From Token */}
                  <div className="glass-panel p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">You Pay</span>
                      <span className="text-sm text-muted-foreground">Balance: 0.0</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input
                        type="text"
                        placeholder="0.0"
                        value={fromAmount}
                        onChange={(e) => setFromAmount(e.target.value)}
                        className="bg-transparent border-0 text-2xl font-medium focus-visible:ring-0 p-0 h-auto"
                      />
                      <Button
                        variant="outline"
                        className="border-cetus-border bg-cetus-dark hover:bg-cetus-dark/80 hover:border-cetus-primary/50 rounded-lg"
                      >
                        <div className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-crypto-usdc flex items-center justify-center mr-2">
                            <span className="text-white text-xs font-bold">$</span>
                          </div>
                          <span>{fromToken}</span>
                          <ChevronDown className="h-4 w-4 ml-2 text-muted-foreground" />
                        </div>
                      </Button>
                    </div>
                    <div className="flex justify-between mt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs text-muted-foreground hover:text-cetus-primary"
                      >
                        HALF
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs text-muted-foreground hover:text-cetus-primary"
                      >
                        MAX
                      </Button>
                    </div>
                  </div>

                  {/* Swap Button */}
                  <div className="relative flex justify-center">
                    <div className="absolute -mt-9 z-10">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 rounded-full bg-cetus-dark border-cetus-border hover:border-cetus-primary"
                        onClick={handleSwapTokens}
                      >
                        <ArrowDownUp className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* To Token */}
                  <div className="glass-panel p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">You Receive</span>
                      <span className="text-sm text-muted-foreground">Balance: 0.0</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Input
                        type="text"
                        placeholder="0.0"
                        value={toAmount}
                        onChange={(e) => setToAmount(e.target.value)}
                        className="bg-transparent border-0 text-2xl font-medium focus-visible:ring-0 p-0 h-auto"
                      />
                      <Button
                        variant="outline"
                        className="border-cetus-border bg-cetus-dark hover:bg-cetus-dark/80 hover:border-cetus-primary/50 rounded-lg"
                      >
                        <div className="flex items-center">
                          <div className="h-6 w-6 rounded-full bg-crypto-sui flex items-center justify-center mr-2">
                            <svg viewBox="0 0 32 32" className="h-3 w-3 text-white" fill="currentColor">
                              <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm-2.11 10.079c-.347.078-.684.197-1.007.354a5.824 5.824 0 0 0-2.356 2.355 5.768 5.768 0 0 0-.354 1.007c-.078.347-.118.704-.118 1.066v5.139c0 .362.04.72.118 1.066.078.347.197.684.354 1.007a5.824 5.824 0 0 0 2.356 2.355c.323.157.66.276 1.007.354.347.078.704.118 1.066.118h5.139c.362 0 .72-.04 1.066-.118a5.768 5.768 0 0 0 1.007-.354 5.824 5.824 0 0 0 2.355-2.355c.157-.323.276-.66.354-1.007.078-.347.118-.704.118-1.066v-5.139c0-.362-.04-.72-.118-1.066a5.768 5.768 0 0 0-.354-1.007 5.824 5.824 0 0 0-2.355-2.355 5.768 5.768 0 0 0-1.007-.354 5.768 5.768 0 0 0-1.066-.118h-5.139c-.362 0-.72.04-1.066.118z" />
                            </svg>
                          </div>
                          <span>{toToken}</span>
                          <ChevronDown className="h-4 w-4 ml-2 text-muted-foreground" />
                        </div>
                      </Button>
                    </div>
                    <div className="flex justify-between mt-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs text-muted-foreground hover:text-cetus-primary"
                      >
                        HALF
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs text-muted-foreground hover:text-cetus-primary"
                      >
                        MAX
                      </Button>
                    </div>
                  </div>

                  {/* Price Reference */}
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        <span className="text-sm font-medium">Price Reference</span>
                        <Info className="h-4 w-4 ml-1 text-muted-foreground" />
                      </div>
                    </div>

                    {/* USDC Price */}
                    <div className="flex justify-between items-center py-3 border-b border-cetus-border">
                      <div className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-crypto-usdc flex items-center justify-center mr-2">
                          <span className="text-white text-xs font-bold">$</span>
                        </div>
                        <div>
                          <div className="font-medium">USDC</div>
                          <div className="text-xs text-muted-foreground">USDC</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="text-right">
                          <div className="font-medium">$0.999</div>
                          <div className="text-xs text-green-500">+0.00%</div>
                        </div>
                        <div className="ml-2 w-16 h-8">
                          <svg viewBox="0 0 100 30" className="w-full h-full">
                            <path d="M0,15 Q25,10 50,15 T100,15" fill="none" stroke="#00E4FF" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* SUI Price */}
                    <div className="flex justify-between items-center py-3">
                      <div className="flex items-center">
                        <div className="h-6 w-6 rounded-full bg-crypto-sui flex items-center justify-center mr-2">
                          <svg viewBox="0 0 32 32" className="h-3 w-3 text-white" fill="currentColor">
                            <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm-2.11 10.079c-.347.078-.684.197-1.007.354a5.824 5.824 0 0 0-2.356 2.355 5.768 5.768 0 0 0-.354 1.007c-.078.347-.118.704-.118 1.066v5.139c0 .362.04.72.118 1.066.078.347.197.684.354 1.007a5.824 5.824 0 0 0 2.356 2.355c.323.157.66.276 1.007.354.347.078.704.118 1.066.118h5.139c.362 0 .72-.04 1.066-.118a5.768 5.768 0 0 0 1.007-.354 5.824 5.824 0 0 0 2.355-2.355c.157-.323.276-.66.354-1.007.078-.347.118-.704.118-1.066v-5.139c0-.362-.04-.72-.118-1.066a5.768 5.768 0 0 0-.354-1.007 5.824 5.824 0 0 0-2.355-2.355 5.768 5.768 0 0 0-1.007-.354 5.768 5.768 0 0 0-1.066-.118h-5.139c-.362 0-.72.04-1.066.118z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">SUI</div>
                          <div className="text-xs text-muted-foreground">Sui</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="text-right">
                          <div className="font-medium">$2.272</div>
                          <div className="text-xs text-red-500">-0.87%</div>
                        </div>
                        <div className="ml-2 w-16 h-8">
                          <svg viewBox="0 0 100 30" className="w-full h-full">
                            <path d="M0,15 Q25,20 50,15 T100,15" fill="none" stroke="#00E4FF" strokeWidth="1.5" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Swap Button */}
                  <Button className="w-full mt-4 bg-gradient-to-r from-cetus-primary to-cetus-accent text-cetus-darker font-medium rounded-lg py-6 hover:opacity-90">
                    Enter an amount
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="limit" className="mt-0">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <BarChart2 className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Limit Orders</h3>
                  <p className="text-muted-foreground max-w-xs">
                    Set a target price for buying or selling tokens automatically when the market reaches your price.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="dca" className="mt-0">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <RefreshCw className="h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-medium mb-2">Dollar Cost Averaging</h3>
                  <p className="text-muted-foreground max-w-xs">
                    Automatically invest a fixed amount at regular intervals to reduce the impact of volatility.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus } from "lucide-react"

export function CreateOfferDialog() {
  const [open, setOpen] = useState(false)
  const [offerType, setOfferType] = useState("buy")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState("")
  const [minAmount, setMinAmount] = useState("")
  const [maxAmount, setMaxAmount] = useState("")
  const [paymentMethods, setPaymentMethods] = useState({
    "Bank Transfer": false,
    "Credit Card": false,
    PayPal: false,
    Venmo: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally submit the form data to your backend
    console.log({
      offerType,
      price,
      amount,
      minAmount,
      maxAmount,
      paymentMethods: Object.keys(paymentMethods).filter((key) => paymentMethods[key]),
    })

    // Close the dialog
    setOpen(false)

    // Reset form
    setOfferType("buy")
    setPrice("")
    setAmount("")
    setMinAmount("")
    setMaxAmount("")
    setPaymentMethods({
      "Bank Transfer": false,
      "Credit Card": false,
      PayPal: false,
      Venmo: false,
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/90 hover:to-neon-purple/90">
          <Plus className="mr-2 h-4 w-4" />
          Create Offer
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create New Offer</DialogTitle>
            <DialogDescription>Set up your offer details. Click save when you're done.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="offerType" className="text-right">
                Offer Type
              </Label>
              <Select value={offerType} onValueChange={setOfferType}>
                <SelectTrigger id="offerType" className="col-span-3">
                  <SelectValue placeholder="Select offer type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buy">I want to buy SUI</SelectItem>
                  <SelectItem value="sell">I want to sell SUI</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price (USD)
              </Label>
              <Input
                id="price"
                type="number"
                placeholder="e.g. 35000"
                className="col-span-3"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount (SUI)
              </Label>
              <Input
                id="amount"
                type="number"
                placeholder="e.g. 1000"
                className="col-span-3"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="minAmount" className="text-right">
                Min Amount ($)
              </Label>
              <Input
                id="minAmount"
                type="number"
                placeholder="e.g. 100"
                className="col-span-3"
                value={minAmount}
                onChange={(e) => setMinAmount(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="maxAmount" className="text-right">
                Max Amount ($)
              </Label>
              <Input
                id="maxAmount"
                type="number"
                placeholder="e.g. 1000"
                className="col-span-3"
                value={maxAmount}
                onChange={(e) => setMaxAmount(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label className="text-right pt-2">Payment Methods</Label>
              <div className="col-span-3 space-y-2">
                {Object.keys(paymentMethods).map((method) => (
                  <div key={method} className="flex items-center space-x-2">
                    <Checkbox
                      id={method}
                      checked={paymentMethods[method]}
                      onCheckedChange={(checked) => {
                        setPaymentMethods({
                          ...paymentMethods,
                          [method]: checked,
                        })
                      }}
                    />
                    <Label htmlFor={method}>{method}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-blue/90 hover:to-neon-purple/90"
            >
              Publish Offer
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}


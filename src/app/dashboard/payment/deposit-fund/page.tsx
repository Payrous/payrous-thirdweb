"use client"
import React from "react"
import { useState } from "react"
import { Bitcoin, Coins, Wallet } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { success } from "@/assets/images"

interface Organization {
  id: string
  name: string
  tokenType: string
  walletAddress: string
  tokenIcon: React.ElementType
}

// Updated organizations with token icons
const organizations: Organization[] = [
  {
    id: "1",
    name: "Ethereum Foundation",
    tokenType: "ETH",
    walletAddress: "0x1234...5678",
    tokenIcon: Coins,
  },
  {
    id: "2",
    name: "Solana Foundation",
    tokenType: "SOL",
    walletAddress: "0x8765...4321",
    tokenIcon: Bitcoin,
  },
  {
    id: "3",
    name: "Polkadot Network",
    tokenType: "DOT",
    walletAddress: "0x9876...1234",
    tokenIcon: Wallet,
  },
]

const Deposit_funds = () => {
  const [organization, setOrganization] = useState("")
  const [amount, setAmount] = useState("")
  const [showDialog, setShowDialog] = useState(false)
  const [availableBalance, setAvailableBalance] = useState(4000)

  const selectedOrg = organizations.find((org) => org.id === organization)

  const isFormValid = organization && amount

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (amount) {
      setAvailableBalance((prev) => prev + Number(amount))
    }
    setShowDialog(true)
  }

  return (
    <div className="flex flex-col p-5 md:py-4 md:px-10">
      <div>
        <h1 className="text-colors-BlueGray font-bold font-source text-lg">Deposit Funds</h1>
        <hr className="w-full text-colors-DarkGray py-5" />
      </div>

      <div className="flex flex-col justify-center items-center h-full">
        <Card className="w-full max-w-md border-none">
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="organization" className="text-colors-BlueGray">
                  Select Organization
                </Label>
                <Select value={organization} onValueChange={setOrganization}>
                  <SelectTrigger id="organization">
                    <SelectValue placeholder="Select organization" />
                  </SelectTrigger>
                  <SelectContent>
                    {organizations.map((org) => (
                      <SelectItem key={org.id} value={org.id}>
                        {org.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <Label htmlFor="tokenType">Token Type</Label>
                <div className="relative">
                  <Input
                    id="tokenType"
                    value={selectedOrg?.tokenType || ""}
                    placeholder="Select token type"
                    readOnly
                    className={cn(selectedOrg ? "bg-muted pl-10" : "", "w-full")}
                  />
                  {selectedOrg && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      {selectedOrg.tokenIcon &&
                        React.createElement(selectedOrg.tokenIcon, {
                          className: "h-5 w-5 text-colors-ButtonOrange",
                        })}
                    </div>
                  )}
                </div>
                <p className="text-[10px] text-colors-ButtonOrange italic">Auto-generated based on organization</p>
              </div>

              <div className="space-y-1">
                <Label htmlFor="walletAddress">Wallet Address</Label>
                <Input
                  id="walletAddress"
                  value={selectedOrg?.walletAddress || ""}
                  placeholder="Enter wallet address"
                  readOnly
                  className={cn(selectedOrg ? "bg-muted" : "")}
                />
                <p className="text-[10px] text-colors-ButtonOrange italic">Auto-generated by Smart contract</p>
              </div>

              <div className="space-y-1">
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  placeholder="Enter amount"
                  value={amount}
                  type="number"
                  onChange={(e) => setAmount(e.target.value)}
                />
                <p className="text-xs text-colors-Success flex items-center font-bold gap-1">
                  Available Bal: {availableBalance}
                  {selectedOrg?.tokenType || "ETH"}
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button
                type="submit"
                disabled={!isFormValid}
                className="w-40 text-white bg-colors-ButtonOrange hover:bg-orange-300 shadow-slate-200 px-5 py-6 shadow-[inset_-4px_-4px_10px_0px_rgba(0,0,0,0.4)] rounded-xl"
              >
                Fund
              </Button>
            </CardFooter>
          </form>
        </Card>

        <Dialog
          open={showDialog}
          onOpenChange={(open) => {
            setShowDialog(open)
            if (!open) {
              setAmount("")
            }
          }}
        >
          <DialogContent className="text-center py-14 flex flex-col justify-center gap-8">
            <DialogHeader>
              <DialogTitle>
                <div className="flex flex-col items-center gap-3 text-colors-BlueGray text-2xl font-source font-bold">
                  <Image src={success} alt="Success" />
                  <p className="py-4">Successfull</p>
                </div>
              </DialogTitle>
              <DialogDescription className="text-center text-lg text-colors-BlueGray font-geist">Your organization has been funded successfully.</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={() => setShowDialog(false)} className="w-full text-white bg-colors-ButtonOrange hover:bg-orange-300 shadow-slate-200 px-5 py-6 shadow-[inset_-4px_-4px_10px_0px_rgba(0,0,0,0.4)] rounded-xl">
                Done
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default Deposit_funds


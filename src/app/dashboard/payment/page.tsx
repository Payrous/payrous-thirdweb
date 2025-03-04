'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { CheckCircle } from 'lucide-react'
import React from 'react'
import { useState, useEffect } from 'react'
import { BsFuelPumpFill } from 'react-icons/bs'

interface RecipientDetail {
  walletAddress: string
  tokenAddress: string
  amount: string
  transactionId: string
}

interface OrganizationRecipients {
  [recipient: string]: RecipientDetail
}

interface RecipientDetails {
  [organization: string]: OrganizationRecipients
}

interface BulkRecipientDetail {
  recipientCount: string
  totalAmount: string
  transactionId: string
}

interface BulkRecipientDetails {
  [organization: string]: BulkRecipientDetail
}

const Instant_payment = () => {
 // Individual recipient state
 const [organization, setOrganization] = useState<string>("")
 const [recipient, setRecipient] = useState<string>("")
 const [walletAddress, setWalletAddress] = useState<string>("")
 const [tokenAddress, setTokenAddress] = useState<string>("")
 const [amount, setAmount] = useState<string>("")
 const [remarks, setRemarks] = useState<string>("")

 // Bulk recipient state
 const [bulkOrganization, setBulkOrganization] = useState<string>("")
 const [recipientCount, setRecipientCount] = useState<string>("")
 const [totalAmount, setTotalAmount] = useState<string>("")
 const [bulkRemarks, setBulkRemarks] = useState<string>("")

 // Dialog state
 const [showTransactionDialog, setShowTransactionDialog] = useState<boolean>(false)
 const [showSuccessDialog, setShowSuccessDialog] = useState<boolean>(false)
 const [isIndividual, setIsIndividual] = useState<boolean>(true)
 const [transactionId, setTransactionId] = useState<string>("")

 const showAdditionalFields: boolean = organization !== "" && recipient !== ""
 const isAccountFormValid: boolean =
   organization !== "" &&
   recipient !== "" &&
   (showAdditionalFields ? walletAddress.trim() !== "" && tokenAddress.trim() !== "" && amount.trim() !== "" : true)

 const isBulkFormValid: boolean = bulkOrganization !== ""

 // Sample data for dropdowns
 const organizations: string[] = ["Organization A", "Organization B", "Organization C"]
 const recipients: string[] = ["Recipient 1", "Recipient 2", "Recipient 3"]

 // Sample data mapping for auto-filling fields
 const recipientDetails: RecipientDetails = {
   "Organization A": {
     "Recipient 1": {
       walletAddress: "0x1234...5678",
       tokenAddress: "0xABCD...EF01",
       amount: "100",
       transactionId: "0xbd20...3571",
     },
     "Recipient 2": {
       walletAddress: "0x8765...4321",
       tokenAddress: "0xFEDC...BA98",
       amount: "200",
       transactionId: "0xab12...7890",
     },
     "Recipient 3": {
       walletAddress: "0x2468...1357",
       tokenAddress: "0x1357...2468",
       amount: "300",
       transactionId: "0xcd34...5678",
     },
   },
   "Organization B": {
     "Recipient 1": {
       walletAddress: "0xAAAA...BBBB",
       tokenAddress: "0xCCCC...DDDD",
       amount: "150",
       transactionId: "0xef56...9012",
     },
     "Recipient 2": {
       walletAddress: "0xEEEE...FFFF",
       tokenAddress: "0x1111...2222",
       amount: "250",
       transactionId: "0xgh78...3456",
     },
     "Recipient 3": {
       walletAddress: "0x3333...4444",
       tokenAddress: "0x5555...6666",
       amount: "350",
       transactionId: "0xij90...7890",
     },
   },
   "Organization C": {
     "Recipient 1": {
       walletAddress: "0x7777...8888",
       tokenAddress: "0x9999...0000",
       amount: "175",
       transactionId: "0xkl12...3456",
     },
     "Recipient 2": {
       walletAddress: "0xAA11...BB22",
       tokenAddress: "0xCC33...DD44",
       amount: "275",
       transactionId: "0xmn34...7890",
     },
     "Recipient 3": {
       walletAddress: "0xEE55...FF66",
       tokenAddress: "0x1122...3344",
       amount: "375",
       transactionId: "0xop56...1234",
     },
   },
 }

 // Bulk recipient data
 const bulkRecipientDetails: BulkRecipientDetails = {
   "Organization A": {
     recipientCount: "15",
     totalAmount: "1500",
     transactionId: "0xbulk1...5678",
   },
   "Organization B": {
     recipientCount: "25",
     totalAmount: "2500",
     transactionId: "0xbulk2...9012",
   },
   "Organization C": {
     recipientCount: "35",
     totalAmount: "3500",
     transactionId: "0xbulk3...3456",
   },
 }

 // Auto-fill fields when organization and recipient are selected
 useEffect(() => {
   if (organization && recipient && recipientDetails[organization]?.[recipient]) {
     const details = recipientDetails[organization][recipient]
     setWalletAddress(details.walletAddress)
     setTokenAddress(details.tokenAddress)
     setAmount(details.amount)
     setTransactionId(details.transactionId)
   }
 }, [organization, recipient])

 // Auto-fill bulk fields when organization is selected
 useEffect(() => {
   if (bulkOrganization && bulkRecipientDetails[bulkOrganization]) {
     const details = bulkRecipientDetails[bulkOrganization]
     setRecipientCount(details.recipientCount)
     setTotalAmount(details.totalAmount)
     setTransactionId(details.transactionId)
   } else {
     setRecipientCount("")
     setTotalAmount("")
   }
 }, [bulkOrganization])

 const handlePayClick = (individual: boolean): void => {
   setIsIndividual(individual)
   setShowTransactionDialog(true)
 }

 const handleDecline = (): void => {
   setShowTransactionDialog(false)
 }

 const handleAccept = (): void => {
   setShowTransactionDialog(false)
   setShowSuccessDialog(true)
 }

 const handleRemarksChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
   setRemarks(e.target.value)
 }

 const handleBulkRemarksChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
   setBulkRemarks(e.target.value)
 }


  return (
    <div className='flex flex-col p-5 md:py-4 md:px-10'>
      <div className=''>
        <h1 className='text-colors-BlueGray font-bold font-source text-lg'>Instant payment</h1>
        <hr className='w-full text-colors-DarkGray py-5' />
      </div>

      <div className='flex flex-col justify-center h-full items-center top-10'>
      <Tabs defaultValue="account" className="w-full md:w-[550px]">
        <TabsList className="grid w-full grid-cols-2 bg-colors-BlueGray">
          <TabsTrigger
            value="account"
            className="data-[state=active]:bg-colors-ButtonOrange data-[state=active]:text-white py-2"
          >
            Individual Recipient
          </TabsTrigger>
          <TabsTrigger
            value="password"
            className="data-[state=active]:bg-colors-ButtonOrange data-[state=active]:text-white py-2"
          >
            Bulk Recipient
          </TabsTrigger>
        </TabsList>

        {/* Individual Recipient Tab */}
        <TabsContent value="account">
          <Card>
            <CardContent className="space-y-2 pt-4">
              <div className="space-y-1">
                <Label htmlFor="organization">Select Organization</Label>
                <Select value={organization} onValueChange={setOrganization}>
                  <SelectTrigger id="organization" className={organization ? "bg-white border-0" : ""}>
                    <SelectValue placeholder="Select organization" />
                  </SelectTrigger>
                  <SelectContent>
                    {organizations.map((org) => (
                      <SelectItem key={org} value={org}>
                        {org}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <Label htmlFor="recipient">Select Recipient</Label>
                <Select value={recipient} onValueChange={setRecipient}>
                  <SelectTrigger id="recipient" className={recipient ? "bg-white border-0" : ""}>
                    <SelectValue placeholder="Select recipient" />
                  </SelectTrigger>
                  <SelectContent>
                    {recipients.map((rec) => (
                      <SelectItem key={rec} value={rec}>
                        {rec}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {showAdditionalFields && (
                <>
                  <div className="space-y-1">
                    <Label htmlFor="walletAddress">Wallet Address</Label>
                    <Input
                      id="walletAddress"
                      value={walletAddress}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setWalletAddress(e.target.value)}
                      placeholder="Enter wallet address"
                      readOnly
                    />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="tokenAddress">Token Address</Label>
                    <Input
                      id="tokenAddress"
                      value={tokenAddress}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setTokenAddress(e.target.value)}
                      placeholder="Enter token address"
                      readOnly
                    />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      value={amount}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      readOnly
                    />
                    <div className="flex justify-between items-center text-sm mt-1">
                      <span className="text-green-500 font-medium">Transaction fees: 0.5%</span>
                      <BsFuelPumpFill className="h-5 w-5 text-orange-500" />
                    </div>
                  </div>
                </>
              )}

              <div className="space-y-1">
                <Label htmlFor="remarks">Remarks (Optional)</Label>
                <Textarea
                  id="remarks"
                  value={remarks}
                  onChange={handleRemarksChange}
                  placeholder="What's this for?"
                  className="min-h-[80px] resize-none"
                />
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button
                disabled={!isAccountFormValid}
                className="w-40 pt-3 text-white bg-colors-ButtonOrange hover:bg-orange-300 shadow-slate-200 px-5 py-6 shadow-[inset_-4px_-4px_10px_0px_rgba(0,0,0,0.4)] rounded-xl"
                onClick={() => handlePayClick(true)}
              >
                Pay
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Bulk Recipient Tab */}
        <TabsContent value="password">
          <Card>
            <CardContent className="space-y-2 pt-4">
              <div className="space-y-1">
                <Label htmlFor="bulkOrganization">Select Organization</Label>
                <Select value={bulkOrganization} onValueChange={setBulkOrganization}>
                  <SelectTrigger
                    id="bulkOrganization"
                    className={bulkOrganization ? "bg-white border-0 shadow-md" : ""}
                  >
                    <SelectValue placeholder="Select organization" />
                  </SelectTrigger>
                  <SelectContent>
                    {organizations.map((org) => (
                      <SelectItem key={org} value={org}>
                        {org}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1">
                <Label htmlFor="recipientCount">Number of Recipients</Label>
                <Input
                  id="recipientCount"
                  value={recipientCount}
                  readOnly
                  placeholder="Auto-generated after selecting organization"
                />
                <div className="flex justify-between items-center text-sm mt-1">
                  <span className="text-orange-500">Auto-generated based on organization</span>
                  {recipientCount && (
                    <span className="text-orange-500 font-medium cursor-pointer">View recipients</span>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="totalAmount">Amount</Label>
                <Input
                  id="totalAmount"
                  value={totalAmount}
                  readOnly
                  placeholder="Auto-generated after selecting organization"
                />
                <div className="flex justify-between items-center text-sm mt-1">
                  <span className="text-orange-500">
                    Auto-generated based on total amount allocated to each recipient
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <Label htmlFor="bulkRemarks">Remarks (Optional)</Label>
                <Textarea
                  id="bulkRemarks"
                  value={bulkRemarks}
                  onChange={handleBulkRemarksChange}
                  placeholder="What's this for?"
                  className="min-h-[80px] resize-none"
                />
              </div>
            </CardContent>
            <CardFooter className="justify-end">
              <Button
                disabled={!isBulkFormValid}
                className="w-40 pt-3 text-white bg-colors-ButtonOrange hover:bg-orange-300 shadow-slate-200 px-5 py-6 shadow-[inset_-4px_-4px_10px_0px_rgba(0,0,0,0.4)] rounded-xl"
                onClick={() => handlePayClick(false)}
              >
                Pay
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

  
         {/* Transaction Details Dialog */}
         <Dialog open={showTransactionDialog} onOpenChange={setShowTransactionDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Transaction Details</DialogTitle>
            <DialogDescription>Please review the transaction details before proceeding.</DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-4">
            {isIndividual ? (
              // Individual recipient details
              <>
                <div className="grid grid-cols-3 gap-2">
                  <div className="font-medium">Organization:</div>
                  <div className="col-span-2">{organization}</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="font-medium">Recipient:</div>
                  <div className="col-span-2">{recipient}</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="font-medium">Wallet Address:</div>
                  <div className="col-span-2 break-all">{walletAddress}</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="font-medium">Token Address:</div>
                  <div className="col-span-2 break-all">{tokenAddress}</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="font-medium">Amount:</div>
                  <div className="col-span-2">{amount}</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="font-medium">Transaction Fee:</div>
                  <div className="col-span-2">0.5%</div>
                </div>
                {remarks && (
                  <div className="grid grid-cols-3 gap-2">
                    <div className="font-medium">Remarks:</div>
                    <div className="col-span-2">{remarks}</div>
                  </div>
                )}
              </>
            ) : (
              // Bulk recipient details
              <>
                <div className="grid grid-cols-3 gap-2">
                  <div className="font-medium">Organization:</div>
                  <div className="col-span-2">{bulkOrganization}</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="font-medium">Recipients:</div>
                  <div className="col-span-2">{recipientCount}</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="font-medium">Total Amount:</div>
                  <div className="col-span-2">{totalAmount}</div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div className="font-medium">Transaction Fee:</div>
                  <div className="col-span-2">0.5%</div>
                </div>
                {bulkRemarks && (
                  <div className="grid grid-cols-3 gap-2">
                    <div className="font-medium">Remarks:</div>
                    <div className="col-span-2">{bulkRemarks}</div>
                  </div>
                )}
              </>
            )}
          </div>
          <DialogFooter className="flex justify-between sm:justify-between">
            <Button variant="destructive" onClick={handleDecline}>
              Decline
            </Button>
            <Button className="bg-green-600 hover:bg-green-700" onClick={handleAccept}>
              Accept
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

        {/* Success Dialog */}
        <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="flex flex-col items-center">
            <CheckCircle className="h-16 w-16 text-green-500 mb-2" />
            <DialogTitle className="text-xl">Congratulations!</DialogTitle>
            <DialogDescription className="text-center">
              {isIndividual ? (
                <span>
                  Your transaction to <span className="font-bold">{recipient}</span> was successful with transaction ID{" "}
                  <span className="font-medium">{transactionId}</span>
                </span>
              ) : (
                <span>
                  Your transaction to <span className="font-bold">{bulkOrganization} recipients</span> was successful
                  with transaction ID <span className="font-medium">{transactionId}</span>
                </span>
              )}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-center">
            <Button className="bg-green-600 hover:bg-green-700" onClick={() => setShowSuccessDialog(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      </div>

    </div>
  )
}

export default Instant_payment

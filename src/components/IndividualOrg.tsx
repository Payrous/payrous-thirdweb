"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { BiEditAlt } from "react-icons/bi"
import { RiDeleteBin4Line } from "react-icons/ri"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { X, Check } from "lucide-react"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "./ui/pagination"


const initialTransactions = [
    {
        name: "John Doe",
        walletAddress: "0x1234...5678",
        amount: "0.5 ETH",
    },
    {
        name: "Jane Smith",
        walletAddress: "0x9876...3210",
        amount: "1.2 ETH",
    },
    {
        name: "Alice Johnson",
        walletAddress: "0x2468...1357",
        amount: "0.8 ETH",
    },
    {
        name: "Bob Williams",
        walletAddress: "0x3690...1478",
        amount: "2.0 ETH",
    },
    {
        name: "Charlie Brown",
        walletAddress: "0x7531...9512",
        amount: "0.3 ETH",
    },
    {
        name: "Diana Prince",
        walletAddress: "0x1597...5310",
        amount: "1.5 ETH",
    },
    {
        name: "Ethan Hunt",
        walletAddress: "0x9876...3210",
        amount: "1.2 ETH",
    },
    {
        name: "Fiona Gallagher",
        walletAddress: "0x1597...5311",
        amount: "1.5 ETH",
    },
]

const IndividualOrg = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedTransactions, setSelectedTransactions] = useState<string[]>([])
    // const [showAlert, setShowAlert] = useState(true)
    const [transactions, setTransactions] = useState(initialTransactions)
    const [editingTransaction, setEditingTransaction] = useState<string | null>(null)
    const itemsPerPage = 6
    const totalPages = Math.ceil(transactions.length / itemsPerPage)

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage)
        }
    }

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentTransactions = transactions.slice(startIndex, endIndex)

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            setSelectedTransactions(currentTransactions.map((t) => t.walletAddress))
        } else {
            setSelectedTransactions([])
        }
    }

    const handleSelectTransaction = (walletAddress: string, checked: boolean) => {
        if (checked) {
            setSelectedTransactions([...selectedTransactions, walletAddress])
        } else {
            setSelectedTransactions(selectedTransactions.filter((id) => id !== walletAddress))
        }
    }

    const handleEdit = (walletAddress: string) => {
        setEditingTransaction(walletAddress)
    }

    const handleDelete = (walletAddress: string) => {
        setTransactions(transactions.filter((t) => t.walletAddress !== walletAddress))
    }

    const handleSaveEdit = (walletAddress: string, newData: Partial<(typeof transactions)[0]>) => {
        setTransactions(transactions.map((t) => (t.walletAddress === walletAddress ? { ...t, ...newData } : t)))
        setEditingTransaction(null)
    }
    return (
        <div className="">
            {/* {showAlert && (
                <Alert className="bg-green-100 border-green-400 text-green-700 w-full mb-4">
                    <div className="flex items-center">
                        <Check className="h-4 w-4 mr-2" />
                        <AlertDescription>Success! Recipients added successfully.</AlertDescription>
                    </div>
                    <Button
                        className="absolute top-2 right-2 text-green-700 hover:text-green-900"
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowAlert(false)}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </Alert>
            )} */}
            <div className="overflow-x-auto">
                <Table className="min-w-full">
                    <TableHeader>
                        <TableRow className="">
                            <TableHead className="min-w-[200px] text-colors-BlueGray font-bold font-source text-sm ml-2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="select-all"
                                        checked={
                                            currentTransactions.length > 0 && selectedTransactions.length === currentTransactions.length
                                        }
                                        onCheckedChange={handleSelectAll}
                                    />
                                    <label htmlFor="select-all">Name</label>
                                </div>
                            </TableHead>
                            <TableHead className="min-w-[200px] text-colors-BlueGray font-bold font-source text-sm">
                                Wallet Address
                            </TableHead>
                            <TableHead className="min-w-[200px] text-colors-BlueGray font-bold font-source text-sm">Amount</TableHead>
                            <TableHead className="min-w-[00px] text-colors-BlueGray font-bold font-source text-sm "><span className="ml-4">Status</span></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {currentTransactions.map((transaction) => (
                            <TableRow key={transaction.walletAddress}>
                                <TableCell>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`checkbox-${transaction.walletAddress}`}
                                            checked={selectedTransactions.includes(transaction.walletAddress)}
                                            onCheckedChange={(checked) =>
                                                handleSelectTransaction(transaction.walletAddress, checked as boolean)
                                            }
                                        />
                                        <label htmlFor={`checkbox-${transaction.walletAddress}`}>
                                            {editingTransaction === transaction.walletAddress ? (
                                                <input
                                                    type="text"
                                                    defaultValue={transaction.name}
                                                    onBlur={(e) => handleSaveEdit(transaction.walletAddress, { name: e.target.value })}
                                                />
                                            ) : (
                                                transaction.name
                                            )}
                                        </label>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    {editingTransaction === transaction.walletAddress ? (
                                        <input
                                            type="text"
                                            defaultValue={transaction.walletAddress}
                                            onBlur={(e) => handleSaveEdit(transaction.walletAddress, { walletAddress: e.target.value })}
                                        />
                                    ) : (
                                        transaction.walletAddress
                                    )}
                                </TableCell>
                                <TableCell>
                                    {editingTransaction === transaction.walletAddress ? (
                                        <input
                                            type="text"
                                            defaultValue={transaction.amount}
                                            onBlur={(e) => handleSaveEdit(transaction.walletAddress, { amount: e.target.value })}
                                        />
                                    ) : (
                                        transaction.amount
                                    )}
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center">
                                        <Button variant="ghost" size="icon" onClick={() => handleEdit(transaction.walletAddress)}>
                                            <BiEditAlt className="h-4 w-4 text-yellow-600" />
                                        </Button>
                                        <Button variant="ghost" size="icon" onClick={() => handleDelete(transaction.walletAddress)}>
                                            <RiDeleteBin4Line className="h-4 w-4 text-red-600" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="flex justify-center items-center md:justify-end mt-3 ">
                <Pagination className="cursor-pointer">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                            />
                        </PaginationItem>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <PaginationItem key={page}>
                                <PaginationLink onClick={() => handlePageChange(page)} isActive={currentPage === page}>
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext
                                className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    )
}

export default IndividualOrg

'use client'
import React from 'react'
import { useState } from 'react'
import Image from "next/image"

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { HiOutlinePlusSm } from "react-icons/hi";
import { success } from '@/assets/images'
import { coin } from '@/data/coin'

const AddOrg = () => {

    const [showCongrats, setShowCongrats] = useState(false)
    const [showCreateProfile, setShowCreateProfile] = useState(false)
    const [selected, setSelected] = useState<string>("")

    const handleSaveChanges = () => {
        setShowCongrats(true)
        setShowCreateProfile(false)
    }

    return (
        <div>
            <Dialog open={showCreateProfile} onOpenChange={setShowCreateProfile}>
                <DialogTrigger asChild>
                    <Button variant="outline" className="border border-colors-ButtonOrange text-colors-ButtonOrange hover:text-colors-ButtonOrange hover:shadow-sm flex items-center gap-2 hover:bg-colors-OffWhite bg-colors-WhiteSmoke py-5 rounded-xl font-semibold font-geist">
                        Add Organization
                        <span className="border border-colors-ButtonOrange rounded-md ">
                            <HiOutlinePlusSm size={5} />
                        </span>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader className='text-colors-BlueGray'>
                        <DialogTitle className='text-lg font-source'>Create Organization</DialogTitle>
                        <DialogDescription className='text-colors-BlueGray'>Please enter the <span className='text-colors-ButtonOrange'>details of your organization</span> in the fields below</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4 text-colors-BlueGray">
                        <div className="grid gap-2">
                            <Label htmlFor="org-name">Organization Name</Label>
                            <Input id="org-name" placeholder="Enter organization name" required />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="role">Token type</Label>
                            <Select>
                                <SelectTrigger id="role" className='bg-white data-[state=open]:bg-white'>
                                    <SelectValue placeholder="Select a role" />
                                </SelectTrigger>
                                <SelectContent className='max-h-[300px] overflow-hidden'>
                                    {
                                        coin.map((item) => (
                                            <SelectItem key={item.id} value={item.valueInput} onSelect={() => setSelected(item.valueInput)}>
                                                <div className="flex items-center gap-2">
                                                    <Image src={item.image} alt='' className='w-5 h-5' />
                                                    <div>
                                                        <div className="font-medium">{item.title}</div>
                                                        <div className={`text-xs text-muted-foreground ${selected === item.valueInput ? "hidden" : "block"}`}>{item.desc}</div>
                                                    </div>
                                                </div>
                                            </SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <div className="grid gap-1.5 leading-none">
                                <label
                                    htmlFor="terms"
                                    className="text-xs font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Token not available click here to import tokens
                                </label>
                                <p className="text-[10px] text-colors-Warning italic">Note only ERC20 tokens and native cryprocurrency allowed</p>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" className="w-full bg-colors-ButtonOrange hover:bg-orange-300 shadow-slate-200 px-5 py-6 shadow-[inset_-4px_-4px_10px_0px_rgba(0,0,0,0.4)] rounded-xl " onClick={handleSaveChanges}>
                            Save
                        </Button>
                    </DialogFooter>
                    <DialogClose className="absolute right-4 top-4 rounded-full border stroke-colors-BlueGray ">
                        <span className="sr-only stroke-colors-BlueGray">Close</span>
                    </DialogClose>
                </DialogContent>
            </Dialog>

            {/* //for congrats */}
            <Dialog open={showCongrats} onOpenChange={setShowCongrats}>
                <DialogContent className="sm:max-w-[425px] text-center py-16 flex flex-col justify-center gap-8">
                    <DialogHeader className='text-colors-BlueGray '>
                        <div className='flex flex-col items-center gap-2'>
                            <Image src={success} alt='' />
                            <DialogTitle>Congratulations!</DialogTitle>
                        </div>
                        <DialogDescription className='text-colors-BlueGray text-center py-4'>Your organization is created successfully</DialogDescription>
                    </DialogHeader>
                    <DialogFooter >
                        <Button onClick={() => setShowCongrats(false)} className='w-full bg-colors-ButtonOrange hover:bg-orange-300 shadow-slate-200 px-5 py-6 shadow-[inset_-4px_-4px_10px_0px_rgba(0,0,0,0.4)] rounded-xl'>Done</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>


    )
}

export default AddOrg

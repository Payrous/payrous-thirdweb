import React from 'react'
import Image from "next/image"
import { coinbase_logo, org_icon } from '@/assets/icons'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { HiOutlinePlusSm } from "react-icons/hi";

const Organization = () => {
  return (
    <div className='text-colors-BlueGray font-geist text-lg'>
      <div className=' flex flex-col justify-center items-center text-center w-full h-[80vh] gap-3'>
        <Image src={org_icon} alt="oraganization icon" className='text-colors-ButtonOrange w-5 h-5' />
        <h1 className='font-source font-bold'>No Organization added</h1>
        <p className='w-[450px]'>You do not have any Organization. Click on the button below to start creating one.</p>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="border border-colors-ButtonOrange text-colors-ButtonOrange hover:text-colors-ButtonOrange hover:shadow-sm flex items-center gap-2 hover:bg-colors-OffWhite bg-colors-WhiteSmoke py-4 font-semibold font-geist">
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
                <Input id="org-name" placeholder="Enter organization name" required/>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="role">Token type</Label>
                <Select>
              <SelectTrigger id="role">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user">
                  <div className="flex items-center gap-2">
                    <Image src={coinbase_logo} alt='' className='w-5 h-5' />
                    <div>
                      <div className="font-medium">User</div>
                      <div className="text-xs text-muted-foreground">Standard access</div>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="admin">
                  <div className="flex items-center gap-2">
                  <Image src={coinbase_logo} alt='' className='w-5 h-5' />
                    <div>
                      <div className="font-medium">Admin</div>
                      <div className="text-xs text-muted-foreground">Full access</div>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="moderator">
                  <div className="flex items-center gap-2">
                  <Image src={coinbase_logo} alt='' className='w-5 h-5' />
                    <div>
                      <div className="font-medium">Moderator</div>
                      <div className="text-xs text-muted-foreground">Limited control</div>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="developer">
                  <div className="flex items-center gap-2">
                  <Image src={coinbase_logo} alt='' className='w-5 h-5' />
                    <div>
                      <div className="font-medium">Developer</div>
                      <div className="text-xs text-muted-foreground">Technical access</div>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="manager">
                  <div className="flex items-center gap-2">
                  <Image src={coinbase_logo} alt='' className='w-5 h-5' />
                    <div>
                      <div className="font-medium">Manager</div>
                      <div className="text-xs text-muted-foreground">Team oversight</div>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="support">
                  <div className="flex items-center gap-2">
                  <Image src={coinbase_logo} alt='' className='w-5 h-5' />
                    <div>
                      <div className="font-medium">Support</div>
                      <div className="text-xs text-muted-foreground">Customer assistance</div>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="analyst">
                  <div className="flex items-center gap-2">
                  <Image src={coinbase_logo} alt='' className='w-5 h-5' />
                    <div>
                      <div className="font-medium">Analyst</div>
                      <div className="text-xs text-muted-foreground">Data insights</div>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="designer">
                  <div className="flex items-center gap-2">
                    <Image src={coinbase_logo} alt='' className='w-5 h-5' />
                    <div>
                      <div className="font-medium">Designer</div>
                      <div className="text-xs text-muted-foreground">Creative work</div>
                    </div>
                  </div>
                </SelectItem>
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
              <Button type="submit" className="w-full bg-colors-ButtonOrange hover:bg-orange-300 shadow-slate-200 px-5 py-7 shadow-[inset_-4px_-4px_10px_0px_rgba(0,0,0,0.4)] rounded-xl">
                Save
              </Button>
            </DialogFooter>
            <DialogClose className="absolute right-4 top-4 rounded-full border stroke-colors-BlueGray ">
              <span className="sr-only stroke-colors-BlueGray">Close</span>
            </DialogClose>
          </DialogContent>
        </Dialog>

      </div>
    </div>
  )
}

export default Organization

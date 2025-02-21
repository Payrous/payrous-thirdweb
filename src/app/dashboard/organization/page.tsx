import React from 'react'
import AddOrg from '@/components/AddOrg'
import Image from 'next/image'
import { org } from '@/assets/icons'
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link';
import AddRecipient from '@/components/AddRecipient';


const Organization = () => {
  const x = 0

  return x < 2 ? (
    <div className='text-colors-BlueGray  font-geist flex flex-col gap-4 justify-center w-full p-5 md:px-10 md:py-4'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-2 font-source items-center font-bold text-lg'>
          <h1>Organization</h1>
          <p className='border border-colors-ButtonOrange bg-colors-Primay100 px-2 rounded-md'>2</p>
        </div>
        <div> <AddOrg /></div>
      </div>
      <div className='flex flex-col gap-1 bg-colors-WhiteSmoke rounded-xl p-4 drop-shadow-md'>
        <p className='text-base font-bold'>C</p>
        <Link href='/dashboard/organization/added-organization'>
          <div className='flex justify-between items-center hover:ring-1 hover:ring-colors-ButtonOrange p-1 rounded-md cursor-pointer'>
            <p className='text-sm'>Confab Company<span className='text-[10px]'>  (500 recipients)</span></p>
            <MdKeyboardArrowRight className='w-6 h-6 text-colors-BlueGray' />
          </div>
        </Link>
      </div>

      <AddRecipient />
    </div>

  ) : (
    <div className='text-colors-BlueGray font-geist text-lg'>
      <div className=' flex flex-col justify-center items-center text-center w-full h-[80vh] gap-3'>
        <Image src={org} alt="oraganization icon" className='w-10 h-10 text-colors-ButtonOrange' />
        <h1 className='font-source font-bold'>No Organization added</h1>
        <p className='w-[450px]'>You do not have any Organization. Click on the button below to start creating one.</p>
        <AddOrg />
      </div>
    </div>
  )
}

export default Organization

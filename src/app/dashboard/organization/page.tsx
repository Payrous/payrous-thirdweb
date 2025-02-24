import React from 'react'
import AddOrg from '@/components/AddOrg'
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link';
import AddRecipient from '@/components/AddRecipient';
import { recipient } from '@/data/recipient';
import { FaPeopleGroup } from "react-icons/fa6"; 


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
      {
        recipient.map((item) => (
          <div key={item.id} className='flex flex-col gap-1 bg-colors-WhiteSmoke rounded-xl p-4 drop-shadow-md'>
            <p className='text-base font-bold'>{item.initial}</p>
            <Link href='/dashboard/organization/added-organization'>
              <div className='flex justify-between items-center hover:ring-1 hover:ring-colors-ButtonOrange p-1 rounded-md cursor-pointer'>
                <p className='text-sm'>{item.name}<span className='text-[10px]'>  ({item.recipient} recipients)</span></p>
                <MdKeyboardArrowRight className='w-6 h-6 text-colors-BlueGray' />
              </div>
            </Link>
          </div>
        ))
      }
      <AddRecipient />
    </div>

  ) : (
    <div className='text-colors-BlueGray font-geist text-lg'>
      <div className=' flex flex-col justify-center items-center text-center w-full h-[80vh] gap-3'>
        <FaPeopleGroup className='w-6 h-6 text-colors-ButtonOrange' />
        <h1 className='font-source font-bold'>No Organization added</h1>
        <p className='w-[450px]'>You do not have any Organization. Click on the button below to start creating one.</p>
        <AddOrg />
      </div>
    </div>
  )
}

export default Organization

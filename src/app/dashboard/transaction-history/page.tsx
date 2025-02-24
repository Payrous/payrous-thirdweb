import { recipient } from '@/data/recipient'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const TransactionHistory = () => {
  return (
    <div className='text-colors-BlueGray  font-geist flex flex-col gap-4 justify-center w-full p-5 md:px-10 md:py-4'>
          <h1 className='text-lg font-bold font-source'>All transactions</h1>
          <hr className='w-full text-colors-DarkGray pt-5'/>
  
      {
        recipient.map((item) => (
          <div key={item.id} className='flex flex-col gap-1 bg-colors-WhiteSmoke rounded-xl p-4 drop-shadow-md'>
            <p className='text-base font-bold'>{item.initial}</p>
            <Link href= {item.link}>
              <div className='flex justify-between items-center hover:ring-1 hover:ring-colors-ButtonOrange p-1 rounded-md cursor-pointer'>
                <p className='text-sm'>{item.name}<span className='text-[10px]'>  ({item.recipient} recipients)</span></p>
                <MdKeyboardArrowRight className='w-6 h-6 text-colors-BlueGray' />
              </div>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default TransactionHistory
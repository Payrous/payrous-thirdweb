import { dashboard_icon, search } from '@/assets/icons'
import { avatar } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

const Header = () => (
  <div className='bg-colors-OffWhite shadow-lg w-full px-10 py-5 font-geist text-colors-BlueGray flex justify-between items-center'>
    <div className='flex items-center gap-2'>
      <Image src={dashboard_icon} alt='dashboard_icon' className='w-6 h-6 text-colors-BlueGray ' />
      <h1 className='font-bold'>Dashboard</h1>
    </div>
    <div className='flex items-center gap-5'>
      <div className='relative'>
        <input type="text" placeholder='Search here' className='rounded-full px-10 py-3 border focus:border-colors-BlueGray w-96 relative' />
        <Image src={search} alt='search_icon' className='w-5 h-5 absolute top-3 ml-4' />
      </div>
      <div className='flex items-center gap-2'>
        <Image src={avatar} alt='avatar' className='w-10 h-10' />
        <p className='text-colors-Success text-sm'>0x73f7...dd58</p>
      </div>
    </div>
  </div>
)

export default Header

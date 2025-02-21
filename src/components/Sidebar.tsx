// import Dashboard from '@/app/dashboard/dashboard/page'
// import Organization from '@/app/dashboard/organization/page'
// import Payment from '@/app/dashboard/payment/page'
// import Image from 'next/image'
// import { dashboard_icon, org, payment_icon, payrous_logo, transact_icon } from '@/assets/icons'
// import Link from 'next/link'
// import React from 'react'

// const Sidebar = () => {
//   return (
//     <div className='h-screen bg-colors-BlueGray text-white px-4 py-10 w-52 rounded-r-[40px] flex flex-col justify-between font-geist text-base'>
//       <div className='flex flex-col gap-3'>
//         <Image src={payrous_logo} alt="payrous-logo " className='w-20 h-20 items-center ml-10' />

//         <div className='flex flex-col gap-6 items-start text-sm '>
//           <Link href="/dashboard/dashboard">
//             <div className='flex items-center gap-2'><Image src={dashboard_icon} alt='dashboard_icon' className='w-5 h-5' /> <h1>Dashboard</h1></div>
//           </Link>
//           <Link href="/dashboard/organization">
//             <div className='flex items-center gap-2'><Image src={org} alt='organization_icon' className='w-5 h-5'/> <h1>Organization</h1></div>
//           </Link>
//           <Link href="/dashboard/payment">
//             <div className='flex items-center gap-2'><Image src={payment_icon} alt='payment_icon' className='w-5 h-5'/> <h1>Payment</h1></div>
//           </Link>
//           <Link href="/dashboard/transaction-history">
//             <div className='flex items-center gap-2'><Image src={transact_icon} alt='transaction-history_icon' className='w-5 h-5'/> <h1>Transaction history</h1></div>
//           </Link>
//         </div>

//       </div>

//       <div>
//         <h1 className='text-sm'>Connected to</h1>
//         <h2 className='font-semibold py-1 text-sm'>Ethereum Mainnet</h2>
//         <p className='text-colors-Success font-semibold '>0x73f7...dd58</p>
//         <div className='py-4'>
//           <button className='rounded-full border border-red-600 text-red-600 py-2 px-10'
//           >Disconnect
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Sidebar


'use client'
import Dashboard from '@/app/dashboard/dashboard/page';
import Organization from '@/app/dashboard/organization/page';
import Payment from '@/app/dashboard/payment/page';
import Image from 'next/image';
import { dashboard_icon, org, payment_icon, payrous_logo, transact_icon } from '@/assets/icons';
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  
  return (
    <div className='hidden lg:flex h-screen bg-colors-BlueGray text-white px-4 py-10 w-52 rounded-r-[40px] flex-col justify-between font-geist text-base'>
      <div className='flex flex-col gap-3'>
        <Image src={payrous_logo} alt="payrous-logo" className='w-20 h-20 items-center ml-10' />

        <div className='flex flex-col gap-6 items-start text-sm'>
          <Link href="/dashboard/dashboard">
            <div className={`flex items-center gap-2 ${pathname === '/dashboard/dashboard' ? 'text-colors-ButtonOrange' : ''}`}>
              {pathname === '/dashboard/dashboard' && <hr className='w-0.5 h-5 bg-colors-ButtonOrange mr-2' />}
              <Image src={dashboard_icon} alt='dashboard_icon' className='w-5 h-5' />
              <h1>Dashboard</h1>
            </div>
          </Link>
          <Link href="/dashboard/organization">
            <div className={`flex items-center gap-2 ${pathname === '/dashboard/organization' ? 'text-colors-ButtonOrange' : ''}`}>
              {pathname === '/dashboard/organization' && <hr className='w-0.5 h-5 bg-colors-ButtonOrange mr-2' />}
              <Image src={org} alt='organization_icon' className='w-5 h-5' />
              <h1>Organization</h1>
            </div>
          </Link>
          <Link href="/dashboard/payment">
            <div className={`flex items-center gap-2 ${pathname === '/dashboard/payment' ? 'text-colors-ButtonOrange' : ''}`}>
              {pathname === '/dashboard/payment' && <hr className=' w-0.5 h-5 bg-colors-ButtonOrange mr-2' />}
              <Image src={payment_icon} alt='payment_icon' className='w-5 h-5' />
              <h1>Payment</h1>
            </div>
          </Link>
          <Link href="/dashboard/transaction-history">
            <div className={`flex items-center gap-2 ${pathname === '/dashboard/transaction-history' ? 'text-colors-ButtonOrange' : ''}`}>
              {pathname === '/dashboard/transaction-history' && <hr className='w-0.5 h-5 bg-colors-ButtonOrange mr-2' />}
              <Image src={transact_icon} alt='transaction-history_icon' className='w-5 h-5' />
              <h1>Transaction history</h1>
            </div>
          </Link>
        </div>
      </div>

      {/* Connected to Ethereum section */}
      <div>
        <h1 className='text-sm'>Connected to</h1>
        <h2 className='font-semibold py-1 text-sm'>Ethereum Mainnet</h2>
        <p className='text-colors-Success font-semibold'>0x73f7...dd58</p>
        <div className='py-4'>
          <button className='rounded-full border border-red-600 text-red-600 py-2 px-10'>Disconnect</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

'use client'
import Dashboard from '@/app/dashboard/dashboard/page';
import Organization from '@/app/dashboard/organization/page';
import Payment from '@/app/dashboard/payment/page';
import Image from 'next/image';
import { dashboard_icon, org, payment_icon, payrous_logo, transact_icon } from '@/assets/icons';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { IoCloseSharp } from "react-icons/io5";
import { VscChromeMinimize } from "react-icons/vsc";
import { TbSmartHome } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoWalletOutline } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";


interface SidebarProps {
  isMobile: boolean;
  toggleSidebar: () => void;
  setSidebarVisible: (visible: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobile, toggleSidebar, setSidebarVisible }) => {
  const pathname = usePathname();

  const handleClose = () => {
    setSidebarVisible(false);
  };

  return (
    <div className={`h-screen bg-colors-BlueGray text-white px-4 py-10 w-60 lg:w-52 lg:rounded-r-[40px] flex flex-col justify-between font-geist text-base ${isMobile ? 'fixed top-0 left-0 z-50' : ''}`}>
      {/* Close Button for mobile */}
      <div className='flex md:flex lg:hidden justify-between items-center relative gap-40'>
        {isMobile && (
          <button onClick={handleClose} className="absolute top-6 left-2 text-white z-50">
            <IoCloseSharp className="h-6 w-6" />
          </button>
        )}
        <Link href='/'>
          <Image src={payrous_logo} alt="payrous-logo" className='w-20 h-20 items-center ml-20' />
        </Link>
      </div>

      <div className='flex flex-col gap-3'>
        <Link href='/'>
          <Image src={payrous_logo} alt="payrous-logo" className='hidden lg:flex w-20 h-20 items-center ml-10' />
        </Link>

        <div className='flex flex-col gap-6 items-start text-sm'>
          <Link href="/dashboard/dashboard">
            <div className={`flex items-center gap-2 hover:text-colors-ButtonOrange ${pathname === '/dashboard/dashboard' ? 'text-colors-ButtonOrange' : ''}`}>
              {pathname === '/dashboard/dashboard' && <VscChromeMinimize className='w-0.5 h-5 bg-colors-ButtonOrange mr-2 ' />}
              <TbSmartHome className='w-4 h-4' />
              <h1>Dashboard</h1>
            </div>
          </Link>
          <Link href="/dashboard/organization">
            <div className={`flex items-center gap-2 hover:text-colors-ButtonOrange ${pathname === '/dashboard/organization' ? 'text-colors-ButtonOrange' : ''}`}>
              {pathname === '/dashboard/organization' && <VscChromeMinimize className='w-0.5 h-5 bg-colors-ButtonOrange mr-2 ' />}
              <FaPeopleGroup className='w-4 h-4' />
              <h1>Organization</h1>
            </div>
          </Link>
          <Link href="/dashboard/payment">
            <div className={`flex items-center gap-2 hover:text-colors-ButtonOrange ${pathname === '/dashboard/payment' ? 'text-colors-ButtonOrange' : ''}`}>
              {pathname === '/dashboard/payment' && <VscChromeMinimize className='w-0.5 h-5 bg-colors-ButtonOrange mr-2 ' />}
              <IoWalletOutline className='w-4 h-4' />
              <h1>Payment</h1>
            </div>
          </Link>
          {/* subpayment pages */}
          <Link href="/dashboard/payment/recurring">
            <div className={`flex items-center gap-2 hover:text-colors-ButtonOrange ${pathname === '/dashboard/payment/recurring' ? 'text-colors-ButtonOrange' : ''}`}>
              {pathname === '/dashboard/payment/recurring'}
              <h1>Recurring</h1>
            </div>
          </Link>
          <Link href="/dashboard/payment/one-time">
            <div className={`flex items-center gap-2 hover:text-colors-ButtonOrange ${pathname === '/dashboard/payment/one-time' ? 'text-colors-ButtonOrange' : ''}`}>
              {pathname === '/dashboard/payment/one-time'}
              <h1>One-Time</h1>
            </div>
          </Link>
          <Link href="/dashboard/payment/deposit-fund">
            <div className={`flex items-center gap-2 hover:text-colors-ButtonOrange ${pathname === '/dashboard/payment/deposit-fund' ? 'text-colors-ButtonOrange' : ''}`}>
              {pathname === '/dashboard/payment/deposit-fund'}
              <h1>Deposit Fund</h1>
            </div>
          </Link>
          {/* end of subpayment pages */}
          <Link href="/dashboard/transaction-history">
            <div className={`flex items-center gap-2 hover:text-colors-ButtonOrange ${pathname === '/dashboard/transaction-history' ? 'text-colors-ButtonOrange' : ''}`}>
              {pathname === '/dashboard/transaction-history' && <VscChromeMinimize className='w-0.5 h-5 bg-colors-ButtonOrange mr-2 ' />}
              <CgFileDocument className='w-4 h-4' />
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
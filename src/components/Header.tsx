'use client'
import { search } from '@/assets/icons';
import { avatar } from '@/assets/images';
import React, { useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { IoIosMenu } from "react-icons/io";
import { TbSmartHome } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6"; 
import { IoWalletOutline } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg"; 


const headerTitles = {
  '/dashboard/dashboard': 'Dashboard',
  '/dashboard/organization': 'Organization',
  '/dashboard/payment': 'Payment',
  '/dashboard/transaction-history': 'Transaction History',
  '/dashboard/payment/recurring': 'Payment',
  '/dashboard/payment/one-time': 'Payment',
  '/dashboard/payment/deposit-fund': 'Payment',
};

const headerIcons = {
  '/dashboard/dashboard': TbSmartHome,
  '/dashboard/organization': FaPeopleGroup,
  '/dashboard/payment': IoWalletOutline,
  '/dashboard/transaction-history': CgFileDocument,
  '/dashboard/payment/recurring': IoWalletOutline,
  '/dashboard/payment/one-time': IoWalletOutline,
  '/dashboard/payment/deposit-fund': IoWalletOutline,
};

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    toggleSidebar(); 
  };

  const IconComponent = headerIcons[pathname] || TbSmartHome;

  return (
    <div className='bg-colors-OffWhite shadow-lg w-full px-6 md:px-10 py-5 font-geist text-colors-BlueGray flex justify-between items-center'>

      <button className='lg:hidden' onClick={handleMenuToggle}>
        <IoIosMenu className='text-colors-BlueGray h-6 w-6' />
      </button>
      <div className='flex items-center gap-2'>
        <IconComponent className='w-6 h-6 text-colors-BlueGray' />
        <h1 className='font-bold'>{headerTitles[pathname] || 'Default Title'}</h1>
      </div>

      <div className='hidden lg:flex items-center gap-5'>
        <div className='relative flex items-center gap-2'>
          <input type="text" placeholder='Search here' className='rounded-full px-10 py-3 border focus:border-colors-BlueGray w-96 relative' />
          <Image src={search} alt='search_icon' className='w-4 h-4 absolute top-4 ml-4' />
        </div>

        <div className='flex items-center gap-2'>
          <Image src={avatar} alt='avatar' className='w-10 h-10' />
          <p className='text-colors-Success text-sm'>0x73f7...dd58</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
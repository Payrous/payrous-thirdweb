import { payrous_logo } from '@/assets/icons';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';


const Navbar = () => {
  return (
    <div className='hidden md:hidden py-10 px-0 lg:flex justify-center items-center w-full'>
      <div className='bg-white flex p-5 rounded-xl w-full h-[80px] justify-center items-center'>
        <nav className='flex items-center justify-between w-full'>
         
          <Image src={payrous_logo} alt="payrous logo" className='w-24' />

         
          <ul className='flex items-center gap-8 text-sm font-light font-geist cursor-pointer text-colors-BlueGray'>
            <li className='text-orange-400'>Features</li>
            <Link href="/how-it-works" className='hover:text-orange-400 hover:underline-offset-2 decoration-2'><li>How it works</li></Link>
            <Link href="/faq" className='hover:text-orange-400 hover:underline-offset-2 decoration-2'><li>FAQs</li></Link>
          </ul>
          
          <Link href="/connect-wallet">
          <Button
            type="submit"
            className='text-white bg-[#D98837] hover:bg-orange-300 shadow-slate-200 px-8 py-5 shadow-[inset_-4px_-4px_10px_0px_rgba(0,0,0,0.4)] rounded-xl font-geist'
          >
            Connect Wallet
          </Button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
import { payrous_logo } from '@/assets/icons';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import Link from 'next/link';
import faq from '@/app/faq/page';
import how_it_works from '@/app/how-it-works/page';


const Navbar = () => {
  return (
    <div className='py-10 px-0 flex justify-center items-center w-full'>
      <div className='bg-white flex p-4 rounded-xl w-full max-w-[1160px] h-[80px]'>
        <nav className='flex items-center justify-between w-full'>
         
          <Image src={payrous_logo} alt="payrous logo" className='w-24' />

         
          <ul className='flex items-center gap-8 text-sm font-light font-geist cursor-pointer'>
            <li className='text-orange-400'>Features</li>
            <Link href="/how-it-works" className='hover:text-orange-400'><li>How it works</li></Link>
            <Link href="/faq" className='hover:text-orange-400'><li>FAQs</li></Link>
          </ul>

          <Button
            type="submit"
            className='text-white bg-[#D98837] shadow-slate-200 px-6 shadow-[inset_-4px_-4px_10px_0px_rgba(0,0,0,0.4)] rounded-lg font-geist'
          >
            Connect Wallet
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
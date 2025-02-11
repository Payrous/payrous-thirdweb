'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/compat/router';
import { FaTimes, FaBars } from 'react-icons/fa'; 
import { Button } from './ui/button';
import { payrous_logo } from '@/assets/icons';

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => router?.pathname === path;

  return (
    <div className='py-4 px-4 flex justify-center items-center w-full'>
      <div className='bg-white flex p-4 rounded-xl w-full max-w-[1160px] h-[80px] shadow-lg'>
        <nav className='flex items-center justify-between w-full relative'>
          {/* Logo */}
          <Image src={payrous_logo} alt="Payrous logo" className='w-24' />

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={toggleMenu} 
            className='md:hidden p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all'
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6 text-gray-700" /> 
            ) : (
              <FaBars className="h-6 w-6 text-gray-700" /> 
            )}
          </button>

          {/* Mobile Nav Menu */}
          {isMenuOpen && (
            <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col items-center justify-center gap-8 text-lg font-medium shadow-lg transition-all duration-300">
              <button 
                onClick={closeMenu} 
                className='absolute top-6 right-6 p-3 rounded-full bg-gray-100 hover:bg-gray-200'
              >
                <FaTimes className="h-6 w-6 text-gray-700" />
              </button>

              <ul className='flex flex-col items-center gap-6'>
                <li className={`${isActive('/') ? 'text-orange-400' : 'text-gray-700'}`}>
                  <Link href="/" onClick={closeMenu}>Features</Link>
                  {isActive('/') && <hr className="w-full border-orange-400" />}
                </li>
                <li className={`${isActive('/how-it-works') ? 'text-orange-400' : 'text-gray-700'}`}>
                  <Link href="/how-it-works" onClick={closeMenu}>How it works</Link>
                  {isActive('/how-it-works') && <hr className="w-full border-orange-400" />}
                </li>
                <li className={`${isActive('/faq') ? 'text-orange-400' : 'text-gray-700'}`}>
                  <Link href="/faq" onClick={closeMenu}>FAQs</Link>
                  {isActive('/faq') && <hr className="w-full border-orange-400" />}
                </li>
              </ul>

              {/* Mobile Button (Now Visible in Mobile Menu) */}
              <Button
                type="submit"
                className='text-white bg-[#D98837] hover:bg-orange-300 shadow-slate-200 px-8 py-4 shadow-[inset_-4px_-4px_10px_0px_rgba(0,0,0,0.4)] rounded-lg font-geist'
              >
                Connect Wallet
              </Button>
            </div>
          )}

          {/* Desktop Button */}
          <Button
            type="submit"
            className='hidden md:block text-white bg-[#D98837] hover:bg-orange-300 shadow-slate-200 px-8 py-4 shadow-[inset_-4px_-4px_10px_0px_rgba(0,0,0,0.4)] rounded-lg font-geist'
          >
            Connect Wallet
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;

import React from 'react'
import Image from 'next/image';
import { FaDiscord } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { payrous_logo, warpcastlogo } from '@/assets/icons';

const Footer = () => {
    return (
        <div className='bg-white pt-20 pb-10x px-48 font-source font-normal  flex flex-col gap-10'>
            <div className=' text-colors-BlueGray text-base flex justify-between '>
                <div>
                    <Image src={payrous_logo} alt="payrous logo" className='w-24 pb-3' />
                    <p className=' w-[350px]'>Payrous is a blockchain-powered platform designed to streamline payroll and bulk payment processes by enabling organizations to efficiently handle payments to multiple recipients.</p>
                </div>

                <div className=''>
                    <h1 className='font-semibold pb-3'>Company</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className='hover:text-orange-300 cursor-pointer'>Features</li>
                        <li className='hover:text-orange-300 cursor-pointer'>How it works</li>
                        <li className='hover:text-orange-300 cursor-pointer'>FAQs</li>
                    </ul>
                </div>

                <div className=''>
                    <h1 className='font-semibold pb-3'>Legal</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className='hover:text-orange-300 cursor-pointer'>Privacy Policy</li>
                        <li className='hover:text-orange-300 cursor-pointer'>Terms and condition</li>
                    </ul>
                </div>

                <div className=''>
                    <h1 className='font-semibold pb-3'>Social media</h1>
                    <ul className='flex flex-col gap-2'>
                        <li className='hover:text-orange-300 cursor-pointer flex items-center gap-1'><span><FaDiscord /></span>Discord</li>
                        <li className='hover:text-orange-300 cursor-pointer flex items-center gap-1'><span><BsTwitterX /></span>Twitter</li>
                        <li className='hover:text-orange-300 cursor-pointer flex items-center gap-1'><Image src={warpcastlogo} alt='warpcast' className='w-5 h-5'/>Warpcast</li>
                    </ul>
                </div>
            </div>

            <div>
                <div className='w-full text-gray-400'><hr /></div>
                <h1 className='flex items-center justify-center text-gray-400 py-3'>© 2025 Payrous.</h1>
            </div>

        </div>



    )
}

export default Footer
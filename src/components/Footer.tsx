import React from 'react'
import Image from 'next/image';
import { payrous_logo } from '@/assets/icons';

const Footer = () => {
    return (
        <div className='bg-white py-20 px-48 font-source text-colors-BlueGray text-base flex font-normal justify-between'>
            <div>
                <Image src={payrous_logo} alt="payrous logo" className='w-24' />
                <p className=' w-[350px]'>Payrous is a blockchain-powered platform designed to streamline payroll and bulk payment processes by enabling organizations to efficiently handle payments to multiple recipients.</p>
            </div>

            <div className=''>
                <h1 className='font-semibold pb-3'>Company</h1>
                <ul className='flex flex-col gap-2'>
                    <li>Features</li>
                    <li>How it works</li>
                    <li>FAQs</li>
                </ul>
            </div>

            <div className=''>
                <h1 className='font-semibold pb-3'>Legal</h1>
                <ul className='flex flex-col gap-2'>
                    <li>Privacy Policy</li>
                    <li>Terms and condition</li>
                </ul>
            </div>

            <div className=''>
                <h1 className='font-semibold pb-3'>Social media</h1>
                <ul className='flex flex-col gap-2'>
                    <li>Discord</li>
                    <li>Twitter</li>
                    <li>Warpcast</li>
                </ul>
            </div>

        </div>
    )
}

export default Footer
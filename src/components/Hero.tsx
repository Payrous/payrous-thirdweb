import React from 'react';
import { frame1, frame2 } from '@/assets/images';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import { demo_icon } from '@/assets/icons';

const Hero = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full px-2 pt-28 py-0 md:pt-32 lg:pt-0 md:py-12'>

            <div>
                <div className='flex flex-col md:flex-row w-full'>
                    <h1 className='font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left font-source text-white w-full md:w-3/5'>
                        Simplify Your Payroll with
                        <span className='text-colors-ButtonOrange italic font-geist'> Payrous</span>
                    </h1>
                    <h1 className='text-sm font-extralight text-center md:text-left leading-6 text-white font-geist md:w-2/5 w-full py-6 md:py-0 px-0 lg:px-3'>
                        Revolutionize your payroll experience with Payrous, a cutting-edge
                        blockchain-powered platform that simplifies bulk payment processes.
                        Effortlessly manage and automate payments to multiple recipients
                        while leveraging the security of smart contracts—ensuring timely,
                        cost-effective transactions in both native cryptocurrency and ERC20
                        tokens.
                    </h1>

                </div>

                <div className='flex flex-col md:flex-row gap-3 pt-0 md:pt-4 '>
                    <Button
                        type='submit'
                        className='text-white w-full md:w-40 lg:w-44 bg-colors-ButtonOrange hover:bg-orange-300 shadow-slate-200 px-5 py-7 shadow-[inset_-4px_-4px_10px_0px_rgba(0,0,0,0.4)] rounded-xl'
                    >
                        Try payrous free
                        <GoArrowRight />
                    </Button>
                    <Button className='border border-orange-400 hover:bg-white hover:border-none bg-colors-BlueGray bg-none w-full md:w-40 lg:w-44 text-colors-ButtonOrange px-5 py-7 rounded-xl'>
                        Watch demo
                        <Image src={demo_icon} alt='demo' className='w-4 h-4' />
                    </Button>
                </div>

            </div>

            <div className='flex flex-col md:flex-row items-center gap-2 md:gap-0 py-8 md:py-3 lg:py-2'>
                <Image src={frame1} alt='dashboard-picture' className='w-full md:w-[460px] lg:w-[780px] overflow-hidden' />
                <Image src={frame2} alt='cube-frame' className='w-full md:w-[300px] lg:w-[500px] mb-0 lg:-mt-10 overflow-hidden' />
            </div>
        </div>
    );
};

export default Hero;
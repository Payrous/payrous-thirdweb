import React from 'react';
import { frame1, frame2 } from '@/assets/images';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';
import { demo_icon } from '@/assets/icons';

const Hero = () => {
    return (
        <div className='flex flex-col md:flex-row gap-0.5 items-center justify-center w-full max-w-7xl mx-auto px-2 py-12'>

            <div className='flex flex-col gap-6 w-full md:w-3/5'>
                <div className='flex flex-col w-full'>
                    <h1 className='font-bold text-5xl md:text-7xl font-source text-white'>
                        Simplify Your Payroll
                    </h1>
                    <h1 className='font-bold text-5xl md:text-7xl font-source text-white'>
                        with{' '}
                        <span className='text-colors-ButtonOrange italic font-geist'>Payrous</span>
                    </h1>
                    <div className='flex flex-col md:flex-row items-center gap-3 py-6'>
                        <Button
                            type='submit'
                            className='text-white w-full md:w-40 bg-colors-ButtonOrange hover:bg-orange-300 shadow-slate-200 px-8 py-4 shadow-[inset_-4px_-4px_10px_0px_rgba(0,0,0,0.4)] rounded-lg'
                        >
                            Try payrous free
                            <GoArrowRight />
                        </Button>
                        <Button className='border border-orange-400 hover:bg-white hover:border-none bg-colors-BlueGray bg-none w-full md:w-40 text-colors-ButtonOrange px-8 py-2 rounded-lg'>
                            Watch demo
                            <Image src={demo_icon} alt='demo' className='w-4 h-4' />
                        </Button>
                    </div>
                </div>
                <Image src={frame1} alt='dashboard-picture' className='w-full' />
            </div>

            <div className='w-full md:w-2/5'>
                <div className='px-2'>
                    <h1 className='text-sm font-extralight leading-6 text-white font-geist'>
                        Revolutionize your payroll experience with Payrous, a cutting-edge
                        blockchain-powered platform that simplifies bulk payment processes.
                        Effortlessly manage and automate payments to multiple recipients
                        while leveraging the security of smart contracts—ensuring timely,
                        cost-effective transactions in both native cryptocurrency and ERC20
                        tokens.
                    </h1>
                </div>
                <div className='mt-8'>
                    <Image src={frame2} alt='cube-frame' className='w-[450px]' />
                </div>
            </div>
        </div>

    );
};

export default Hero;
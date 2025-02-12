import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { elipse2, elipse3 } from '@/assets/images'
import { GoArrowRight } from "react-icons/go";

const Transaction = () => {
    return (
        <div className='bg-slate-50 flex flex-col justify-center items-center p-8 md:p-10 md:px-16 lg:px-32'>
            <div className='bg-colors-BlueGray rounded-3xl py-16 px-8 md:py-16 md:px-48 flex flex-col relative items-center md:w-full'>

                <Image
                    alt=""
                    src={elipse2}
                    fill
                    quality={100}
                    style={{
                        width: '',
                    }}
                    className="z-0 absolute "
                />

                <Image
                    alt=""
                    src={elipse3}
                    quality={100}
                    className="z-0 absolute top-0 right-0 w-40 h-40  md:w-80 md:h-80"
                />
                <div className='flex flex-col text-center justify-center items-center'>
                    <h1 className='relative z-10 font-source font-bold text-white text-2xl md:text-5xl'>
                        Start your <span className='italic text-colors-ButtonOrange font-geist'>first transaction</span> today!
                    </h1>
                    <p className='text-sm font-source text-white py-5 w-full md:w-[600px]'>
                        Join thousands of satisfied users who aim to revolutionize how organizations handle payments, ensuring efficiency, cost savings, and security.
                    </p>
                </div>
                <Button
                    type='submit'
                    className='text-white w-full md:w-40 lg:w-44 bg-colors-ButtonOrange hover:bg-orange-300 shadow-slate-200 px-5 py-7 shadow-[inset_-4px_-4px_10px_0px_rgba(0,0,0,0.4)] rounded-xl'
                >
                    Try payrous free
                    <GoArrowRight />
                </Button>
            </div>
        </div>
    )
}

export default Transaction
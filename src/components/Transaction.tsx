import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { elipse2, elipse3 } from '@/assets/images'

const Transaction = () => {
    return (
        <div className='bg-slate-50 flex flex-col justify-center items-center p-10'>
            <div className='bg-colors-BlueGray rounded-3xl py-6 px-24 md:py-16 md:px-48 flex flex-col relative items-center'>

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
                    className="z-0 absolute top-0 right-0 w-80 h-80"
                />
                <div className='flex flex-col text-center items-center'>
                    <h1 className='relative z-10 font-source font-bold text-white text-xl md:text-5xl'>
                        Start your <span className='italic text-colors-ButtonOrange font-geist'>first transaction</span> today!
                    </h1>
                    <p className='text-xs md:text-sm font-source text-white py-5 w-full md:w-[600px]'>
                        Join thousands of satisfied users who aim to revolutionize how organizations handle payments, ensuring efficiency, cost savings, and security.
                    </p>
                </div>
                <Button
                    type='submit'
                    className='text-white w-full md:w-40 bg-colors-ButtonOrange shadow-slate-200 px-8 shadow-[inset_-4px_-4px_10px_0px_rgba(0,0,0,0.4)] rounded-lg'
                >
                    Try payrous free
                </Button>
            </div>
        </div>
    )
}

export default Transaction
import React from 'react';
import { Image } from 'next/image';
import { steps } from '@/data/steps';
import StepCard from './StepCard';
import frame4 from "@/assets/images/frame4.png";
import frame5 from "@/assets/images/frame5.png";
import frame6 from "@/assets/images/frame6.png";
import frame7 from "@/assets/images/frame7.png";
import { StaticImageData } from 'next/image';

// interface StepCardData {
//     image: StaticImageData;
//     title: string;
//     description: string;
// }

// const stepCardsData: StepCardData[] = [
//     { image: frame4, title: "1. Connect your Crypto Wallet", description: "Get started by clicking the connect wallet button on the landing page" },
//     { image: frame5, title: "2. Secure Transaction", description: "Create organization where you get to add recipients/employees you are sending funds to" },
//     { image: frame6, title: "3. Instant Confirmation", description: "Securely send individual or bulk payments to recipients either instantly or scheduled" },
//     { image: frame7, title: "4. Enjoy Your Assets", description: "Assets are securely stored in your connected wallet" }
// ];

const HowItWorks: React.FC = () => {
    return (
        <div className='bg-slate-50 flex flex-col justify-center items-center py-4'>
            <div className='text-center'>
                <h1 className='relative z-10 font-source font-bold text-colors-BlueGray text-xl md:text-5xl'>
                    How it works: A simple <span className='italic text-colors-ButtonOrange font-geist'>Step by Step </span> Guide
                </h1>
                <p className='text-xs md:text-sm font-source text-colors-BlueGray py-2 font'>
                    Follow these easy steps to make transaction seamless and stress-free
                </p>
            </div>

            {/* Grid layout for cards */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-2 w-full max-w-6xl items-center justify-center">
                {stepCardsData.slice(0, 4).map((step, index) => (
                    <StepCard key={index} {...step} />
                ))}
            </div> */}

            <div>
                {steps.map((steps)=>(
                    <div key={steps.id} className=''></div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
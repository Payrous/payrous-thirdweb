'use client'
import { bnb_logo, coinbase_logo, metamask_logo, phantom_logo, trust_logo } from '@/assets/icons'
import { useState } from 'react'
import React from 'react'
import ConnectButton from '@/components/ConnectButton'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const ConnectWallet: React.FC = () => {
    const [isAnyFocused, setIsAnyFocused] = useState(false);

    const handleFocusChange = (focused: boolean) => {
        setIsAnyFocused(focused);
    };

    return (
        <div className='w-full bg-white'>
            <div className="text-colors-BlueGray font-geist flex flex-col justify-center items-center h-screen w-full px-4 py-14 md:px-16 md:py-0 lg:px-32 lg:py-0">
                <div className='text-center'>
                    <h1 className='font-bold font-source text-xl'>Connect Wallet</h1>
                    <p className=' w-[260px] md:w-[400px] text-lg'>By connecting your wallet, you agree to our <span className='text-colors-ButtonOrange'>Terms of Service</span> and our <span className='text-colors-ButtonOrange'>Privacy Policy</span></p>
                </div>

                <div className='py-6 grid grid-cols-1 gap-4'>
                    <ConnectButton logo={metamask_logo} description="Metamask" onFocusChange={handleFocusChange} />
                    <ConnectButton logo={coinbase_logo} description="Coinbase wallet" onFocusChange={handleFocusChange} />
                    <ConnectButton logo={trust_logo} description="Trust wallet" onFocusChange={handleFocusChange} />
                    <ConnectButton logo={bnb_logo} description="BNB smart wallet" onFocusChange={handleFocusChange} />
                    <ConnectButton logo={phantom_logo} description="Phantom" onFocusChange={handleFocusChange} />
                </div>

                      <div className='py-5'>
                    {isAnyFocused ? (
                        <Link href='/dashboard/dashboard'>
                            <Button
                                type='submit'
                                className={`text-white w-[320px] md:w-[400px] bg-colors-ButtonOrange hover:bg-orange-300 shadow-slate-200 p-5 shadow-[inset_-4px_-4px_10px_0px_rgba(0,0,0,0.4)] rounded-lg`}
                            >
                                Continue
                            </Button>
                        </Link>
                    ) : (
                        <Button
                            type='button'
                            className={`text-white w-[320px] md:w-[400px]  bg-colors-ButtonOrange hover:bg-orange-300 shadow-slate-200 p-5 shadow-[inset_-4px_-4px_10px_0px_rgba(0,0,0,0.4)] rounded-lg cursor-not-allowed`}
                            disabled
                        >
                            Continue
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ConnectWallet;

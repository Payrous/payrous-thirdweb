import React from 'react'
import Image from 'next/image'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqbg } from '@/assets/images'


const Faq = () => {
    return (
        <div className='bg-white py-10 flex flex-col items-center justify-center relative overflow-hidden'>
            <Image
              src={faqbg}
              alt='faq'
              fill
              quality={100}
              className='absolute z-0'
            />
            <div className='text-center'>
                <h1 className='relative z-10 font-source font-bold text-colors-BlueGray text-2xl md:text-5xl'>
                    Frequently Asked <span className='italic text-colors-ButtonOrange'>Questions</span>
                </h1>
                <p className='text-xs md:text-sm font-source text-colors-BlueGray py-2 font'>
                    Follow these easy steps to make transaction seamless and stress-free
                </p>

            </div>
            <div className='px-8 md:px-0 py-10 w-screen md:w-[900px] relative overflow-hidden'>
                <div className='bg-orange-100 rounded-xl'>
                    <Accordion type="single" collapsible className='px-10 py-10'>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='py-5 hover:text-colors-BlueGray'>What is the Payrous App?</AccordionTrigger>
                            <AccordionContent>
                                Setting up your account typically involves visiting the payment platform’s website and connecting your crypto wallet. You’ll need to create an organization to facilitate transactions to recipients.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger className='py-5 hover:text-colors-BlueGray'>How do I set up my account?</AccordionTrigger>
                            <AccordionContent>
                                Setting up your account typically involves visiting the payment platform’s website and connecting your crypto wallet. You’ll need to create an organization to facilitate transactions to recipients.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger className='py-5 hover:text-colors-BlueGray'>What cryptocurrencies does Payrous support?</AccordionTrigger>
                            <AccordionContent>
                                Setting up your account typically involves visiting the payment platform’s website and connecting your crypto wallet. You’ll need to create an organization to facilitate transactions to recipients.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger className='py-5 hover:text-colors-BlueGray'>How do i get started using the Pay4Me App?</AccordionTrigger>
                            <AccordionContent>
                                Setting up your account typically involves visiting the payment platform’s website and connecting your crypto wallet. You’ll need to create an organization to facilitate transactions to recipients.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
            </div>
        </div>
    )
}

export default Faq
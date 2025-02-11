import Image from 'next/image'
import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SocialProof from '@/components/SocialProof'
import HowItWorks from '@/components/HowItWorks'
import Transaction from '@/components/Transaction'
import Faq from '@/components/Faq'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import MobileNavbar from '@/components/MobileNavbar'

const Payrous = () => {
  return (
    <div className='bg-colors-BlueGray px-4 md:px-40 text-o'>
      <Navbar />
      <MobileNavbar/>
      <Hero />
      <div className='-mx-4 md:-mx-40'>
        <SocialProof />
        <Testimonials/>
        <Faq/>
        {/* <HowItWorks/> */}
        <Transaction />
        <Footer/>
      </div>

    </div>
  )
}

export default Payrous
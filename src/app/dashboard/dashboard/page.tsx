import { IoEllipsisHorizontal } from "react-icons/io5";
import React from 'react'
import Image from "next/image"
import { green, red } from "@/assets/icons";
import { avatar } from "@/assets/images";

const Dashboard = () => {
  return (
    <div className='flex flex-col pt-4 px-6 lg:pt-10 lg:px-15 text-colors-BlueGray'>
      <div className="flex justify-center w-full md:w-80 border border-">
        <div className="flex gap-3">
          <Image src={green} alt="income icon"/>
          <div className="flex flex-col text-left gap-2">
            <p className="font-normal font-geist text-sm">Income</p>
            <h1 className="font-bold font-source text-2xl">$0</h1>
          </div>
        </div>
        <div>
          <IoEllipsisHorizontal className=""/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

import { IoEllipsisHorizontal } from "react-icons/io5";
import React from 'react'
import Image from "next/image"
import { green, red } from "@/assets/icons";

const Dashboard = () => {
  return (
    <div className=' text-colors-BlueGray font-geist'>
      <div className="flex gap-4">
        <div className="flex items-center gap-3 rounded-2xl border border-gray-300 p-5 relative w-72">
          <Image src={green} alt='income' />
          <div>
            <p className="text-sm">Income</p>
            <h1 className="font-bold font-source text-2xl">$40,569</h1>
          </div>
          <IoEllipsisHorizontal className="top-8 left-60 absolute" />
        </div>
        <div className="flex items-center gap-3 rounded-2xl border border-gray-300 p-5 relative w-72">
          <Image src={red} alt='expenditure' />
          <div>
            <p className="text-sm">Expenditure</p>
            <h1 className="font-bold font-source text-2xl">$10,255</h1>
          </div>
          <IoEllipsisHorizontal className="top-8 left-60 absolute" />
        </div>
      </div>
    </div>
  )
}

export default Dashboard

import { IoEllipsisHorizontal } from "react-icons/io5";
import React from 'react'
import Image from "next/image"
import { green, red } from "@/assets/icons";
import { avatar } from "@/assets/images";
import OverveiwOrgCard from "@/components/OverveiwOrgCard";

const Dashboard = () => {
  return (
    <div className='flex flex-col pt-4 px-6 lg:pt-10 lg:px-10 text-colors-BlueGray'>
      {/* fund cards */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* income */}
        <div className="w-full h-[136px] md:w-80  border border-colors-LightGray rounded-xl">
          <div className="flex justify-between p-6">
            <div className="flex gap-3">
              <Image src={green} alt="income icon" />
              <div className="flex flex-col text-left gap-2">
                <p className="font-normal font-geist text-sm">Income</p>
                <h1 className="font-bold font-source text-3xl">$0</h1>
              </div>
            </div>
            <div>
              <IoEllipsisHorizontal className="" />
            </div>
          </div>
        </div>
        {/* expenditure */}
        <div className="w-full h-[136px] md:w-80  border border-colors-LightGray rounded-xl">
          <div className="flex justify-between p-6">
            <div className="flex gap-3">
              <Image src={red} alt="income icon" />
              <div className="flex flex-col text-left gap-2">
                <p className="font-normal font-geist text-sm">Expenditure</p>
                <h1 className="font-bold font-source text-3xl">$0</h1>
              </div>
            </div>
            <div>
              <IoEllipsisHorizontal className="" />
            </div>
          </div>
        </div>
        {/* org select */}
        <OverveiwOrgCard />
      </div>

    </div>
  )
}

export default Dashboard

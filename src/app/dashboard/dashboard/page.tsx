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
      <div className="flex flex-col md:flex-row gap-6 w-full md:max-w-[69%] justify-between">
        {/* income */}
        <div className="w-full h-[136px] border border-colors-LightGray rounded-xl">
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
        <div className="w-full h-[136px] border border-colors-LightGray rounded-xl">
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
      </div>

      <div className="flex flex-col md:flex-row-reverse md:items-start md:justify-between gap-6 mt-6">
        <div className="mt-0 md:-mt-40">
          <OverveiwOrgCard />
        </div>
        <div className="w-full h-64 md:col-span-2 border bg-colors-WhiteSmoke rounded-xl mt-6 md:mt-5">

        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <div className="w-full h-[430px] md:col-span-2 md:w-[69%] border bg-colors-WhiteSmoke rounded-xl">

        </div>
        <div className="w-full h-[430px] md:w-[350px] border bg-colors-WhiteSmoke rounded-xl">

        </div>
      </div>

    </div>
  )
}

export default Dashboard

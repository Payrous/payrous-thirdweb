import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React from 'react'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className='bg-colors-OffWhite'>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar />
        <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
          <Header />
          <main className=' '>
            <div>{children}</div>
          </main>
        </div>

      </div>
    </div>
  )
}

export default DashboardLayout

'use client';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { useState, useEffect } from 'react';
import React from 'react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    //  handleResize on mount
    handleResize();

    // Add event
    window.addEventListener('resize', handleResize);

    // Clean event
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <div className='bg-colors-OffWhite'>
      <div className='flex h-screen overflow-hidden'>
       
        {(isMobile ? isSidebarVisible : true) && (
          <Sidebar isMobile={isMobile} toggleSidebar={toggleSidebar} setSidebarVisible={setSidebarVisible} />
        )}

       
        <div className='relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden'>
          <Header toggleSidebar={toggleSidebar} />
          <main className=''>
            <div>{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

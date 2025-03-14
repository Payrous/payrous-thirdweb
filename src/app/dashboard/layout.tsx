"use client"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import { useState, useEffect } from "react"
import type React from "react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarVisible, setSidebarVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  // used from auth context or state management
  const userWallet = "0x73f7...dd58"
  const userAvatar = "/placeholder.svg?height=40&width=40"

  useEffect(() => {
    const handleResize = () => {
      //  mobile and tablet devices
      setIsMobile(window.innerWidth <= 1024)
    }

    // handleResize on mount
    handleResize()

    // Add event
    window.addEventListener("resize", handleResize)

    // Clean event
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev)
  }

  return (
    <div className="bg-colors-OffWhite">
      <div className="flex h-screen overflow-hidden">
        {(isMobile ? isSidebarVisible : true) && (
          <Sidebar
            isMobile={isMobile}
            toggleSidebar={toggleSidebar}
            setSidebarVisible={setSidebarVisible}
            userWallet={userWallet}
            userAvatar={userAvatar}
          />
        )}

        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header toggleSidebar={toggleSidebar} userWallet={userWallet} userAvatar={userAvatar} />
          <main>
            <div>{children}</div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout


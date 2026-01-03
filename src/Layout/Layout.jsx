import React from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <main className="grow mx-auto px-4 py-8">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout

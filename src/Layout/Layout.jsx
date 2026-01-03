import React, { useContext, useState } from 'react'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Layout = () => {

  const { darkMode } = useContext(AppContext);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-200 text-gray-900'}`}>
        <Navbar />
        <main className="grow mx-auto py-8">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout

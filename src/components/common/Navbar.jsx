import { Menu, Moon, Search, Sun, TrendingUp, User2 } from 'lucide-react'
import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';

const Navbar = () => {

  // const [darkMode, setdarkMode] = useState(true)
  const { darkMode , setdarkMode } = useContext(AppContext)
  const NavItems = ["Journal", "Newsletter", "About", "Membership"];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${darkMode ? 'bg-gray-900/80' : 'bg-white/80'} backdrop-blur-md border-b ${darkMode ? 'border-gray-800' : 'border-gray-100'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group" >
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${darkMode ? 'bg-white text-black' : 'bg-black text-white'} transition-transform group-hover:rotate-12`}>
            <TrendingUp size={18} strokeWidth={3} />
          </div>
          <span className={`text-xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Blog<span className="text-indigo-500">.</span>
          </span>
        </div>

        {/* Navbar Items */}
        <nav className="hidden md:flex items-center gap-8">
        {NavItems.map((item) => (
          <a 
          key={item} 
          href={item}
          className={`text-sm font-medium transition-colors ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
            {item}
          </a>
        ))}
      </nav>

      {/* Right Button */}
      <div className="flex items-center gap-4">
        <button className={`p-2 rounded-full hover:cursor-pointer transition-colors ${darkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-600'}`}>
          <Search size={20} />
        </button>
        <button 
          // onClick={toggleTheme}
          onClick={() => setdarkMode(!darkMode)}
          className={`p-2 rounded-full hover:cursor-pointer transition-colors ${darkMode ? 'hover:bg-gray-800 text-yellow-400' : 'hover:bg-gray-100 text-gray-600'}`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className={`md:hidden p-2 rounded-full hover:cursor-pointer transition-colors ${darkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-gray-600'}`}>
          <User2 />
        </button>
        <button className={`hidden md:block px-8 py-3 rounded-full font-semibold border hover:cursor-pointer transition-all ${darkMode ? 'border-gray-500 text-white hover:bg-gray-800' : 'border-gray-200 text-black hover:text-white hover:bg-black'}`}>
            Login
        </button>
        <button className="md:hidden">
           <Menu size={24} className={darkMode ? 'text-white' : 'text-black'} />
        </button>
      </div>


      </div>
    </header>
  )
}

export default Navbar

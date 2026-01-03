import { ArrowRight, TrendingUp } from 'lucide-react'
import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Footer = () => {

  const { darkMode } = useContext(AppContext)

  return (
    <footer className={`py-12 px-6 ${darkMode ? 'bg-gray-900 border-gray-800 text-gray-400' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className={`w-6 h-6 rounded flex items-center justify-center ${darkMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
              <TrendingUp size={14} strokeWidth={3} />
            </div>
            <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Lumina.</span>
          </div>
          <p className="text-sm">Curating the future of design, technology, and culture for the modern thinker.</p>
        </div>

        <div>
          <h4 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-500 transition-colors">Design</a></li>
            <li><a href="#" className="hover:text-indigo-500 transition-colors">Technology</a></li>
            <li><a href="#" className="hover:text-indigo-500 transition-colors">Culture</a></li>
          </ul>
        </div>

        <div>
          <h4 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-indigo-500 transition-colors">About</a></li>
            <li><a href="#" className="hover:text-indigo-500 transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-indigo-500 transition-colors">Privacy</a></li>
          </ul>
        </div>

        <div>
          <h4 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Newsletter</h4>
          <p className="text-sm mb-4">Get the latest trends directly in your inbox.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className={`flex-1 px-4 py-2 rounded-lg text-sm border focus:outline-none focus:ring-2 focus:ring-indigo-500 ${darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300'}`}
            />
            <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200/10 text-center text-xs">
        © 2024 Lumina Media Inc. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

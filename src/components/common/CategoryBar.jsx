import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext';

const CategoryBar = () => {

    const { darkMode, activeCategory, setactiveCategory } = useContext(AppContext)

    const category = ["All", "Design", "Technology", "Culture", "Sports"];

    return (
        <div className={`sticky top-20 font-bold z-40 w-full border-b ${darkMode ? 'bg-gray-900/80' : 'bg-gray-300/10'} backdrop-blur-md border-b ${darkMode ? 'border-gray-800' : 'border-gray-300'} transition-colors duration-300`}>
            <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
                <div className="flex items-center gap-2 py-4">
                    {
                        category.map((cat) => (
                            <button
                                onClick={() => setactiveCategory(cat)}
                                className={`px-5 py-2  rounded-full cursor-pointer text-sm font-bold whitespace-nowrap transition-all duration-300 ${activeCategory === cat
                                        ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 scale-105'
                                        : darkMode
                                            ? 'text-gray-400 hover:text-white bg-gray-800'
                                            : 'text-gray-700 hover:text-black bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default CategoryBar

import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const NewsLetter = () => {

    const { darkMode } = useContext(AppContext)

    return (
        <section className={`py-20 px-6 ${darkMode ? 'bg-linear-to-r from-gray-800 via-gray-950 to-gray-800' : 'bg-linear-to-r from-indigo-600 to-purple-600'}`}>
            <div className="max-w-4xl mx-auto text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay ahead of the curve.</h2>
                <p className="text-lg text-indigo-200 mb-8 max-w-2xl mx-auto">
                    Join 50,000+ designers, developers, and founders getting our weekly deep dives into the future of tech.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-6 py-4 border rounded-full text-white focus:outline-none focus:ring-4 focus:ring-indigo-500/30"
                    />
                    <button className="w-full md:w-auto px-8 py-4 rounded-full bg-white text-indigo-900 font-bold hover:bg-indigo-50 transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter

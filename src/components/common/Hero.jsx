import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { Clock } from 'lucide-react';

const Hero = () => {

    const { darkMode } = useContext(AppContext);

    return (
        <section className='pt-25 pb-12 px-6'>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left side */}
                    <div className="space-y-4 md:space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-500 text-xs font-bold uppercase tracking-wider">
                            Featured Issue
                        </div>
                        <h1 className={`text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Designing for the <br />
                            <span className="text-3xl md:text-5xl gradient-text">next billion users.</span>
                        </h1>
                        <p className={`text-2xs md:text-xl max-w-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Exploring the intersection of accessibility, performance, and human-centric design patterns in emerging markets.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold cursor-pointer transition-all hover:scale-105 active:scale-95 ${darkMode ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
                                Read Story
                            </button>
                            <button className={`px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold border cursor-pointer transition-all hover:scale-105 active:scale-95 ${darkMode ? 'border-gray-700 text-white hover:bg-gray-600/80' : 'border-gray-200 text-black hover:bg-gray-100'}`}>
                                View Archive
                            </button>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-4/3 shadow-2xl">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-2" />
                        <img
                            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
                            alt="Hero"
                            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute bottom-6 left-6 right-6 z-20">
                            <div className="flex items-center justify-between text-white">
                                <span className="text-sm font-medium bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">Editor's Pick</span>
                                <span className="flex items-center gap-2 text-sm font-medium bg-black/50 backdrop-blur-md px-3 py-1 rounded-full"><Clock size={14} /> 12 min read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero

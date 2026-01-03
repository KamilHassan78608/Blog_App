import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { Heart, Clock } from 'lucide-react'

const ArticleCard = ({post}) => {

    const { darkMode } = useContext(AppContext)

    return (
        <article
            // onClick={() => onClick(post)}
            className={`group relative flex flex-col h-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-white hover:shadow-xl border border-gray-100'}`}
        >
            <div className="relative aspect-16/10 overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white bg-black/50 backdrop-blur-md rounded-full">
                        {post.category}
                    </span>
                </div>
            </div>

            <div className="flex-1 p-6 flex flex-col">
                <div className="flex items-center gap-3 text-xs mb-3 font-medium text-gray-500">
                    <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>

                <h3 className={`text-xl font-bold mb-3 leading-tight transition-colors ${darkMode ? 'text-white group-hover:text-indigo-400' : 'text-gray-900 group-hover:text-indigo-600'}`}>
                    {post.title}
                </h3>

                <p className={`text-sm mb-6 line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-200/10">
                    <div className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                            {post.author.charAt(0)}
                        </div>
                        <span className={`text-xs font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className={`flex items-center gap-1 text-xs font-medium transition-colors ${darkMode ? 'text-gray-500 hover:text-red-400' : 'text-gray-400 hover:text-red-500'}`}>
                            <Heart size={14} /> {post.likes}
                        </button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ArticleCard

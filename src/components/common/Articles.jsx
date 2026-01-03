import React, { useContext, useState, useMemo } from 'react'
import { AppContext } from '../../context/AppContext'
import { ArrowRight } from 'lucide-react'
import ArticleCard from './ArticleCard'
import posts from '/Users/mac/Documents/Web/Blog_App/src/data/articles.json'

const Articles = () => {

    const { darkMode, activeCategory, setactiveCategory } = useContext(AppContext)

    // These posts are currently taken from json file later they will be taken from db
    const [allPost, setallPost] = useState(posts)

    const filteredPosts = useMemo(() => {
        if (activeCategory === "All") return allPost;
        return allPost.filter(post => post.category === activeCategory);
    }, [activeCategory])

    return (
        <section className="max-w-7xl mx-auto px-6 py-12">

            {/* Title */}
            <div className="flex items-center justify-between mb-8">
                <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {activeCategory === "All" ? "Latest Stories" : `${activeCategory} Stories`}
                </h2>
                <button onClick={() => setactiveCategory("All")} className="text-sm font-medium text-indigo-500 hover:text-indigo-600 flex items-center gap-1">
                    View all <ArrowRight size={16} />
                </button>
            </div>

            {/* Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    filteredPosts.map((item) => (
                        <ArticleCard post={item} />
                    ))
                }
            </div>

            {/* No Article */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-gray-500">No stories found in this category.</p>
              </div>
            )}
            

        </section>
    )
}

export default Articles

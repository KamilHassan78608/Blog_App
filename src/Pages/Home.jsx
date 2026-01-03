import React from 'react'
import Hero from '../components/common/Hero'
import CategoryBar from '../components/common/CategoryBar'
import Articles from '../components/common/Articles'
import NewsLetter from '../components/common/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero />
      <CategoryBar />
      <Articles />
      <NewsLetter />
    </div>
  )
}

export default Home

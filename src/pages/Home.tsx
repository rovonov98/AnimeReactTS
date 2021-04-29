import React from 'react'
import Header from './../components/Header'
import AnimeList from './../components/AnimeList'

const Home: React.FC = () => {
  return (
    <div className="Home">
      <Header />
      <AnimeList />
    </div>
  )
}

export default Home
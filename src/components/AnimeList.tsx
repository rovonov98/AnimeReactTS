import React, { useState, useEffect } from 'react'
import AnimeCard from './AnimeCard'
import './../assets/scss/AnimeList.scss'

const AnimeList: React.FC = () => {
  const [animeList, setAnimeList] = useState<Array<any>>([])
  const getAnime = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=&order_by=score`)
      const data = await response.json()
      setAnimeList(data.results)
    }
    catch(err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getAnime()
  }, [])
  return (
    <div className="cards-wrapper">
      <div className="cards">
        {
          animeList.map((anime) => (
            <div
              key={ anime.mal_id}
            >
              <AnimeCard anime={ anime }/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default AnimeList
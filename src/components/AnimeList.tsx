import React, { useState, useEffect } from 'react'
import AnimeCard from './AnimeCard'
import { CardType } from './../interface'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardsWrapper: {
      display: 'flex',
      justifyContent: 'center'
    },
    cards: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      margin: '0 auto',
      maxWidth: '60%'
    },
  })
)

const AnimeList: React.FC = () => {
  const classes = useStyles()
  const [animeList, setAnimeList] = useState<Array<CardType>>([])
  const getAnime = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=&order_by=score`)
      const data = await response.json()
      setAnimeList(data.results)
    }
    catch(err) {
      console.warn(err)
    }
  }
  useEffect(() => {
    getAnime()
  }, [])
  return (
    <div className={ classes.cardsWrapper }>
      <div className={ classes.cards }>
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
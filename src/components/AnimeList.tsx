import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useTypesSelector } from './../hooks/useTypesSelector'
import AnimeCard from './AnimeCard'
import { CardType } from './../interface'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import apiCall from './../assets/ts/apiCall'

const useStyles = makeStyles(() =>
  createStyles({
    cardsWrapper: {
      display: 'flex',
      justifyContent: 'center'
    },
    cards: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      maxWidth: '60%'
    },
  })
)

const AnimeList: React.FC = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const animeList = useTypesSelector((state) => state.animeList.list)
  
  useEffect(() => {
    apiCall('')
      .then((res) => dispatch({ type: 'GET_ANIME_LIST', payload: res }))
  }, [])

  return (
    <div className={ classes.cardsWrapper }>
      <div className={ classes.cards }>
        {
          animeList.map((anime: CardType) => (
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
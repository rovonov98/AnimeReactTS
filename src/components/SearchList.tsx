import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { CardType } from './../components/AnimeCard'
import SearchAnimeCard from './../components/SearchAnimeCard'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

const useStyles = (isMobile: boolean) => makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    },
    searchFieldWrapper: {
      padding: '1rem',
    },
    cards: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      width: isMobile ? '60%' : '40%'
    }
  })
)

const SearchList: React.FC = () => {
  const [searchedAnime, setSearchedAnime] = useState<Array<CardType>>([])
  const [isMobile, setIsMobile] = useState<boolean>(true)
  const handleView = () => {
    if (window.innerWidth <= 600) setIsMobile(true)
    else setIsMobile(false)
    
  }
  window.addEventListener('resize', handleView)
  const classes = useStyles(isMobile)()
  let location = useLocation()
  const params = new URLSearchParams(location.search)
  const titleQuery = params.get('title')
  const deviceWidth = window.innerWidth
  const getAnime = async () => {
    try {
      const res = await fetch(`https://api.jikan.moe/v3/search/anime?q=${titleQuery}`)
      const anime = await res.json()
      setSearchedAnime(anime.results)
    }
    catch(err) {
      console.log(err)
      throwErr()
    }
  }
  const throwErr = () => {
    return (
      <div>Error. Try again</div>
    )
  }
  useEffect(() => {
    handleView()
  }, [])
  useEffect(() => {
    getAnime()
  }, [titleQuery])
  return (
    <div className={ classes.cards }>
      {
        searchedAnime.map((anime) => (
          <div
            key={ anime.mal_id }
          >
            <SearchAnimeCard anime={ anime }/>
          </div>
        ))
      }
    </div>
  )
}

export default SearchList
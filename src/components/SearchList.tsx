import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { useDispatch } from 'react-redux'
import { useTypesSelector } from './../hooks/useTypesSelector'
import { CardType } from './../interface'
import SearchAnimeCard from './../components/SearchAnimeCard'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import apiCall from './../assets/ts/apiCall'
import { filteredList } from './../redux/selectors/filteredList'

const useStyles = (isMobile: string | boolean | null | undefined) => makeStyles(() =>
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
  const view = useTypesSelector((state) => state.view.isMobile)
  const dispatch = useDispatch()
  const searchList = useTypesSelector(filteredList)
  const classes = useStyles(view)()
  let location = useLocation()
  const params = new URLSearchParams(location.search)
  const titleQuery = params.get('title')
  const throwErr = () => {
    return (
      <div>Error. Try again</div>
    )
  }
  const renderList = () => {
    if (searchList && searchList.length > 0) return (
      <div className={ classes.cards }>
        {
          searchList.map((anime: CardType) => (
            <div
              key={ anime.mal_id }
            >
              <SearchAnimeCard anime={ anime }/>
            </div>
          ))
        }
      </div>
    )
    return throwErr()
  }
  useEffect(() => {
    apiCall(titleQuery)
      .then((res) => dispatch({ type: 'SEARCH_ANIME_LIST', payload: res }))
      .catch(() => throwErr)
  }, [titleQuery])

  return (
    renderList()
  )
}

export default SearchList
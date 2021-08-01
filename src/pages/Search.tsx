import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import SearchField from './../components/Searchfield'
import SearchList from './../components/SearchList'
import Filter from './../components/Filter'

const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    },
    searchFieldWrapper: {
      padding: '1rem',
    }
  })
)

const Search: React.FC = () => {
  const classes = useStyles()
  return (
    <div>
      <div className={ classes.wrapper }>
        <Filter />
        <div className={ classes.searchFieldWrapper }>
          <SearchField />
        </div>
        <SearchList />
      </div>
    </div>
  )
}

export default Search
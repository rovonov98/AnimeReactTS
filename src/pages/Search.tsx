import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import SearchField from './../components/Searchfield'
import SearchList from './../components/SearchList'

const useStyles = makeStyles((theme: Theme) =>
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
        <div className={ classes.searchFieldWrapper }>
          <SearchField />
        </div>
        <SearchList />
      </div>
    </div>
  )
}

export default Search
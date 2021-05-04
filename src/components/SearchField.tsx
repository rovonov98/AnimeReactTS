import React, { useState } from 'react'
import InputBase from '@material-ui/core/InputBase'
import { useHistory } from 'react-router'
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      border: '1px solid grey',
      borderRadius: '8px',
      padding: '.1rem'
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      // backgroundColor: fade(theme.palette.common.white, 0.15),
      backgroundColor: fade(theme.palette.common.white, 0.9),
      '&:hover': {
        // backgroundColor: fade(theme.palette.common.white, 0.25),
        backgroundColor: fade(theme.palette.common.white, 1),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '30ch',
        '&:focus': {
          width: '50ch',
        },
      },
    },
  }),
)

const SearchField: React.FC = () => {
  const classes = useStyles();
  const [search, setSearch] = useState<string>('')
  const history = useHistory()
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (search !== '') {
      history.push(`/search?title=${ search }`)
    }
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setSearch(event.target.value)
  }
  return (
    <div className={ classes.root }>
      <div className={ classes.search }>
        <div className={ classes.searchIcon }>
          <SearchIcon />
        </div>
        <form action="" onSubmit={ handleSubmit }>
          <InputBase
            onChange={ handleChange }
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </form>
      </div>
    </div>
  )
}

export default SearchField
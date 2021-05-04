import React, { useState } from 'react'
import { useHistory } from 'react-router'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    // menuButton: {
    //   marginRight: theme.spacing(2),
    //   cursor: 'pointer'
    // },
    title: {
      flexGrow: 1,
      display: 'block',
      cursor: 'pointer',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: 'auto',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
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
      width: '12ch',
        '&:focus': {
          width: '20ch',
        },
    },
  }),
)

const Header: React.FC = () => {
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
  const goHome = () => {
    history.push(`/`)
  }
  const classes = useStyles()
  return (
    <div className={ classes.root }>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={ classes.menuButton }
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography 
            className={ classes.title } 
            variant="h5" 
            noWrap
            onClick={ goHome }
          >
            AnimeApp
          </Typography>
          <div className={ classes.search }>
            <div className={ classes.searchIcon }>
              <SearchIcon />
            </div>
            <form onSubmit={ handleSubmit }>
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
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
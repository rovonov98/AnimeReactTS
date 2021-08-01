import React, { useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
// import { red } from '@material-ui/core/colors'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { CardType } from './../interface'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginBottom: '1rem',
    },
    container: {
      display: 'flex',

    },
    media: {
      height: '12rem',
      width: '8rem',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    title: {
      fontSize: '1rem',
      padding: '.3rem'
    },
    link: {
      color: 'black',
      textDecoration: 'none'
    }
  }),
)

interface Props {
  anime: CardType
}

const SearchAnimeCard: React.FC<Props> = ({ anime }) => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState<boolean>(false)
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  
  return (
    <Card className={ classes.root }>
      <div className={ classes.container }>
        <a 
          className={ classes.link }
          href={ anime.url } 
          target='_blank' 
          rel='noopener noreffer'
        >
          <CardMedia
            className={ classes.media }
            image={ anime.image_url }
            title={ anime.title }
          />
        </a>
        <div>
        <a
          className={ classes.link } 
          href={ anime.url } 
          target='_blank' 
          rel='noopener noreffer'
        >
            <Typography
              className={ classes.title }
              variant='body2'
              component='p'
            >
              { anime.title }
            </Typography>
          </a>
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              { `${ anime.type } (${ anime.episodes } eps)` }
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              { `Scored ${ anime.score }` }
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              { `Rated ${ anime.rated }` }
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              { `${ anime.members } members` }
            </Typography>
          </CardContent>
        </div>
      </div>
      <CardActions disableSpacing>
        <IconButton
          className={ clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={ handleExpandClick }
          aria-expanded={ expanded }
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={ expanded } timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Synopsis:</Typography>
          <Typography paragraph>
            { anime.synopsis }
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default SearchAnimeCard

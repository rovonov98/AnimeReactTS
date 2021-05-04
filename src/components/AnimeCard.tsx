import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { CardType } from './../interface'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      color: 'black',
      textDecoration: 'none',
    },
    card: {
      margin: '0.5rem',
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '0 0 1rem -.1rem rgba(191, 191, 191, 1)'
      },
    },
    cardImage: {
      height: '12rem',
      width: '8rem'
    },
    cardTitleWrapper: {
      maxWidth: '5rem'
    },
    cardTitle: {
      whiteSpace: 'nowrap'
    },
    cardRatedScore: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }),
)

interface Props {
  anime: CardType
}

const AnimeCard: React.FC<Props> = ({ anime }) => {
  const classes = useStyles()
  const titleLength = 15
  const animeTitle = (): string => {
    if (anime.title.length > titleLength) {
      return `${ anime.title.split('', titleLength).join('') }...`
    } else {
      return anime.title.split('', titleLength).join('')
    }
  }
  return (
    <a 
      className={ classes.link }
      href={ anime.url } 
      target="_blank" 
      rel="noopener noreffer"
    >
      <div className={ classes.card }>
        <img className={ classes.cardImage } src={ anime.image_url } alt="" loading="lazy"/>
        <div className={ classes.cardTitleWrapper }>
          <p className={ classes.cardTitle }> { animeTitle() } </p>
        </div>
        <div className={ classes.cardRatedScore }>
          <div> { anime.rated } </div>
          <div>&#9734; { anime.score } </div>
        </div>
      </div>
    </a>
    
  )
}

export default AnimeCard
import React from 'react'
import './../assets/scss/AnimeCard.scss'

interface Card {
  image_url: string,
  title: string,
  rated: number,
  score: number,
  url: string
}

interface Props {
  anime: Card
}


const AnimeCard: React.FC<Props> = ({ anime }) => {
  const titleLength = 15
  const animeTitle = (): string => {
    if (anime.title.length > titleLength) {
      return `${ anime.title.split('', titleLength).join('') }...`
    } else {
      return anime.title.split('', titleLength).join('')
    }
  }
  return (
    <a href={ anime.url }>
      <div className="card">
        <img className="card__image" src={ anime.image_url } alt="" loading="lazy"/>
        <div className="card__title-wrapper"><p className="card__title"> { animeTitle() } </p></div>
        <div className="card__rated-score">
          <div className="card__rated"> { anime.rated } </div>
          <div className="card__score">&#9734; { anime.score } </div>
        </div>
      </div>
    </a>
    
  )
}

export default AnimeCard
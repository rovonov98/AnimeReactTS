import { AnyAction } from 'redux'
import { AnimeList } from './../../interface'

const initialState: AnimeList = {
  list: []
}

function animeList(state = initialState, { type, payload }: AnyAction) {
  switch (type) {
    case 'GET_ANIME_LIST':
      return {
        ...state,
        list: payload
      }
    default:
      return state
  }
}

export default animeList
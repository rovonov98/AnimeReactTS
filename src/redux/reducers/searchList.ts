import { AnyAction } from 'redux'
import { AnimeList } from './../../interface'

const initialState: AnimeList = {
  list: []
}

function searchList(state = initialState, { type, payload }: AnyAction) {
  switch (type) {
    case 'SEARCH_ANIME_LIST':
      return {
        ...state,
        list: payload
      }
    default:
      return state
  }
}

export default searchList
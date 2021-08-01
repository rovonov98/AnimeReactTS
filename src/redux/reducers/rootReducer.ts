import { combineReducers } from 'redux'
import animeList from './animeList'
import searchList from './searchList'
import view from './view'
import filter from './filter'

const reducer = combineReducers({
  animeList,
  searchList,
  view,
  filter
})

export type RootState = ReturnType<typeof reducer>
export default reducer   
import animeList from './setAnimeList'
import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  animeList
})


export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
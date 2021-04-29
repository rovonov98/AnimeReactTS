import { createSlice } from '@reduxjs/toolkit'

const animeList = createSlice({
  name: 'toolkit',
  initialState: {
    animeList: [],
    error: ''
  },
  reducers: {
    setAnimeList(state, action) {
      // fetch(`https://api.jikan.moe/v3/search/anime?q=&order_by=score`)
      // .then(res => res.json())
      // .then(data => state.animeList = data.results)
      // .catch(err => state.error = err)
      state.animeList = action.payload
    }
  }
})

export default animeList.reducer
export const { setAnimeList } = animeList.actions
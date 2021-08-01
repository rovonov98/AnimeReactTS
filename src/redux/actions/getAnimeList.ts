const getAnimeList = (payload: object | string | Array<object | string>) => {
  return {
    type: 'GET_ANIME_LIST',
    payload
  }
}

export default getAnimeList
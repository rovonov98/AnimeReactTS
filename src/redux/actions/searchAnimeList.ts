const searchAnime = (payload: object | string | Array<object | string>) => {
  return {
    type: 'SEARCH_ANIME_LIST',
    payload
  }
}

export default searchAnime
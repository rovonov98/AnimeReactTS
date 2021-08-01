const getAnime = async (params: string | null | undefined) => {
  try {
    const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=${params ? params : '&order_by=score'}`)
    const data = await response.json()
    return data.results
  }
  catch(err) {
    return err
  }
}

export default getAnime
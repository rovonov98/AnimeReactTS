const getView = (payload: object | string | boolean) => {
  return {
    type: 'GET_VIEW',
    payload
  }
}

export default getView
export const addFilter = (payload: object | null) => {
  return {
    type: 'ADD_FILTER',
    payload
  }
}

export const removeFilter = (payload: object | string | null) => {
  return {
    type: 'REMOVE_FILTER',
    payload
  }
}
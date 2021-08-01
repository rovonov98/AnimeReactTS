import { createSelector } from 'reselect'

const filters = (state: any) => state.filter
const searchList = (state: any) => state.searchList 

export const filteredList = createSelector(
  [filters, searchList],
  (filters, searchList) => {
    return searchList.list.filter((anime: any) => {
      const bool = filters.conditions.every((filter: any) => {
        switch(filter.name) {
          case 'maxLength':
            if (anime.title.length >= filter.value) return false
          break
          case 'firstChar':
            if (anime.title[0] !== filter.value) return false
          break
        }
        return true
      })

      return bool
    })
  }
)
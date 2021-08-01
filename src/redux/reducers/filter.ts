import { AnyAction } from 'redux'
import { Filter } from '../../interface'

const initialState: Filter = {
  conditions: []
}

function filter(state = initialState, { type, payload }: AnyAction) {
  let conditions
  
  switch (type) {
    case 'ADD_FILTER':
      // conditions = { ...state.conditions }
      // conditions[payload.name] = payload.value
      conditions = [...state.conditions]
      const some = conditions.some((condition) => {
        if(condition.name == payload.name) {
          condition.value = payload.value
          return true
        }
        return false
      }) 
      if (!some) conditions = [...state.conditions].concat(payload)
      return {
        ...state,
        conditions
      }
    case 'REMOVE_FILTER':
      conditions = state.conditions.filter((condition: { name: string }) => condition.name == payload.name)
      return {
        ...state,
        conditions
      }
    default:
      return state
  }
}

export default filter
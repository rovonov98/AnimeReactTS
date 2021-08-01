import { AnyAction } from 'redux'
import { View } from './../../interface'

const initialState: View = {
  isMobile: false
}

function view(state = initialState, { type, payload }: AnyAction) {
  switch (type) {
    case 'GET_VIEW':
      return {
        ...state,
        isMobile: payload
      }
    default:
      return state
  }
}

export default view
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from './../redux/reducers/rootReducer'

export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector
import React from 'react'
import './assets/scss/App.scss'
import Home from './pages/Home'
import { useSelector, useDispatch } from 'react-redux'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const animeList  = useSelector<any>(state => state.animeList)
  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
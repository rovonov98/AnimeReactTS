import React, { useEffect } from 'react'
import './assets/scss/App.scss'
import { useDispatch } from 'react-redux'
import Home from './pages/Home'
import Search from './pages/Search'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const handleView = () => {
    if (window.innerWidth <= 600) dispatch({ type: 'GET_VIEW', payload: true })
    else dispatch({ type: 'GET_VIEW', payload: false })
  }
  window.addEventListener('resize', handleView)
  useEffect(() => {
    handleView()
  }, [])

  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path='/search' component={ Search }/>
        </Switch>
      </div>
    </Router>
  )
}

export default App
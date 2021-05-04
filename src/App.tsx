import React from 'react'
import './assets/scss/App.scss'
import Home from './pages/Home'
import Search from './pages/Search'
// import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'

const App: React.FC = () => {
  // const dispatch = useDispatch()
  // const animeList  = useSelector<any>(state => state.animeList)
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route path="/search" component={ Search }/>
        </Switch>
      </div>
    </Router>
  )
}

export default App
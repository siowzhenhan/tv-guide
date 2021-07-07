import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import DetailsPage from './pages/Details'

// api
// https://contenthub-api.eco.astro.com.my/channel/all.json
// https://contenthub-api.eco.astro.com.my/channel/CHANNEL_ID.json

function App() {
  return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/details/:slug' component={DetailsPage} />
      </Router>
    </div>
  )
}

export default App

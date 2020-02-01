import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import ImageExplorer from 'app/imageExplorer/imageExplorer'
import logo from '../logo.svg'
import './app.css'

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact>
        <div className='app'>
          <header className='app-header'>
            <img src={logo} className='app-logo' alt='logo' />
            <p>
              Edit <code>src/</code> files and save to reload.
            </p>
            <Link
              className='app-link'
              to='/images'
              target='_blank'
              rel='noopener noreferrer'
            >
              Images
            </Link>
          </header>
        </div>
      </Route>
      <Route path='/images'>
        <ImageExplorer />
      </Route>
    </Switch>
  </Router>
)

export default App

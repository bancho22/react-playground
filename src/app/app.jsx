import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ImageExplorer from 'app/imageExplorer/imageExplorer.container'
import AppLink from 'components/appLink/appLink'
import logo from 'images/logo.svg'
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
            <span>Doodles:</span>
            <AppLink to='/images'>
              Images
            </AppLink>
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

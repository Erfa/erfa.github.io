import React, { Component } from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom'
import './App.css'
import { OBSControllerInfo } from './components/OBSControllerInfo'
import { ReactIntro } from './components/ReactIntro'

class App extends Component {
  render() {
    return <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <ReactIntro />
          </Route>
          <Route exact path='/obs-controller'>
            <OBSControllerInfo />
          </Route>
          <Route>Not Found.</Route>
        </Switch>
      </div>
    </Router>
  }
}

export default App;

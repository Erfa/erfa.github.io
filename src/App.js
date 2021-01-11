import React, { Component } from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </Route>
          <Route exact path='/obs-controller'>
            <div style={{width: 400, margin: 'auto'}}>
              <h1>OBS Controller</h1>
              <p>
                Simple is better. This app is just for having a simple mobile scene switcher for <a href="https://obsproject.com/">OBS</a>. It requires the <a href="https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-from-websockets.466/">obs-websocket</a> plugin to be installed.
              </p>
              <p>
                <ul>
                  <li>Hide scenes that you don't want to accidentally switch to</li>
                  <li>Configure a delay for the commands in case you want to sync scene switches with camera delays</li>
                </ul>
              </p>
              <p>If you have any issues with the app, or want to send feedback of any kind, please reach out to <a href="mailto:obscontroller@erikfahlen.se">obscontroller@erikfahlen.se</a></p>
              <p>
                I hope it works for you!
                <br />
                Best, Erik
              </p>
            </div>
          </Route>
          <Route>Not Found.</Route>
        </Switch>
      </div>
    </Router>
  }
}

export default App;

import React, { useEffect } from 'react'
import logo from '../logo.svg'

export const ReactIntro = () => {
  useEffect(() => document.title = 'React App')

  return <>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
  </>
}

import React, { useEffect } from 'react'
import portrait from '../portrait.png'

export const ReactIntro = () => {
  useEffect(() => {
    document.title = 'Erik Fahlén'
    document.getElementById('favicon').href = 'favicon.ico'
    document.getElementById('appleTouchIcon').href = 'logo192.png'
  })

  return <>
    <header className="App-header">
      <img src={portrait} className="Portrait" alt="portrait" />
      <h1 className="App-title">Erik Fahlén</h1>
    </header>
    <p className="App-intro">A very skilled developer.</p>
  </>
}

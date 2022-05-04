import React, { useRef, useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const msg = useRef()
  const [message, setMessage] = useState('')
  async function handleClick() {
    const data = await fetch('/api/test')
    const json = await data.json()
    setMessage(json.msg)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>
          Say hello
        </button>
        <p ref={msg}>{message}</p>
      </header>
    </div>
  );
}

export default App;

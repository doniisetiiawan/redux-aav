/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { createStore } from 'redux';

import logo from './logo.svg';
import './App.css';

const tubeLight = (state = 'OFF', action) => {
  switch (action.type) {
    case 'TURN_ON':
      return 'ON';
    case 'TURN_OFF':
      return 'OFF';
    default:
      return state;
  }
};

const store = createStore(tubeLight);
console.log('Initially tubelight is: ', store.getState());

store.dispatch({ type: 'TURN_ON' });
console.log('Now tubelight is: ', store.getState());

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

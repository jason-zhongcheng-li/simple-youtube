import React from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import MenuBar from './components/MenuBar';
import VideoCards from './components/VideoCards';

function App() {
  return (
    <div className="App">
      <MenuBar />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <VideoCards />
      </header>
    </div>
  );
}

export default App;

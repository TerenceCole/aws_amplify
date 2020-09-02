import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React on AWS Amplify - Terence Cole</h1>
        <p>
        <span>Design and Code by Terence Cole</span><br><a href="https://www.linkedin.com/in/terencecole/"
          target="_blank"><i class="fab fa-linkedin"></i>
          LinkedIn</a> | <a href="https://github.com/TerenceCole" target="_blank"><i class="fab fa-github"></i>
          GitHub</a>
        </p>
      </header>
    </div>
  );
}

export default App;
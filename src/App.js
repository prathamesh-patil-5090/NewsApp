import './App.css';
import NavBar from './components/NavBar';
import React, { Component } from 'react'
import News from './components/News';

export class App extends Component {
  render() {
    return (
      <div style={{}}>
        <NavBar />
        <News />
      </div>
    )
  }
}

export default App

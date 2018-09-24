// my-travels/src/App.js

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Travel from "./Travel";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My travels</h1>
        </header>
        <Travel
          destination="Bordeaux"
          country="France"
          distance="0 kilometers"
          photo="https://secure.meetupstatic.com/photos/event/a/8/6/9/600_474343113.jpeg"
        />
        <hr/>
        <Travel
          destination="Canberra"
          country="Australia"
          distance="17.260 kilometers"
          photo="https://www.realestate.com.au/blog/images/800x600-fit,progressive/2016/06/03140141/Parliamentary-triangle-2000x1500-1024x768.jpg"
        />
      </div>
    );
  }
}

export default App;

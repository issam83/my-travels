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
          <h1 className="App-title">My Travel</h1>
        </header>
        <Travel
         destination="London"
          country="England"
          photo="https://c1.staticflickr.com/9/8183/8101262268_d777824c7e_b.jpg"
          distance=" Distance : 1 246 Km"
        />
        <Travel
          destination="Bali"
          country="Indonesie"
          photo="http://static.asiawebdirect.com/m/bangkok/portals/bali-indonesia-com/homepage/magazine/bali-must-see-temples/pagePropertiesImage/bali-temples.jpg.jpg"
          distance=" Distance : 11 714 Km"
        />
        

      </div>
    );
  }
}

export default App;

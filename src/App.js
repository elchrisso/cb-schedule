import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment'

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="row">
          <div className="col">
            <p>SUN</p>
            1
          </div>
          <div className="col">
            <p>MON</p>
            2
          </div>
          <div className="col">
            <p>TUE</p>
            3
          </div>
          <div className="col">
            <p>WED</p>
            4
          </div>
          <div className="col">
            <p>THU</p>
            5
          </div>
          <div className="col">
            <p>FRI</p>
            6
          </div>
          <div className="col">
            <p>SAT</p>
            7
          </div>
        </header>
      </div>
    );
  }
}

export default App;

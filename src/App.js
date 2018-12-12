import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import {Link, NavLink} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
      <nav>
        <Link to="/">Home</Link><br/>
        <NavLink activeStyle={{color:"red"}} to="/login">Login</NavLink>
      </nav>
<Routes/>
      </div>
    );
  }
}

export default App;

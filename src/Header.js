import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
         <div>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <ul className="navbar">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contactus'>Contact Us</Link></li>
          </ul>
         </div>
        )
    }
}

export default Header;
import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component{
  render(){
    return(
      <header className="header">
        <h1 className="tagline center">My Money Manager</h1>
        <Nav/>
      </header>
    )
  }
}

export default Header;

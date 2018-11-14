import React, { Component } from 'react';
// import './Nav.css';

import { NavLink } from "react-router-dom";

import Pg1 from '../pages/Pg1';
import Pg2 from '../pages/Pg2';
import Pg3 from '../pages/Pg3';

class Nav extends Component {
  render(){
    return(
      <nav className="Nav">
          <ul >
              <li><NavLink to='/Pg1'>HOME</NavLink></li>
              <li><NavLink to='/Pg2'>EXPENSES</NavLink></li>
              <li><NavLink to='/Pg3'>INCOME</NavLink></li>
          </ul>
      </nav>
    );
  }
}

export default Nav;

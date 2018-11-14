import React, { Component } from 'react';
import {MdHome} from "react-icons/md";
import {MdMoneyOff} from "react-icons/md";
import {MdAttachMoney} from "react-icons/md";
import {NavLink} from 'react-router-dom';

class Footer extends Component{
  render(){
    return(
      <footer className="footer">
        <NavLink to="/Pg1"><MdHome/></NavLink>
        <NavLink to="/Pg2"><MdMoneyOff/></NavLink>
        <NavLink to="/Pg3"><MdAttachMoney/></NavLink>
      </footer>
    )
  }
}

export default Footer;

import React, { Component } from 'react';
import {MdDelete} from "react-icons/md";
// import MdCreate from "react-icons/libs/md/create";

class Form extends Component{
  focusInput = React.createRef();

  componentDidMount = ()=> {
    this.focusInput.current.focus();
  }

  render(){
    return(
      <form name="myForm" onSubmit={this.addExpense}>
        <p id="errExp"></p>
        <input id="expField" type="number" name="expense" placeholder="mm/dd/yyyy" ref={this.focusInput} onChange={this.changeExpense}/>

        <input id="amtField" type="text" name="amount" placeholder="Amount" onChange={this.changeAmount}/>
        <p id="errAmt"></p>

        <button type="submit" className="btn">Add</button>
      </form>
    )
  }
}

export default Form;

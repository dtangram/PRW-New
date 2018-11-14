import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>

      // <Router>
      //   <div>
      //     <ul>
      //       <li><Link to="/">HOME</Link></li>
      //       <li><Link to="/expenses">EXPENSES</Link></li>
      //       <li><Link to="/income">INCOME</Link></li>
      //     </ul>
      //
      //     <Route exact path="/" component={Pg1}/>
      //     <Route exact path="/expenses" component={Pg2}/>
      //     <Route exact path="/income" component={Pg3}/>
      //   </div>
      // </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';// ES6
import TransitionGroup from 'react-addons-transition-group';
import $ from 'jquery';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Project';
import NotFound from './components/NotFound';

import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state = {
      showDiamond: false,
      showCoal: true,
      skills: ["JavaScript", "CSS", "HTML5", "Ruby on Rails", "SQL", "ReactJS", "Node.js", "PostgreSQL", "lodash",
      "Bootstrap", "Materialize", "SQL", "Express.js", "Cylon.JS", "SASS", "jQuery"],
    };
    this.handleClick = this.handleClick.bind(this);
}



handleClick(){
   this.setState({
    showDiamond: true,
  });
}

  render() {



     return (
    <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <nav>
                <div className="nav-wrapper #ff6f00 amber darken-4">
                  <a href="https://www.linkedin.com/in/shantel-moore3025/" className="right brand-logo maintitle">Meet Shantel</a>
                  <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                  <ul className="hide-on-med-and-down widerscr">
                      <li className="topnav">
                        <Link to="/" >Home</Link>
                      </li>
                      <li className="topnav">
                        <Link to="/Contact">Contact</Link>
                      </li>
                      <li className="topnav">
                        <Link to="/Projects">Projects</Link>
                      </li>
                      <li className="topnav">
                        <Link to="/About">About</Link>
                      </li>
                  </ul>
                  <ul className="side-nav" id="mobile-demo">
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/Projects">Projects</Link></li>
                        <li><Link to="/About">About</Link></li>
                  </ul>
                </div>
            </nav>
          </div>
          <div className="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={AboutMe} />
              <Route exact path="/contact" component={Contact} />
               <Route exact path="/projects" component={Projects} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}


export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import $ from 'jquery';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import NotFound from './components/NotFound';

import './App.css';


class App extends Component {
/*
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  };

componentWillUnmount(){
  window.addEventListener('scroll', this.handleScroll);
};

handleScroll(event) {
  if (this.scrollIcon !== null) {
  if(($(document).scrollTop() + $(window).height() / 2) > ($('body').height() / 2)){
    $(this.scrollIcon).attr('class', 'fa fa-2x fa-chevron-up');
  }else{
    $(this.scrollIcon).attr('class', 'fa fa-2x fa-chevron-down');
  }
  };
}
*/
  render() {
     return (
    <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <h2 className="maintitle">Welcome</h2>
            <nav>
                <div className="nav-wrapper #ff6f00 amber darken-4">
                  <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                  <ul className="hide-on-med-and-down widerscr">
                      <li className="topnav">
                        <Link to="/" >Home</Link>
                      </li>
                      <li className="topnav">
                        <Link to="/About">About</Link>
                      </li>
                      <li className="topnav">
                        <Link to="/Contact">Contact</Link>
                      </li>
                      <li className="topnav">
                        <Link to="/Projects">Projects</Link>
                      </li>
                  </ul>
                  <ul className="side-nav" id="mobile-demo">
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                        <li><Link to="/Projects">Projects</Link></li>
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

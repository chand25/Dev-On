import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import $ from 'jquery';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Project';
import NotFound from './components/NotFound';
import './App.css';
import Sidebackgrd from './assets/nyclight.gif';
import Mepic from './assets/mepic.png';


class App extends Component {


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
                        <li><div className="userView">
                              <div className="background">
                                <img src={Sidebackgrd} alt='nyc background with flashing lights'/>
                              </div>
                              <a href="#!user"><img className="circle grow" src={Mepic} alt='me wearing red tie'/></a>
                              <a href="#!name"><span className="white-text name">Shantel Moore</span></a>
                              <a href="#!email"><span className="white-text email">moore.shantel@gmail.com</span></a>
                            </div>
                        </li>
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

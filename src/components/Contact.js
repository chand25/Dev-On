import React, { Component } from 'react';
import Dreamnyc from '../assets/dreamnyc.jpg';
import Bkbridgeorange from '../assets/bkbridgeorange.jpg';
import Rejoice from '../assets/P2R.jpg';
import Expectbt from '../assets/phonemakeup.jpg';
import Spread from '../assets/phonemail.jpg';


class Contact extends Component {

  render() {

    let dreamnyc = {
    backgroundImage: `url(${Dreamnyc})` };

    let bkbridge = {
    backgroundImage: `url(${Bkbridgeorange})` };

    let rejoice = {
    backgroundImage: `url(${Rejoice})` };

    let expectBest= {
    backgroundImage: `url(${Expectbt})` };

    let contactWay = {
    backgroundImage: `url(${Spread})` };

    return (

      <div className="wrapper">
          <div className="slider">
                  <div className="left">
                      <img src={expectBest} alt="phone screens with developer lingo"/>
                      <img src={rejoice} alt="girl hands up rejoicing"/>
                      <img src={dreamnyc} alt="dream in a bottle"/>
                  </div>
          </div>

      </div>
    );
  }
}

export default Contact;

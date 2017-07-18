import React, { Component } from 'react';
import Dreamnyc from '../assets/dreamnyc.jpg';
import Bkbridgeorange from '../assets/bkbridgeorange.jpg';
import Rejoice from '../assets/P2R.jpg';
import Expectbt from '../assets/phonemakeup.jpg';
import ContactWay from '../assets/phonemail.jpg';
import Card from '../assets/buscard.png';
import Monitor from '../assets/amonitor.jpeg';



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



    return (

      <div className="wrapperr">
          <div className="slider">
                  <div className="leftcontact">
                      <img src={Expectbt} alt="phone screens with developer lingo"/>
                      <img src={ContactWay} alt="pics of mail box and payphone"/>
                      <img src={Expectbt} alt="phone screens with developer lingo"/>
                      <img src={ContactWay} alt="pics of mail box and payphone"/>
                      <img src={Expectbt} alt="phone screens with developer lingo"/>
                  </div>
          </div>
          <div className="slider">
                  <div className="rightcontact">
                      <img src={Monitor} alt="pics of mail box and payphone"/>
                      <img src={Rejoice} alt="girl hands up rejoicing"/>
                       <img src={Dreamnyc} alt="dream in a bottle"/>
                      <img src={Card} alt="woman holding card"/>
                      <img src={Monitor} alt="pics of mail box and payphone"/>
                      <img src={Card} alt="woman holding card"/>
                  </div>
           </div>

      </div>
    );
  }
}

export default Contact;

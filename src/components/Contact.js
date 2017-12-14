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

    let monitor = {
    backgroundImage: `url(${Monitor})` };

//<img src={Monitor} alt="pics of mail box and payphone"/>
//<div className="neoncontainer" style={monitor}></div>

    return (

      <div className="wrapper">

         <div className="neonbody">

                      <h1>Contact Me</h1>
                      <p className="neonp">
                           <a href="#" className="neona">aspire@shantelmoore.com</a>
                      </p>
         </div>

          <div className="slider">
                  <div className="leftcontact">
                      <img src={Expectbt} alt="phone screens with developer lingo"/>
                      <img src={ContactWay} alt="pics of mail box and payphone"/>
                      <img src={Expectbt} alt="phone screens with developer lingo"/>
                      <img src={ContactWay} alt="pics of mail box and payphone"/>
                      <img src={Expectbt} alt="phone screens with developer lingo"/>
                  </div>
          </div>




      </div>
    );
  }
}

export default Contact;

import React, { Component } from 'react';
import Contactbkg from '../assets/nyclight.gif';
import Dreamnyc from '../assets/dreamnyc.jpg';
import Bkbridgeorange from '../assets/bkbridgeorange.jpg';
import Rejoice from '../assets/P2R.jpg';


class Contact extends Component {

  render() {
    let style = {
    backgroundImage: `url(${Contactbkg})` };

    let dreamnyc = {
    backgroundImage: `url(${Dreamnyc})` };

    let bkbridge = {
    backgroundImage: `url(${Bkbridgeorange})` };
    let rejoice = {
    backgroundImage: `url(${Rejoice})` };

    return (

      <div className="wrapper">
          <div className="pagebkg contact">
              <div className="leftcontact" style={dreamnyc}>
                  <h1 className="contactwords">Contact Me</h1>
              </div>
              <div className="rightcontact" style={rejoice}>
                  <h1 className="contactwords">Contact Me</h1>
              </div>
          </div>
      </div>
    );
  }
}

export default Contact;

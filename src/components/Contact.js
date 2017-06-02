import React, { Component } from 'react';
import Contactbkg from '../assets/nyclight.gif';


class Contact extends Component {

  render() {
    let style = {
    backgroundImage: `url(${Contactbkg})` };
    return (

      <div className="wrapper">
          <div className="pagebkg contact" style={style}>
              <div className="leftcontact">
                  <h1 className="contactwords">Contact Me</h1>
              </div>
              <div className="rightcontact">
                  <h1 className="contactwords">Contact Me</h1>
              </div>
          </div>
      </div>
    );
  }
}

export default Contact;

import React, { Component } from 'react';
import Contactbkg from '../assets/nyclight.gif';


class Contact extends Component {
  render() {
    let style = {
    backgroundImage: `url(${Contactbkg})` };
    return (


         <div className="pagebkg contact" style={style}>

              <div className="contactme">
                  <h1 className="contactwords">Contact Me</h1>
              </div>

         </div>
    );
  }
}

export default Contact;

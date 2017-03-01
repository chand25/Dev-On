import React, { Component } from 'react';
import Aboutbkg from '../assets/deskpen.jpg';
import sublimebkg from '../assets/Instrument_of_Me.jpg';


class About extends Component {
  render() {

  let style = {
    backgroundImage: `url(${Aboutbkg})` };
  let sublimestyle = {
    backgroundImage: `url(${sublimebkg})` };

    return (
<div className="aboutContainer">
     <div className="pagebkg" style={sublimestyle}>
         <div className="aboutMe">
            <div className="rotateAbout">
              <div className="poemTitle">
                <h4>My Instrument and Me</h4>
              </div>
              <p className="story">
                  It is not made of brass or wood.
                  It does not have history dated centuries ago.
                  Rather my instrument does have keys like a piano.
              </p>
              <p className="story">
                  It makes sounds when keys are press, “clickety clack”
                  Maybe it is not music to your ears.
                  <span className="aboutSpan"> But to me:</span>
                   <span className="aboutSpan">.this</span> is my instrument and let me make coding music
             </p>
              <p className="lastVerse">
                  <span className="aboutSpan">.this</span> is my instrument and let me make coding music
                  so your eyes can see;

                  Right now, I spend my life tuning my instrument

                  So let me get back to tuning my instrument
              </p>
            </div>
          </div>
      </div>
    </div>

    );
  }
}

export default About;

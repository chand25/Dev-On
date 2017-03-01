import React, { Component } from 'react';
import Aboutbkg from '../assets/deskpen.jpg';
import sublimebkg from '../assets/Instrument_of_Me.jpg';


class AboutMe extends Component {
  render() {

  let style = {
    backgroundImage: `url(${Aboutbkg})` };
  let sublimestyle = {
    backgroundImage: `url(${sublimebkg})` };

    return (
<div className="aboutContainer">
     <div className="pagebkg" style={sublimestyle}>
         <div className="aboutMe">

               <div className="poemTitle">
                <aside>My Instrument and Me</aside>
               </div>
               <div className="rotateAbout">
              </div>
          </div>
      </div>
    </div>

    );
  }
}

export default AboutMe;

import React, { Component } from 'react';
import homeBkg from '../assets/seeNYbridge.gif';
import skate from '../assets/skateboard.jpeg';
import dreaming from '../assets/stars.gif';
import $ from 'jquery';



class Home extends Component {

render() {

   let firstHomeImg = { backgroundImage: `url(${homeBkg})` };
   let secondHomeImg = { backgroundImage: `url(${skate})` };
   let thirdHomeImg = { backgroundImage: `url(${dreaming})` };



//  seeNYbridge.gif is from Digital artists and photographers Jamie Beck and Kevin Burg
let timer;

 $(window).scroll(function(){
    if (timer){
     window.clearTimeout(timer);
     }
    timer = window.setTimeout(function() {
      let total = ($(document).scrollTop() + $(window).height())/2
      if(total > ($('body').height() / 2)){
      $('#addType').addClass( 'innerStory' );
      $('#addMove').addClass( 'innerStory' );
      };
    },100);
  });



    return (
      <div className="aboutContainer">

            <div className="homeParallax" style={thirdHomeImg}>
               <div className="caption">
                 <span className="insidepic chgclr">
                        <span>Dream. </span>
                        <span>Live. </span>
                        <span>Code. </span>
                       <span>Repeat. </span>
                 </span>
               </div>
             </div>
             <div className="homecontent innerStory">
                  <h3>Web Developer.</h3>
                  <h4>Creator.</h4>
             </div>

             <div className="homeParallax" style={secondHomeImg}>
                 <div className="caption">
                   <span className="insidepic">Born, Raised, & Skated in NYC.</span>
                 </div>
             </div>
             <div className="homecontent" id="addType" >
                  <h3>Driven.</h3>
                  <h4>Passionate.</h4>
             </div>

             <div className="homeParallax citymove" style={firstHomeImg}>
               <div className="caption">
                 <span className="insidepic">Broad Perspective</span>
               </div>
             </div>
             <div className="homecontent" id="addMove">
                  <h3>Artistic. </h3>
                  <h4>Analytical. </h4>
             </div>

      </div>
    );
  }
}

export default Home;

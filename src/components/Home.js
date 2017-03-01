import React, { Component } from 'react';
import Homebkg from '../assets/doorway.jpeg';
import Skate from '../assets/skateboard.jpeg';
import $ from 'jquery';



class Home extends Component {




render() {

let timer;

 $(window).scroll(function(){
    if (timer){
     window.clearTimeout(timer);
     }
    timer = window.setTimeout(function() {
      let total = ($(document).scrollTop() + $(window).height())/2
      if(total > ($('body').height() / 2)){
      $('#addType').addClass( 'innerStory' );
      };
    },100);
  });

   let firstHomeImg = { backgroundImage: `url(${Homebkg})` };
   let secondHomeImg = { backgroundImage: `url(${Skate})` };

    return (
      <div className="aboutContainer">
             <div className="homeParallax" style={firstHomeImg}>
               <div className="caption">
                 <span className="insidepic">I'm Shantel aka Chan.</span>
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
      </div>
    );
  }
}

export default Home;

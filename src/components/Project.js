import React, { Component } from 'react';
import MTK from '../assets/MTKscreenshot.png';
import JCC from '../assets/JCCScreenshot.png';
import Nite from '../assets/ScreenshotNiteOut.png';
import Blog from '../assets/BlogScreenshot.png';
import MIP from '../assets/jsrobots.jpg';
import gallerybkg from '../assets/room.jpg';






class Project extends Component {
  render() {

let style = {
    backgroundImage: `url(${gallerybkg})` };
    return (


        //Responsive Materialize cards -->
<div className="pagebkg" style={style}>
 <div className="projectcontainer">
  <section className="projectcontent">
   <div className="row">

      <div className="col s12 m12 l3">
         <div className="card">
           <div className="card-image large">
             <img className="grow" src={MTK} alt="screenshot of memory game"/>
             <span className="card-title orange-text text-lighten-1 newcolor">Match Two of a Kind</span>
           </div>
           <div className="card-content">
             <p>Memory Agility Game coded in Vanilla Javascript & jQuery</p>
           </div>
           <div className="card-action">
             <a href="http://match-two-of-a-kind.bitballoon.com/">Live Site</a>
             <a href="https://github.com/chand25/Mental-Agility-Game">View Github</a>
           </div>
         </div>
       </div>

       <div className="col s12 m12 l3">
         <div className="card">
           <div className="card-image large">
             <img className="grow x" src={JCC} alt="screenshot of Joe's Cocktail Confections' site"/>
             <span className="card-title orange-text text-lighten-1 newcolor">Joe's Cocktail Confections</span>
           </div>
           <div className="card-content">
             <p>Collaborative project with NYC confectioner using Express.js</p>
           </div>
           <div className="card-action">
             <a href="https://pacific-savannah-99868.herokuapp.com/">Live Site</a>
             <a href="https://github.com/franklinbrooks/Joes-Cocktail-Confections">View Github</a>
           </div>
         </div>
       </div>

       <div className="col s12 m12 l3">
         <div className="card">
           <div className="card-image large">
             <img className="grow picblink" src={Nite} alt="screenshot of Activities manager"/>
             <span className="card-title orange-text text-lighten-1 newcolor">Nite-Out</span>
           </div>
           <div className="card-content">
             <p>Activities manager made with ReactJS and Firebase.</p>
           </div>
           <div className="card-action">
             <a href="http://nite-out-manager.bitballoon.com/">Live Site</a>
             <a href="https://github.com/chand25/Nite-Out">View Github</a>
           </div>
         </div>
       </div>

       <div className="col s12 m12 l3">
         <div className="card">
           <div className="card-image large">
             <img className="grow" src={MIP} alt="screenshot of MIP robots"/>
             <span className="card-title orange-text text-lighten-1 newcolor">Verge of Now</span>
           </div>
           <div className="card-content">
             <p> Programmed MIP robots with Cylon.js/Javascript Robotics</p>
           </div>
           <div className="card-action">
             <a href="#!">Video</a>
             <a href="https://github.com/chand25/Age-of-Today-IoT">View Github</a>
           </div>
         </div>
       </div>


     </div>
  </section>
  </div>
</div>

    );
  }
}

export default Project;

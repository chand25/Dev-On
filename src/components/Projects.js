import React, { Component } from 'react';
import MTK from '../assets/MTKscreenshot.png';
import JCC from '../assets/JCCScreenshot.png';
import Nite from '../assets/ScreenshotNiteOut.png';
import Blog from '../assets/BlogScreenshot.png';



class Project extends Component {
  render() {


    return (


        //Responsive Materialize cards - categories under carousel -->

<div className="projectcontainer">
<section className="projectcontent">
  <div className="row">
      <div className="col s12 m12 l3">
         <div className="card">
           <div className="card-image large">
             <img className="grow" src={MTK} alt="screenshot of memory game"/>
             <span className="card-title newcolor">Match Two of a Kind</span>
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
             <img className="grow" src={Nite} alt="screenshot of Activities manager"/>
             <span className="card-title newcolor">Nite-Out</span>
           </div>
           <div className="card-content">
             <p>Used ReactJS and Firebase to make an activities manager. Plan your night-time events with me</p>
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
             <img className="grow" src={JCC} alt="screenshot of Joe's Cocktail Confections' site"/>
             <span className="card-title newcolor">Joe's Cocktail Confections</span>
           </div>
           <div className="card-content">
             <p>Used Express.js for a collaborative project with a local NYC confectioner</p>
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
             <img className="grow" src={Blog} alt="screenshot of Blog site"/>
             <span className="card-title newcolor">Blogging It <br /> </span>
           </div>
           <div className="card-content">
             <p>Used ReactJS and Ruby on Rails to create a blogger site..</p>
           </div>
           <div className="card-action">
             <a href="#">Live Site</a>
             <a href="https://github.com/chand25/Blogging-IT">View Github</a>
           </div>
         </div>
       </div>
  </div>
  </section>
  </div>


    );
  }
}

export default Project;

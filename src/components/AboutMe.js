import React, { Component } from 'react';
import Aboutbkg from '../assets/algo.jpg';




class AboutMe extends Component {
    render() {

 let style = {
    backgroundImage: `url(${Aboutbkg})` };


 let skills = ["JavaScript", "CSS", "HTML5", "Ruby on Rails", "SQL", "ReactJS", "Node.js", "PostgreSQL", "lodash",
      "Bootstrap", "Materialize", "SQL", "Express.js", "Cylon.JS", "SASS", "jQuery"];

 let skillList = skills.map(function(skill, i){
  return (
       <div key={i} className="skills">
         {skill}
       </div>
    )
 })

   return (
<div className="aboutContainer">
     <div className="pagebkg" style={style}>
         <div className="container">

            <div className="rw-wrapper">
                  <div className="row">
                      <h2 className="rw-sentence">
                            {/*<span className="col s12">What </span>*/}
                            <span className="col s12">I like </span>
                            <span className="col s12">to</span>
                                <div className="rw-words col s12">
                                    <span>share</span>
                                    <span>make</span>
                                    <span>build</span>
                                    <span>enjoy</span>
                                    <span>create</span>
                                    <span>discover</span>
                                </div>
                            <span className="col s12">today?</span>
                       </h2>
                    </div>
              </div>

              <a className="modal-trigger waves-effect waves-light btn #ff6f00 amber darken-4" href="#modal1">My Journey to Reinvention</a>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                       <h3>My Art.</h3>
                       <p>If I didn't know myself before starting this journey, I know myself now.
                       I am passionate about coding, committed to the cause to bring pages to life, determined to push forward
                       until every line reads like a novel, and patient enough to listen to the language and
                       let it speak through me. </p>
                       <h4>These are my tools.</h4>
                       {skillList}
                    </div>
                </div>
         </div>
      </div>
  </div>

    );
  }
}

export default AboutMe;

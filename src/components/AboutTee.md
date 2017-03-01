import React, { Component } from 'react';
import Aboutbkg from '../assets/deskpen.jpg';


class About extends Component {
  render() {

  let style = { backgroundImage: `url(${Aboutbkg})` };
    return (

     <div className="pagebkg" style={style}>
         <div className="aboutMe">
            <div className="innerStory">
              <h3>Hi, I'm Shantel aka Chan.</h3>
              <h4>Welcome to the Start of a Beautiful Relationship.</h4>
              <p className="story">
                Born and raised in New York City.
              </p>
            </div>
          </div>
      </div>


    );
  }
}

export default About;

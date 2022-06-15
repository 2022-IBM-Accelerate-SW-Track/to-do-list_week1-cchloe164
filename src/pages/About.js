import React, { Component } from 'react';
import "./About.css";
import profile_pic from "./assets/froggy_cup.jpg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        {/* splits the page in half */}
        {/* left side */}
        <div>
          <div className='split left'>
            <div className='centered'>
              <img className='profile_image' src={profile_pic} alt='Profile Pic'></img>
            </div>
          </div>
        </div>

        {/* right side */}
        <div>
          <div className='split right'>
            <div className='centered'>
              <div className='name_title'>Chloe Chen</div>
              <div className='brief_description'>
                {/* brief_description */}
                Hi! I am a junior CS major at Rice University.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
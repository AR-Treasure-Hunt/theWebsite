import React from 'react';
import './team.css';
import davidImage from './david.png'; // Import the image
import backgroundImage from './background.png'; // Import the background image

const Team: React.FC = () => {
  return (
    <>
    <div className="wrapper">
      <div className="single-card">
        <div className="front">
          <img src={davidImage} alt="David Mandal" className="card-image" />
          <div className="name-below-image">David Mandal</div>
          <div className="position-below-name">Web developer</div>
          <div className="card-letter">K</div>
          <div className="card-symbol"></div>
        </div>
        <div className="back">
          <img src={backgroundImage} alt="Background" className="background-image" />
          <div className="content">
            <div className="content-para">
              <h2>David Mandal</h2>
              <h4>Web Developer</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut molestias quaerat consectetur. Voluptas sed,
                aliquam reiciendis odio, labore quod itaque.
              </p>
            </div>
            <p className="socials">
              <i className="fa fa-youtube"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-linkedin"></i>
            </p>
          </div>
        </div>
      </div>
    </div>


</>
  );
};

export default Team;






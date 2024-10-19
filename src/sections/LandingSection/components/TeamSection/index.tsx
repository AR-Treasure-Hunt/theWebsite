// team.tsx
import React from 'react';
import './team.css';
import 'font-awesome/css/font-awesome.min.css'; // Importing FontAwesome

const Team: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="single-card">
        <div className="front">
        <div className="card-letter">K</div>
        <div className="card-symbol"></div>
        </div>
        <div className="back">
          <div className="content">
            <div className="content-para">
            <h2>Mark Jones</h2>
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
  );
};

export default Team;

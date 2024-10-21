import React from 'react';
import './team.css';
import 'font-awesome/css/font-awesome.min.css';
import davidImage from './david.png'; // Import the image
import backgroundImage from './background.png'; // Import the background image

// Interface for team member items
interface TeamMember {
  name: string;
  role: string;
  quote: string;
}

// Sample team member data
const teamData: TeamMember[] = [
  {
    name: "Alice Johnson",
    role: "AR Developer",
    quote: "Augmented reality is not just about technology, it's about creating magical experiences."
  },
  {
    name: "Bob Smith",
    role: "Game Designer",
    quote: "Every great adventure starts with a single step into the unknown."
  },
  {
    name: "Carol Zhang",
    role: "UX Designer",
    quote: "The best user experience is the one that feels natural and effortless."
  },
  {
    name: "David Patel",
    role: "Project Manager",
    quote: "Coordinating AR treasure hunts is like orchestrating a symphony of technology and imagination."
  },
  {
    name: "Eva Rodriguez",
    role: "Content Creator",
    quote: "In AR, we're not just telling stories, we're inviting people to live them."
  }
];

const Team: React.FC = () => {
  return (
    <>
      {/* <div className="meet-the-team-heading">Meet the team</div> */}
      <div className="wrapper-outer-for-margins">  
        <div className="wrapper">
          {teamData.map((member, index) => (
            <div key={index} className="single-card">
              <div className="front">
                <img src={davidImage} alt={member.name} className="card-image" />
                <div className="name-below-image">{member.name}</div>
                <div className="position-below-name">{member.role}</div>
                <div className="card-letter
                ">{member.name.charAt(0)}</div>
                <div className="card-symbol"></div>
              </div>
              <div className="back">
                <img src={backgroundImage} alt="Background" className="background-image" />
                <div className="content">
                  <div className="content-para">
                    <h2>{member.name}</h2>
                    <h4>{member.role}</h4>
                    <p>{member.quote}</p>
                  </div>
                  <p className="socials">
                    <i className="fa fa-youtube"></i>
                    <i className="fa fa-instagram"></i>
                    <i className="fa fa-linkedin"></i>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;

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

// team data

const teamData: TeamMember[] = [
  {
    name: "Bibhushan Saakha",
    role: "Event Lead",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Nilotpal Dhakal",
    role: "Talent Manager",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Ankit Kumar Karn",
    role: "Social Media Manager",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Royas Shakya",
    role: "Talent Manager",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Sinja Ghimire ",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Subani Malla",
    role: "Character and Background Design ",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Abi Shrestha",
    role: "Web Development Lead",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Himesh Dulal ",
    role: "Backend Developer ",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Manjul Tamrakar",
    role: "Frontend Developer",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Neo Shakya",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Sushila Shrestha ",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Anuja Lamsal",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Aayusha Jaspau",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "David Ramovich Mandal",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Sumira Makaju",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Shreejan Karmacharya",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Nirbhica Shrestha",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Angelina Ghimire",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Sujay Pal",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Samikshya Upadhyay",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Mohit Rajbhandari",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Regal Adhikari",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Aakriti Banjara",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Swarnim Bajracharya",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Sally Shrestha",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Rohit Karki",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Albina Shrestha",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Shreejan Prasad Karmacharya",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Kshitiz Khanal",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Nirjal Bhurtel",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Arpan Aadhikari",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  },
  {
    name: "Nischal Baral",
    role: "Content Creator",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi"
  }
];

const Team: React.FC = () => {
  return (
    <>
      <div className="meet-the-team-heading">Meet the team</div>
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

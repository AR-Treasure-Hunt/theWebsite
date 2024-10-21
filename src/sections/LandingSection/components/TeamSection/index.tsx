import React from 'react';
import './team.css';
import 'font-awesome/css/font-awesome.min.css';
import davidImage from './david.png'; // Import the image
import backgroundImage from './background.png'; // Import the background image

// Interface for team member items
interface SocialLinks {
  youtube?: string;
  instagram?: string;
  linkedin?: string;
}

interface TeamMember {
  name: string;
  role: string;
  quote: string;
  socialLinks?: SocialLinks; // Add this line
}

// team data

const teamData: TeamMember[] = [
  {
    name: 'Bibhushan Saakha',
    role: 'Event Lead',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    socialLinks: {
      youtube: 'https://youtube.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com/'
    }
  },
  {
    name: 'Nilotpal Dhakal',
    role: 'Talent Manager',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Ankit Kumar Karn',
    role: 'Social Media Manager',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Royas Shakya',
    role: 'Talent Manager',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Sinja Ghimire ',
    role: 'Content Creator',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Subani Malla',
    role: 'Character and Background Design ',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Abi Shrestha',
    role: 'Web Development Lead',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Himesh Dulal ',
    role: 'Backend Developer ',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Manjul Tamrakar',
    role: 'Frontend Developer',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Neo Shakya',
    role: 'Character and Background Design',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Sushila Shrestha ',
    role: 'Frontend Developer',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Anuja Lamsal',
    role: 'Backend Developer',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Aayusha Jaspau',
    role: '?????',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'David Ramovich Mandal',
    role: 'Frontend Developer',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Sumira Makaju',
    role: 'Content Creator',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Shreejan Karmacharya',
    role: 'Social Media Manager',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Nirbhica Shrestha',
    role: '?????',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Angelina Ghimire',
    role: 'Creative Lead',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Sujay Pal',
    role: 'Marketing Lead',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Samikshya Upadhyay',
    role: 'Talent Management',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Mohit Rajbhandari',
    role: 'Frontend Developer',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Regal Adhikari',
    role: 'Game development Lead',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Aakriti Banjara',
    role: 'Game Development',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Swarnim Bajracharya',
    role: 'Creative Team Member',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Sally Shrestha',
    role: '?????',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Rohit Karki',
    role: '?????',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Albina Shrestha',
    role: 'Character and Background Design',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Shreejan Prasad Karmacharya',
    role: 'Content Creator',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Kshitiz Khanal',
    role: '?????',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Nirjal Bhurtel',
    role: 'App developer',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Arpan Aadhikari',
    role: '?????',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Nischal Baral',
    role: 'App Developer',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
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
                <div
                  className="card-letter
                ">
                  {member.name.charAt(0)}
                </div>
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
                    {member.socialLinks?.youtube && (
                      <a
                        href={member.socialLinks.youtube}
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fa fa-youtube"></i>
                      </a>
                    )}
                    {member.socialLinks?.instagram && (
                      <a
                        href={member.socialLinks.instagram}
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fa fa-instagram"></i>
                      </a>
                    )}
                    {member.socialLinks?.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    )}
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

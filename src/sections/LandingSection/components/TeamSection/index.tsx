import React from 'react';
import './team.css';
import 'font-awesome/css/font-awesome.min.css';
import davidImage from './david.png'; // Import the image
import backgroundImage from './background.png'; // Import the background image

// Interface for team member items
interface SocialLinks {
  github?: string;
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Nilotpal Dhakal',
    role: 'Talent Manager',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      socialLinks: {
        instagram: 'https://www.instagram.com/nilotpaldhakal/'
      }},
  {
    name: 'Ankit Kumar Karn',
    role: 'Social Media Manager',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    socialLinks: {
      github: 'https://github.com/Ankit0581206',
      instagram: 'https://www.instagram.com/ankit_karn.568/profilecard/?igsh=MWJtd2d2YXAxMmF6dQ==',
      linkedin: 'https://www.linkedin.com/in/ankit-kumar-karn-679198251'
    }},
  {
    name: 'Royas Shakya',
    role: 'Talent Manager',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    },
  {
    name: 'Sinja Ghimire ',
    role: 'Content Creator',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    socialLinks: {
      github: 'https://github.com/sinjaghimire',
      instagram: 'https://www.instagram.com/sinjaghimire/',
      linkedin: 'https://www.linkedin.com/in/sinja-ghimire-21b4a9239/'
    }},
  {
    name: 'Subani Malla',
    role: 'Character and Background Design ',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    socialLinks: {
      github: 'https://github.com/SubaniMalla',
      instagram: 'https://www.instagram.com/subani_malla/',
      linkedin: 'https://www.linkedin.com/in/subani-malla-b311a7178/'
    }},
  {
    name: 'Abi Shrestha',
    role: 'Web Development Lead',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    socialLinks: {
      github: 'https://github.com/scifisatan',
      instagram: 'https://www.instagram.com/39abii/',
      linkedin: 'https://www.linkedin.com/in/39abii/'
    }},
  {
    name: 'Himesh Dulal ',
    role: 'Backend Developer ',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    socialLinks: {
      github: 'https://github.com/Githeimer',
      instagram: 'https://www.instagram.com/hiimesh.exe/',
      linkedin: 'https://www.linkedin.com/in/himesh-dulal-2a6176277/'
    }},
  {
    name: 'Manjul Tamrakar',
    role: 'Frontend Developer',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    socialLinks: {
      github: 'https://github.com/Tamrakar182',
      instagram: 'https://www.instagram.com/manjul.tamrakar/',
      linkedin: 'https://www.linkedin.com/in/manjul-tamrakar/'
    }},
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    socialLinks: {
      github: 'https://github.com/sushilashrestha',
      instagram: 'https://www.instagram.com/__susshhh__/',
      linkedin: 'https://www.linkedin.com/in/sushilashrestha/'
    }},
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    socialLinks: {
      github: 'https://github.com/angelinaghimire',
      instagram: 'https://www.instagram.com/angelinaghimire/',
      linkedin: 'https://www.linkedin.com/in/angelina-ghimire/'
    }},
  {
    name: 'Sujay Pal',
    role: 'Marketing Lead',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    socialLinks: {
      github: 'http://github.com/sujayp178',
      instagram: 'https://www.instagram.com/sujay_pl19/profilecard/?igsh=aXdpaXh6Ym1icmNu',
      linkedin: 'https://www.linkedin.com/in/pal-sujay-66171228a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    }},
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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    socialLinks: {
      github: 'https://github.com/regaladhikari',
      linkedin: 'https://www.linkedin.com/in/regal-adhikari-03b958254/'
    }},
  {
    name: 'Aakriti Banjara',
    role: 'Game Development',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    socialLinks: {
      github: 'https://github.com/Aakriti555',
      linkedin: 'https://www.linkedin.com/in/aakriti-banjara-2b5b66240/'
    }},
  {
    name: 'Swarnim Bajracharya',
    role: 'Creative Team Member',
    quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  socialLinks: {
    github: 'https://github.com/SwarnimBajra',
    instagram: 'https://www.instagram.com/sm_bajracharya?igsh=ejczdnFpaWFmNXV1',
    linkedin: 'https://www.linkedin.com/in/swarnim-bajracharya-7a5727288/'
  }},
  {
    name: 'Sally Shrestha',
    role: '?????',
    quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  socialLinks: {
    instagram: 'https://www.instagram.com/miiruex__/?hl=en',
    linkedin: 'https://www.linkedin.com/in/sally-shrestha-54a319300/'
  }},
  {
    name: 'Rohit Karki',
    role: '?????',
    quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
 },
  {
    name: 'Albina Shrestha',
    role: 'Character and Background Design',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      socialLinks: {
        github: 'https://github.com/alberrrry',
        instagram: 'https://www.instagram.com/alberrrry/',
        linkedin: 'https://www.linkedin.com/in/albina-shrestha-75955b2a1/'
      }},
  {
    name: 'Shreejan P. Karmacharya', 
    role: 'Content Creator',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi'
  },
  {
    name: 'Kshitiz Khanal',
    role: '?????',
    quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    socialLinks: {
      instagram: 'https://www.instagram.com/chhitiz9296/'
    }},
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
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  socialLinks: {
    github: 'https://github.com/Arpan-Adhikari',
    instagram: 'https://www.instagram.com/adhikari_arpan11/',
    linkedin: 'https://www.linkedin.com/in/arpan-adhikari-2589962b2/'
  }},
  {
    name: 'Nischal Baral',
    role: 'App Developer',
    quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  socialLinks: {
    github: 'https://github.com/Anonymous719',
    instagram: 'https://www.instagram.com/nischal__baral/',
    linkedin: 'https://www.linkedin.com/in/nischal-baral-6b8404229/'
  }},
  {
    name: 'bhishma Bhandari',
    role: 'Sponsorship Member',
    quote:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
  socialLinks: {
    github: 'https://github.com/DontHash',
    instagram: 'https://www.instagram.com/rhy_tham/'
  }}
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
                    {member.socialLinks?.github && (
                      <a
                        href={member.socialLinks.github}
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

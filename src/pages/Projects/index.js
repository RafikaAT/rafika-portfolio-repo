import React from 'react';
// import { ConstructionNotice } from '../../components';
import './style.css';
import journelImage from '../../images/journel.png';
import habitualImage from '../../images/habitual.png';
import quizzbuzzImage from '../../images/quizzbuzz.png';
import weatherAppImage from '../../images/weather.png';

const Projects = () => {
  const projectArray = [
    {
      id: 1,
      name: 'Journel',
      image: journelImage,
      para:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    {
      id: 2,
      name: 'Habitual',
      image: habitualImage,
      para:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    {
      id: 3,
      name: 'QuizzBuzz',
      image: quizzbuzzImage,
      para:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
    {
      id: 4,
      name: 'WeatherApp',
      image: weatherAppImage,
      para:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    },
  ];
  return (
    <div id="projects-page">
      <h1>Projects</h1>
      {projectArray.map((item, i) => (
        <div className="project-info-container" key={i + 1}>
          <div className="column-1">
            <img className="project-images" src={item.image} />
          </div>
          <div className="column-2" id={`item-${item.id}`}>
            <h3>{item.name}</h3>
            <p>{item.para}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;

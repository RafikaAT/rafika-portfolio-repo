import React from 'react';
import Typewriter from 'typewriter-effect';
import './style.css';

// Need to set loop for continuous typewriting
const TypewriterContainer = () => {
  return (
    <div className="typewriter">
      <div className="Rafika-image">
        <img id="introductory-image" src="../../images/intro-image.jpeg" />
      </div>
      <div className="Rafika-introduction-container">
        <h1 id="Greeting">Hi, I'm Rafika</h1>
        <div className="Rafika-introduction">
          <Typewriter
            options={{
              strings: ['Trainee Full Stack Developer', 'Foodie', 'Travel Enthusiast'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p id="intro-para">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum."
        </p>
      </div>
    </div>
  );
};

export default TypewriterContainer;

import React from 'react';
import { ConstructionNotice } from '../../components';
import './style.css';

const About = () => {
  return (
    <div id="about-page">
      <h1>About Me</h1>
      <ConstructionNotice />
      <br />
      <p>
        Please return to this page after <span>23/08/2021</span>.
      </p>
    </div>
  );
};

export default About;

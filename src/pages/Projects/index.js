import React from 'react';
import { ConstructionNotice } from '../../components';
import './style.css';

const Projects = () => {
  return (
    <div id="projects-page">
      <h1>Projects</h1>
      <ConstructionNotice />
      <br />
      <p>
        Please return to this page after <span>23/08/2021</span>.
      </p>
    </div>
  );
};

export default Projects;

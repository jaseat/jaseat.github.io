import React from 'react';

const ProjectCard = props => (
  <div className="project-card" onClick={props.onClick}>
    <div className="project-card-img">
      <img src={props.img} />
    </div>
    <div className="project-card-banner">
      <div className="project-card-name">{props.name}</div>
      <div className="project-card-description">{props.desc}</div>
    </div>
  </div>
);

export default ProjectCard;

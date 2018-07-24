import React from 'react';

import ProjectCard from './ProjectCard';

const PortfolioList = props => (
  <div className="portfolio-container fade-up">
    {props.repos.map((repo, idx) => (
      <ProjectCard
        name={repo.name}
        desc={repo.desc}
        img={repo.img}
        onClick={() => props.history.push(`${props.match.path}/${idx}`)}
      />
    ))}
  </div>
);

export default PortfolioList;

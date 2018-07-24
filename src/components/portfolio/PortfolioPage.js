import React from 'react';

import '../../scss/Portfolio.css';

const PortfolioPage = props => (
  <div>
    <div
      className="portfolio-page-return"
      onClick={() => props.history.push(`/portfolio`)}
    >
      return
    </div>
    <div className="portfolio-page-container fade-up">
      <h1>{props.repo.name}</h1>
      <img src={props.repo.img} alt="repo" />
      <p>{props.repo.desc}</p>
      <div className="portfolio-page-links">
        <a href={props.repo.repo_url}>Repo </a>
        <a href={props.repo.live_url}>Live Site </a>
      </div>
    </div>
  </div>
);

export default PortfolioPage;

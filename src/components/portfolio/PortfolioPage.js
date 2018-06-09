import React, { Component } from 'react';

import '../../scss/Portfolio.css';

const PortfolioPage = props => (
  <div className="portfolio-page-container fade-up">
    <div
      className="portfolio-page-return"
      onClick={() => props.history.push(`/portfolio`)}
    >
      return
    </div>
    <h1>{props.repo.name}</h1>
    <img src={props.repo.img} />
    <p>{props.repo.desc}</p>
    <a href={props.repo.repo_url}>Repo </a>
    <a href={props.repo.live_url}>Live Site </a>
  </div>
);

export default PortfolioPage;

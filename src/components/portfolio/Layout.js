import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

import '../../scss/Portfolio.css';
import { capitalizeAndSpace } from '../../utils/helpers';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: null,
      loading: true,
    };
  }

  fetchRepoImage = async contents_url => {
    var imgResponse = await fetch(
      contents_url.replace('{+path}', 'img/main.jpg'),
      {
        headers: {
          Authorization: 'token 8dc9662cb33ca3217bc6d29db6389ab39b7293b5',
        },
      }
    );
    var img;
    if (imgResponse.status === 200) {
      var imgJson = await imgResponse.json();
      img = imgJson.content;
    } else {
      img = null;
    }
    return img;
  };

  fetchRepos = async () => {
    var response = await fetch('https://api.github.com/users/jaseat/repos', {
      headers: {
        Authorization: 'token 8dc9662cb33ca3217bc6d29db6389ab39b7293b5',
      },
    });
    if (response.status !== 200) return null;
    var json = await response.json();
    var repos = json.map(async e => {
      return {
        name: capitalizeAndSpace(e.name),
        desc: e.description,
        lang: e.language,
        repo_url: e.html_url,
        live_url: e.homepage,
        img: await this.fetchRepoImage(e.contents_url),
      };
    });
    repos = Promise.all(repos);
    return repos;
  };

  componentDidMount() {
    this.fetchRepos().then(repos => {
      this.setState({ repos, loading: false });
    });
  }

  render() {
    return (
      <div className="portfolio-container">
        {!this.state.loading &&
          this.state.repos.map((repo, idx) => (
            <ProjectCard
              name={repo.name}
              desc={repo.desc}
              img={repo.img}
              onClick={() =>
                this.props.history.push(`${this.props.match.path}/${idx}`)
              }
            />
          ))}
      </div>
    );
  }
}

export default Portfolio;

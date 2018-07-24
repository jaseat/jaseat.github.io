import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import PortfolioList from './PortfolioList';
import PortfolioPage from './PortfolioPage';

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
      img = imgJson.download_url;
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
      <Switch>
        {this.state.loading ? (
          <div className="loader-container">
            <div className="loader" />
          </div>
        ) : (
          <div>
            <Route
              exact
              path={`${this.props.match.path}`}
              render={props => (
                <PortfolioList
                  loading={this.state.loading}
                  repos={this.state.repos}
                  {...this.props}
                  {...props}
                />
              )}
            />
            <Route
              path={`${this.props.match.path}/:id`}
              render={props => (
                <PortfolioPage
                  repo={this.state.repos[props.match.params.id]}
                  {...props}
                />
              )}
            />
          </div>
        )}
      </Switch>
    );
  }
}

export default Portfolio;

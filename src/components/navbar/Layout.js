import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/Navbar.css';
import hambugerButton from '../../images/hamburger-button.svg';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false,
    };
  }
  handleClick = () => {
    this.setState({ expand: !this.state.expand });
  };
  render() {
    const list = [
      ['Home', '/'],
      ['Portfolio', '/portfolio'],
      ['Contact', '/contact'],
    ];
    return (
      <div className="navbar">
        <div className="nav-name">Jacob Seatris</div>
        <div
          className={this.state.expand ? 'navlist-expand' : 'navlist-collapse'}
        >
          <ul>
            {list.map((li, idx) => (
              <li key={idx}>
                <Link to={li[1]}>{li[0]}</Link>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={this.handleClick}>
          <img src={hambugerButton} />
        </button>
      </div>
    );
  }
}

export default Navigation;

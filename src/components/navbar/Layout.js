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
  handleClose = () => {
    this.setState({ expand: false });
  };
  render() {
    const list = [
      ['Home', '/'],
      ['Portfolio', '/portfolio'],
      ['Contact', '/contact'],
    ];
    return (
      <div className="navbar">
        <div onClick={() => this.props.history.push('/')} className="nav-name">
          Jacob Seatris
        </div>
        <div
          className={this.state.expand ? 'navlist-expand' : 'navlist-collapse'}
        >
          <ul>
            {list.map((li, idx) => (
              <li key={idx}>
                <Link onClick={this.handleClose} to={li[1]}>
                  {li[0]}
                </Link>
              </li>
            ))}
            <li>
              <a href="https://github.com/jaseat">Github</a>
            </li>
          </ul>
        </div>
        <button onClick={this.handleClick}>
          <object
            type="image/svg+xml"
            data={hambugerButton}
            aria-label="hamburger button"
            alt="hambuger button"
          />
        </button>
      </div>
    );
  }
}

export default Navigation;

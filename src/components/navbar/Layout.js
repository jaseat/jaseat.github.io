import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';
import '../../scss/Navbar.css';

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
    const { containerStyle, navStyle, listStlye, nameStyle } = styles;
    return (
      <div style={containerStyle} className="navbar">
        <div style={nameStyle}>Jacob Seatris</div>
        <div
          className={this.state.expand ? 'navbar-expand' : 'navbar-collapse'}
        >
          <ul>
            {list.map(li => {
              return (
                <li style={listStlye}>
                  <Link to={li[1]}>{li[0]}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <button onClick={this.handleClick} />
      </div>
    );
  }
}

export default Navigation;

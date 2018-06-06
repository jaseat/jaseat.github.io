import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { containerStyle, navStyle, listStlye } from './styles';

class Navigation extends Component {
  render() {
    const list = [
      ['Home', '/'],
      ['Portfolio', '/portfolio'],
      ['Contact', '/contact'],
    ];
    return (
      <div style={containerStyle}>
        <ul style={navStyle}>
          {list.map(li => {
            return (
              <li style={listStlye}>
                <Link to={li[1]}>{li[0]}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Navigation;

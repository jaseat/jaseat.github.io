import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Navigation extends Component {
  render() {
    const divStyle = {
      width: '100%',
      height: '1.5em',
    }
    const navStyle = {
      width: '100%',
      display: 'inline-flex',
      flexDirection: 'row',
      listStyle: 'none',
      margin: '0',
      padding: '0',
      justifyContent: 'flex-end',
    };
    const listStlye ={
      marginLeft: '5px'
    };
    const list = [
      [
        'Home',
        '/'
      ],[
        'Portfolio',
        '/portfolio'
      ],[
        'Contact',
        '/contact'
      ]
    ];
    return (
      <div style={divStyle}>
        <ul style={navStyle}>
          {list.map(li => {return (
            <li style={listStlye}>
              <Link to={li[1]}>
                {li[0]}
              </Link>
            </li>
          )})}
        </ul>
      </div>
    )
  }
}

export default Navigation;
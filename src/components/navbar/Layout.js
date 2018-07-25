import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../scss/Navbar.css';
import hambugerButton from '../../images/hamburger-button.svg';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.navbar = React.createRef();
    this.state = {
      expand: false,
      prevScrollPos: window.pageYOffset,
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    // console.log(currentScrollPos);
    if (this.state.prevScrollPos > currentScrollPos) {
      this.navbar.current.style.top = '0';
    } else {
      this.navbar.current.style.top = '-4em';
    }
    this.setState({ prevScrollPos: currentScrollPos });
  };
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
      <div className="navbar-wrapper">
        <div className="navbar" ref={this.navbar}>
          <div
            onClick={() => this.props.history.push('/')}
            className="nav-name"
          >
            Jacob Seatris
          </div>
          <div
            className={
              this.state.expand ? 'navlist-expand' : 'navlist-collapse'
            }
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
      </div>
    );
  }
}

export default Navigation;

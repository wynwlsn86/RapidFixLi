import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import rapidLogo from '../../assets/rapidLogo.jpeg'
import {Link, animateScroll as scroll} from 'react-scroll';

export default class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <img src={rapidLogo} alt='logo' />
        </Link>
        <div className='link-parent'>
        <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-90}
              to="about"
              className="header-link"
            >
            <h3 className='header-link'>About</h3>
          </Link>
        <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-90}
              to="services"
              className="header-link"
            >
            <h3 className='header-link'>Services</h3>
          </Link>
          <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-90}
              to="contact"
              className="header-link"
            >
            <h3 className='header-link'>Contact</h3>
          </Link>
        </div>
    </header>
    )
  }
}

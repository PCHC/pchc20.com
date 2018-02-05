import React, { Component } from 'react';
import Logo from './pchc20-logo.svg';

export default class Header extends Component {
  render() {
    return(
      <header>
        <nav>
          <button className="hamburger hamburger--spin" type="button" id="menu-toggle" aria-label="Menu" aria-controls="navigation" aria-expanded="false">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <ul>
            <li className="logo">
              <a href="/">
                <img src={Logo} alt="PCHC20 - Twenty Years Strong" />
              </a>
            </li>
            <li>
              <a href="#past">The Past</a>
            </li>
            <li>
              <a href="#present">The Present</a>
            </li><li>
              <a href="#future">The Future</a>
            </li><li>
              <a href="#beyond">...and Beyond</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

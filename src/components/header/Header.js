import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToggleButton from './ToggleButton';
import NavLink from './NavLink';

import Logo from './pchc20-logo.svg';

class Header extends Component {
  render() {
    return(
      <header>
        <nav className={this.props.nav.isExpanded ? 'is-active' : null}>
          <ToggleButton isExpanded={this.props.nav.isExpanded} />
          <ul>
            <li className="logo">
              <a href="/">
                <img src={Logo} alt="PCHC20 - Twenty Years Strong" />
              </a>
            </li>
            <NavLink href="#past">The Past</NavLink>
            <NavLink href="#present">The Present</NavLink>
            <NavLink href="#future">The Future</NavLink>
            <NavLink href="#more">Learn More</NavLink>
          </ul>
        </nav>
      </header>
    )
  }
}

function mapStateToProps({ nav }) {
  return { nav };
}

export default connect(mapStateToProps)(Header);

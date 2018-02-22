import React, { Component } from 'react';
import { connect } from 'react-redux';

import ToggleButton from './ToggleButton';
import { toggleNav } from '../../actions/index';

import LinkIcons from '../common/LinkIcons';

import { Link } from 'react-scroll';

import Logo from './pchc20-logo.svg';

class Header extends Component {
  constructor(props) {
    super(props);

    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick(event) {
    this.props.toggleNav(true);
  }

  render() {
    return(
      <header>
        <nav className={this.props.nav.isExpanded ? 'is-active' : null}>
          <ToggleButton isExpanded={this.props.nav.isExpanded} />
          <ul>
            <li className="logo">
              <Link
                to="root"
                smooth="easeOutCubic"
                onClick={this.handleLinkClick}
              >
                <img src={Logo} alt="PCHC20 - Twenty Years Strong" />
              </Link>
            </li>
            <li>
              <Link
                to="past"
                smooth="easeOutCubic"
                offset={-100}
                isDynamic={true}
                onClick={this.handleLinkClick}
              >The Past</Link>
            </li>
            <li>
              <Link
                to="present"
                smooth="easeOutCubic"
                offset={-100}
                isDynamic={true}
                onClick={this.handleLinkClick}
              >The Present</Link>
            </li>
            <li>
              <Link
                to="future"
                smooth="easeOutCubic"
                offset={-100}
                isDynamic={true}
                onClick={this.handleLinkClick}
              >The Future</Link>
            </li>
            <li>
              <Link
                to="more"
                smooth="easeOutCubic"
                offset={-100}
                isDynamic={true}
                onClick={this.handleLinkClick}
              >Learn More</Link>
            </li>
            <li className="mobile-only nav-link-icons">
              <LinkIcons />
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

function mapStateToProps({ nav }) {
  return { nav };
}

export default connect(mapStateToProps, { toggleNav })(Header);

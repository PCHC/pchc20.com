import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleNav } from '../../actions/index';

class NavLink extends Component {
  constructor(props) {
    super(props);

    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick(event) {
    this.props.toggleNav(true);
  }

  render() {
    return (
      <li>
        <a onClick={this.handleLinkClick} href={this.props.href}>
          {this.props.children}
        </a>
      </li>
    )
  }
}

export default connect(null, { toggleNav })(NavLink);

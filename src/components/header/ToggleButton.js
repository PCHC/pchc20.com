import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleNav } from '../../actions/index';

class ToggleButton extends Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    event.preventDefault();

    this.props.toggleNav();
  }

  render() {
    return (
      <button onClick={this.handleButtonClick} className="hamburger hamburger--spin" type="button" id="menu-toggle" aria-label="Menu" aria-controls="navigation" aria-expanded={this.props.isExpanded}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    )
  }
}

export default connect(null, { toggleNav })(ToggleButton);

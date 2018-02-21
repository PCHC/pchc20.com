import React, { Component } from 'react';

class Service extends Component {
  render () {
    return (
      <li>
        <a href={this.props.link + '?utm_source=pchc20'}>{this.props.name}</a>
      </li>
    )
  }
}

export default Service;

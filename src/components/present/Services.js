import React, { Component } from 'react'
import { connect } from 'react-redux';

import Service from './Service';

class Services extends Component {
  render () {
    return (
      <ul>
        {this.props.services.map((service) => {
          return (
            <Service name={service.name} link={service.link} key={service.name} />
          )
        })}
      </ul>
    )
  }
}

function mapStateToProps({ services }) {
  return { services };
}

export default connect(mapStateToProps)(Services);

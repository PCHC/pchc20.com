import React, { Component } from 'react';
import CountUp from 'countup.js';
import VisibilitySensor from 'react-visibility-sensor';

class Stat extends Component {
  constructor(props) {
    super(props);

    this.onVisibilityChange = this.onVisibilityChange.bind(this);
  }

  componentDidMount() {
    const options = {
      useEasing: true,
      useGrouping: true,
      separator: ',',
      decimal: '.',
    };

    this.counter = new CountUp(this.refs.count, 0, this.props.number, 0, this.props.duration, options);
  }

  onVisibilityChange(isVisible) {
    if( isVisible ) {
      this.counter.start();
    }
  }

  render () {
    return (
      <VisibilitySensor onChange={this.onVisibilityChange} delayedCall={true}>
        <div className="stats__block">
          <span className="stats__stat" ref="count" />
          <span className="stats__label">{this.props.label}</span>
        </div>
      </VisibilitySensor>
    )
  }
}

export default Stat;

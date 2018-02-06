import React, { Component } from 'react';

class TimelineItem extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const imgUrl = require(`../../images/timeline/${this.props.image}`);
    return (
      <div className="timeline__row">
        <div className="timeline__content">
          <div className="timeline__content--wrap">
            <h3>{this.props.year}</h3>
            <p>{this.props.description}</p>
          </div>
        </div>
        <div className="timeline__image">
          <div className="timeline__image--wrap">
            <img src={imgUrl} alt={this.props.year} />
          </div>
        </div>
      </div>
    )
  }
}

export default TimelineItem;

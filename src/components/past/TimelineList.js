import React, { Component } from 'react';
import { connect } from 'react-redux';

import TimelineItem from './TimelineItem';

class TimelineList extends Component {
  renderList() {
    return this.props.timeline.map((t) => {
      return (
        <TimelineItem key={t.year} year={t.year} description={t.description} image={t.image} details={t.details} />
      )
    });
  }

  render() {
    return (
      <div className="timeline">
        { this.renderList() }
      </div>
    )
  }
}

function mapStateToProps({ timeline }) {
  return { timeline };
}

export default connect(mapStateToProps)(TimelineList);

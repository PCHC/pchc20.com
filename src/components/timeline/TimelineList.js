import React, { Component } from 'react';

export default class TimelineList extends Component {
  render() {
    return (
      <div className="timeline">
        <div className="timeline__row">
          <div className="timeline__content">
            <div className="timeline__content--wrap">
              <h3>1998</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div>
          </div>
          <div className="timeline__image">
            <div className="timeline__image--wrap">
              <img src="http://via.placeholder.com/400x400" />
            </div>
          </div>
        </div>
        <div className="timeline__row">
          <div className="timeline__content">
            <div className="timeline__content--wrap">
              <h3>1998</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div>
          </div>
          <div className="timeline__image">
            <div className="timeline__image--wrap">
              <img src="http://via.placeholder.com/400x400" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

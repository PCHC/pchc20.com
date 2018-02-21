import React, { Component } from 'react';
import MobileDetect from 'mobile-detect';

export default class Video extends Component {
  constructor(props) {
    super(props);

    const md = new MobileDetect(window.navigator.userAgent);

    if(md.mobile()) {
      this.VideoMP4 = require('../../video/pchc20-logo-reveal_mobile.mp4');
      this.VideoWebM = require('../../video/pchc20-logo-reveal_mobile.webm');
    } else {
      this.VideoMP4 = require('../../video/pchc20-logo-reveal_720p.mp4');
      this.VideoWebM = require('../../video/pchc20-logo-reveal_720p.webm');
    }
  }

  render () {
    return(
      <video loop muted autoPlay>
        <source src={this.VideoMP4} type="video/mp4" />
        <source src={this.VideoWebM} type="video/webm" />
      </video>
    )
  }
}

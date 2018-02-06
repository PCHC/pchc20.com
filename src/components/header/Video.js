import React, { Component } from 'react';
import VideoMP4 from '../../video/pchc20-logo-reveal.mp4';
import VideoWEBM from '../../video/pchc20-logo-reveal.webm';

class Video extends Component {
  render () {
    return (
      <video loop muted autoPlay>
        <source src={VideoMP4} type="video/mp4" />
        <source src={VideoWEBM} type="video/webm" />
      </video>
    );
  }
}

export default Video;

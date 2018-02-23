import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLoad } from '../../actions/index';
import MobileDetect from 'mobile-detect';


class Video extends Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);

    const md = new MobileDetect(window.navigator.userAgent);

    if(md.mobile()) {
      this.VideoMP4 = require('../../video/pchc20-logo-reveal_mobile.mp4');
      this.VideoWebM = require('../../video/pchc20-logo-reveal_mobile.webm');
    } else {
      this.VideoMP4 = require('../../video/pchc20-logo-reveal_720p.mp4');
      this.VideoWebM = require('../../video/pchc20-logo-reveal_720p.webm');
    }
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      const video = this.refs.video;
      const setLoad = this.props.setLoad();

      function checkLoad() {
        if(video.readyState === 4) {
          setLoad;
        } else {
          setTimeout(checkLoad, 100);
        }
      }

      checkLoad();
    }, false);
  }

  render () {
    return(
      <video loop muted autoPlay ref="video">
        <source src={this.VideoMP4} type="video/mp4" />
        <source src={this.VideoWebM} type="video/webm" />
      </video>
    )
  }
}

function mapStateToProps({ loader }) {
  return { loader };
}

export default connect(mapStateToProps, { setLoad })(Video);

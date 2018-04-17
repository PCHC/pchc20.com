import React, { Component } from 'react';

class TimelineDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mainImage: props.details.images ? props.details.images[0] : null
    }

    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick(el) {
    this.setState({
      mainImage: el.target.src
    });
  }

  renderThumbnails() {
    if(!this.props.details.images) {
      return null;
    }

    let c = 0;
    return this.props.details.images.map((i) => {
      c++;
      return (
        <div className="TimelineDetails__Thumb">
          <img src={i} alt={`${c}`} onClick={this.handleImageClick}/>
        </div>
      );
    });
  }

  render () {
    return(
      <div className="ReactModal__Details TimelineDetails__Content">
        {this.props.details.images ?
        <div className="TimelineDetails__Images">
          <img alt="Main" className="TimelineDetails__Images--main" src={this.state.mainImage}/>
          <div className="TimelineDetails__Images--more">
            { this.renderThumbnails() }
          </div>
        </div>
        : null }
        <div className="TimelineDetails__Text" dangerouslySetInnerHTML={ {__html: this.props.details.text} } />
      </div>
    )
  }
}

export default TimelineDetails;

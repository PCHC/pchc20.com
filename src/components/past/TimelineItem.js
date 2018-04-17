import React, { Component } from 'react';
import Modal from 'react-modal';
import TimelineDetails from './TimelineDetails';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

class TimelineItem extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    //
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render () {
    const imgUrl = require(`../../images/timeline/${this.props.image}`);
    return (
      <div className="timeline__row">
        <div className="timeline__content">
          <div className="timeline__content--wrap">
            <h3>{this.props.year}</h3>
            <p>{this.props.description}</p>
            {this.props.details ?
              <button onClick={this.openModal} className="ReactModal__Button">Learn More <FontAwesomeIcon icon="chevron-right"/></button>
            : null }
          </div>
        </div>
        <div className="timeline__image">
          <div className="timeline__image--wrap">
            <img src={imgUrl} alt={this.props.year} onClick={this.openModal} />
          </div>
        </div>
        {this.props.details ?
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel={`Year Details: ${this.props.year}`}
            className="modal--content"
            overlayClassName="modal--overlay"
          >
            <h3 className="ReactModal__Title" ref={subtitle => this.subtitle = subtitle}>{this.props.year}</h3>
            <TimelineDetails details={this.props.details} />
            <button className="ReactModal__Button ReactModal__Button--close" onClick={this.closeModal}><FontAwesomeIcon icon="times"/> Close</button>
          </Modal>
        : null }
      </div>
    )
  }
}

export default TimelineItem;

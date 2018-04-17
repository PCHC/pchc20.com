import React, { Component } from 'react';

class Loader extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    if(!this.props.loaded) {
      return(
        <div className="loading">
          <svg aria-hidden="true" data-prefix="fal" data-icon="spinner-third" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="loading-spinner"><path fill="#ffffff" d="M460.115 373.846l-6.941-4.008c-5.546-3.202-7.564-10.177-4.661-15.886 32.971-64.838 31.167-142.731-5.415-205.954-36.504-63.356-103.118-103.876-175.8-107.701C260.952 39.963 256 34.676 256 28.321v-8.012c0-6.904 5.808-12.337 12.703-11.982 83.552 4.306 160.157 50.861 202.106 123.67 42.069 72.703 44.083 162.322 6.034 236.838-3.14 6.149-10.75 8.462-16.728 5.011z"></path></svg>
        </div>
      )
    }

    return(null);
  }
}

export default Loader;
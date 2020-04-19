import React, { Component } from 'react';

class BannerImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  escapeModal = (e) => {
    if (e.which === 27 || e.which === 13) {
      this.toggleModal();
    }
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    if (typeof window !== 'undefined') {
      document.addEventListener('keyup', this.escapeModal);
    }

    return (
      <div className="seamless">
        <div
          className="banner-image"
          style={{
            backgroundImage: `url(${this.props.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <div className="inner-image-container">
            <div>
              <img
                src={this.props.url}
                alt={this.props.alt}
                role="button"
                onClick={this.toggleModal}
              />
            </div>
          </div>
          <div
            className={
              this.state.showModal ? 'modal is-active' : 'modal'
            }
          >
            <div className="modal-background"></div>
            <div className="modal-content">
              <p className="image">
                <img src={this.props.url} alt={this.props.alt} />
              </p>
            </div>
            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={this.toggleModal}
            ></button>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerImage;

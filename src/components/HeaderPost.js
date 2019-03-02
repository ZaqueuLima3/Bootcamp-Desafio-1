/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HeaderPost extends Component {
  render() {
    const { img, name, time } = this.props;
    return (
      <div className="header-post">
        <img className="img" src={img} alt="avatar" />
        <div className="info-post">
          <strong className="name">{name}</strong>
          <small className="time">{time}</small>
        </div>
      </div>
    );
  }
}

HeaderPost.defaultProps = {
  img: 'https://avatars0.githubusercontent.com/u/2245578?s=460&v=4',
  name: 'zaqeueu',
  time: 'há 3 min',
};

HeaderPost.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
};

export default HeaderPost;

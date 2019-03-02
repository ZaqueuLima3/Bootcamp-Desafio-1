/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeaderPost from './HeaderPost';

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="post-content">
        <HeaderPost avatar={post.avatar} name={post.name} time={post.time} />
        <hr />
        <div className="body-post">
          <p className="text-post">{post.text}</p>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;

/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import HeaderPost from './HeaderPost';

class Post extends Component {
  render() {
    const { text } = this.props;
    return (
      <Fragment>
        <HeaderPost />
        <hr />
        <div className="body-post">
          <p className="text-post">{text}</p>
        </div>
      </Fragment>
    );
  }
}

Post.defaultProps = {
  text:
    'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente',
};

Post.propTypes = {
  text: PropTypes.string,
};

export default Post;

/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './Header';
import Posts from './Posts';

import '../styles/style.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="posts">
          <Posts />
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));

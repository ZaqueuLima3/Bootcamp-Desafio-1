/* eslint-disable react/prefer-stateless-function */
import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from './header';
import '../styles/style.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <h1>Hello from my first project</h1>
        <p>Create branch development</p>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));

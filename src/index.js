import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1>Hello from my first project</h1>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));

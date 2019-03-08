/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Form from './components/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderView() {
    return (
      <div>
        <Form />
      </div>
    );
  }

  render() {
    return (
      this.renderView()
    );
  }
}

export default App;

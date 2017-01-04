import React, { Component } from 'react';
import * as Redux from 'react-redux';

import logo from './logo.svg';
import './App.scss';
import * as actions from 'actions';

class App extends Component {
  toggle() {
    const { dispatch } = this.props;
    dispatch(actions.toggleTest());
  }

  render() {
    const { test } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
          <button onClick={this.toggle.bind(this)}>test reducer: { test ? 'TRUE!' : 'false' }</button>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Redux.connect((state) => {
  return state;
})(App);

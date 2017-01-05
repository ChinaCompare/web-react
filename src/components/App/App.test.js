import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import App from './App';
import * as actions from '../../actions/actions';
// import * as act from '../../actions/actionslist';

describe('App', () => {
  it('should exist', () => {
    expect(App).toExist();
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
  it('should dispatch TOGGLE_TEST', () => {
    const action = actions.toggleTest();

    const spy = expect.createSpy();
    const app = TestUtils.renderIntoDocument(<App dispatch={spy}/>);
    const $el = $(ReactDOM.findDOMNode(app));
    TestUtils.Simulate.click($el.find('button')[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });
});

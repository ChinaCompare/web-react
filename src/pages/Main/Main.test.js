import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';

import { App } from './Main';
import * as actions from '../../actions/actions';

describe('App', () => {
  it('should exist', () => {
    expect(App).toExist();
  });
  it('renders without crashing and search for h2 element', () => {
    const spy = expect.createSpy();
    const app = TestUtils.renderIntoDocument(<App translate={spy}/>);
    const $el = $(ReactDOM.findDOMNode(app));
    expect($el.find('h2').length).toBe(1);
  });
  it('should dispatch TOGGLE_TEST', () => {
    const action = actions.toggleTest();

    const spy = expect.createSpy();
    const app = TestUtils.renderIntoDocument(<App dispatch={spy} translate={expect.createSpy()}/>);
    const $el = $(ReactDOM.findDOMNode(app));
    TestUtils.Simulate.click($el.find('button')[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });
});

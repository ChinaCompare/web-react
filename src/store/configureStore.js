import * as redux from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {IntlReducer as Intl} from 'react-redux-multilingual';
import * as reducers from '../reducers/reducers';

const isProd = function () {
  return process.env.NODE_ENV === 'production';
};

const middlewares = [thunk];

if (!isProd()) {
  middlewares.push(createLogger());
}

export default (initialState = {}) => {
  let mapreducers = {};
  Object.keys(reducers).forEach((rname) => {
    // xxxReducer -> variable to reduce will be xxx
    const rvalue = rname.replace('Reducer', '');
    mapreducers[rvalue] = reducers[rname];
  });
  mapreducers = {
    ...mapreducers,
    Intl
  };
  const combineReducers = redux.combineReducers(mapreducers);

  return redux.createStore(combineReducers, initialState, redux.compose(
    redux.applyMiddleware(...middlewares),
    window.devToolsExtension && !isProd() ? window.devToolsExtension() : (f) => f
  ));
};


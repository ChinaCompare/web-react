import * as redux from 'redux';
import thunk from 'redux-thunk';
import { IntlReducer as Intl } from 'react-redux-multilingual';

import * as reducers from 'reducers';

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
    redux.applyMiddleware(thunk),
    window.devToolsExtension && process.env.NODE_ENV !== 'production' ? window.devToolsExtension() : (f) => f
  ));
};


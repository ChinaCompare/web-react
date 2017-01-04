import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configure from 'configureStore';
import './index.css';
import router from './router/';

const store = configure();

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('root')
);

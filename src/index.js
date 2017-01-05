import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider, IntlActions } from 'react-redux-multilingual';

import configure from 'configureStore';
import './index.css';
import router from './router/';
import translations from './i18n/translations';

const store = configure();
const DEFAULT_LANGUAGE = 'en';

store.dispatch(IntlActions.setLocale(DEFAULT_LANGUAGE));
ReactDOM.render(
  <Provider store={store}>
    <IntlProvider translations={translations}>
      {router}
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);


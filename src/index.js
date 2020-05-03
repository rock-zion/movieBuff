import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import ScrollToTop from '../src/components/ScrollToTop'

import store from '../src/store'
import App from './App';

render(
  <Provider store={store}>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
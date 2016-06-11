import React from 'react'
import { render } from 'react-dom'
import createStore from './redux/create';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import routes from './routes'

const store = createStore();
console.log(store);
const history = syncHistoryWithStore(browserHistory, store)

const router = (
  <Router history={history}>
    {routes}
  </Router>
)

render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
)

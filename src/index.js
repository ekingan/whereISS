import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reduxStreams from 'redux-streams';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)(reduxStreams);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

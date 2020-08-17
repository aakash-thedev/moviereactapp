import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import combineReducers from './reducers/reducer';

const store = createStore(combineReducers);

console.log('After State : ', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store = { store }/>
  </React.StrictMode>,
  document.getElementById('root')
);

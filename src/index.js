import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import './index.css';
import App from './components/App';
import movies from './reducers/reducer';

const store = createStore(movies);

console.log('After State : ', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store = { store }/>
  </React.StrictMode>,
  document.getElementById('root')
);

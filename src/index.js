import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import combineReducers from './reducers/reducer';

// const logger = function ({dispatch, getState}){       // obj is object of dispatch and getState()
//   return function (next){
//     return function (action){
//       // middleware code
//       console.log("ACTION_TYPE = ", action.type);
//       next(action);
//     }
//   }
// }

// using currying concept

const logger = () => (next) => (action) => {
  if (typeof action !== 'function'){
    console.log("ACTION_TYPE = ", action.type);
  }
  next(action);
}

const store = createStore(combineReducers, applyMiddleware(logger, thunk));

console.log('After State : ', store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store = { store }/>
  </React.StrictMode>,
  document.getElementById('root')
);

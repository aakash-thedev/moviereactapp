import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import combineReducers from './reducers/reducer';

// using currying concept

const logger = () => (next) => (action) => {
  if (typeof action !== 'function'){
    console.log("ACTION_TYPE = ", action.type);
  }
  next(action);
}

const store = createStore(combineReducers, applyMiddleware(logger, thunk));

// const StoreContext = createContext();
// console.log("STORE CONTEXT : ", StoreContext);

// const ConnectedAppComponent = connect(callback)(App);

// export function connect (callback){
//   return function (Component){
//     class ConnectedAppComponent extends React.Component {

//       constructor (props) {
//         super(props);
//         this.props.store.subscribe( () => this.forceUpdate() )
//       }

//       render(){
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBePassed = callback(state);
//         return (
//             // {...dataToBePassed } is used as movies = {movies} search = {search}
//             <Component {...dataToBePassed} dispatch = {store.dispatch} />
//         )
//       }
//     }

//     class ConnectedAppComponentWrapper extends React.Component {
//       render(){
//         return(

//           <StoreContext.Consumer>
//             {(store) => <ConnectedAppComponent store = {store} dispatch = {store.dispatch} />}
//           </StoreContext.Consumer>

//         )
//       }
//     }

//     return ConnectedAppComponentWrapper;

//   }
// }

ReactDOM.render(
  <React.StrictMode>

    <Provider store = {store}>
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

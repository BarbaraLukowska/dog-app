import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import App from './App';


const middleware = [
  process.env.NODE_ENV === 'development' && createLogger({collapsed: true}),  //logging redux actions
  thunkMiddleware                                                   //allows to return functions instead of actions for dispatch, awesome for async requests
].filter(Boolean);

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
  registerServiceWorker();

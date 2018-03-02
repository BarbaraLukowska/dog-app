import React from 'react';
import { render } from 'react-dom'
import './index.css';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import App from './App';

const initialState = {
  isFetching: false,
}

const middleware = [
  process.env.NODE_ENV === 'development' && createLogger({collapsed: true}),  //logging redux actions
  thunkMiddleware                                                   //allows to return functions instead of actions for dispatch, awesome for async requests
].filter(Boolean);

const configureStore = () => {

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {

      store.replaceReducer(rootReducer)
    })
  }
  return store
}

const store = configureStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

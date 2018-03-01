import React from 'react';
import { render } from 'react-dom'
import './index.css';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import App from './App';


const middleware = [
  process.env.NODE_ENV === 'development' && createLogger({collapsed: true}),  //logging redux actions
  thunkMiddleware                                                   //allows to return functions instead of actions for dispatch, awesome for async requests
].filter(Boolean);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {

  const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(...middleware),
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(reducers)
    })
  }

  return store
}

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

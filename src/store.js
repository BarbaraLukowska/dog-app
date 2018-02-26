import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import history from 'appHistory';
import reducers from 'reducers';


const middleware = [
    process.env.NODE_ENV == 'development' && createLogger({collapsed: true}),
    thunkMiddleware
  ].filter(Boolean);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle


const configureStore = () => {

  const store = createStore(
    combineReducers({
      ...reducers
    }),
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      // We need to require for hot reloading to work properly.
      const nextReducer = require('./reducers');  // eslint-disable-line global-require

      store.replaceReducer(nextReducer);
    });
  }
  return store;
}

export default configureStore();
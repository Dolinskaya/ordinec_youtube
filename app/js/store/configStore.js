
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { rootReducer } from '../redux/reducers/reducer.js';
import { redirect } from '../redux/middleware/redirect';

export default function configureStore() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = composeEnhancers(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(createLogger()),
    applyMiddleware(redirect)
  )(createStore)(rootReducer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../redux/reducers/reducer', () => {
      const nextRootReducer = require('../redux/reducers/reducer').rootReducer
      store.replaceReducer(nextRootReducer)
    });
  }

  return store
}

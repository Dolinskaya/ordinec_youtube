// import { createStore as _createStore, applyMiddleware, compose } from 'redux';
// import createMiddleware from './middleware/clientMiddleware';
// import { routerMiddleware } from 'react-router-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { rootReducer } from './reducers/user.js';
// import thunkMiddleware from 'redux-thunk';
// import {redirect} from './middleware/redirect';

// export default function createStore(history, client, data) {
//   // Sync dispatched route actions to the history
//   const reduxRouterMiddleware = routerMiddleware(history);

//   const middleware = [/*createMiddleware(client),*/ reduxRouterMiddleware];


//   let finalCreateStore;
//   if (false && __DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
//     const { persistState } = require('redux-devtools');
//     const DevTools = require('../containers/DevTools/DevTools');
//     finalCreateStore = compose(
//       applyMiddleware(...middleware),
//       + window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//       persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
//     )(_createStore)(rootReducer);
//   } else {
//     finalCreateStore = applyMiddleware(...middleware)(_createStore);
//   }

//   const reducer = require('./modules/reducer').default;


// //dev-tools
// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// );


//   const store = finalCreateStore(reducer, enhancer, data);


//   // if (false && __DEVELOPMENT__module.hot) {
//   //   // Enable Webpack hot module replacement for reducers
//   //   module.hot.accept('../reducers', () => {
//   //     const nextRootReducer = require('./modules/reducer').rootReducer
//   //     store.replaceReducer(nextRootReducer)
//   //   });
//   // }

//   if (false && __DEVELOPMENT__ && module.hot) {
//     module.hot.accept('./modules/reducer', () => {
//       store.replaceReducer(require('./modules/reducer'));
//     });
//   }

//   return store;
// }

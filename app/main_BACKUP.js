// import 'babel-polyfill';
// import React from "react";
// import ReactDOM from "react-dom";
// import getRoutes from './js/routes';
// import {IndexRoute, Route, Router, browserHistory} from 'react-router';
// import {Provider} from 'react-redux';
// import { syncHistoryWithStore } from 'react-router-redux';
// import ApiClient from './js/helpers/ApiClient';
// import createStore from './js/redux/create.js';
// import { ReduxAsyncConnect } from 'redux-async-connect';
// import useScroll from 'scroll-behavior/lib/useStandardScroll';
// import setAuthorizationToken from './js/utils/setAuthorizationToken.js';
// import { setCurrentUser } from './js/components/Actions/loginActions.js'
// require('./css/custom.scss');

// const client = new ApiClient();
// const _browserHistory = useScroll(() => browserHistory)();
// const store = createStore(_browserHistory, client, window.__data);
// const history = syncHistoryWithStore(_browserHistory, store);

// const component = (
// 	<Router render={(props) =>
// 			<ReduxAsyncConnect {...props} helpers={{client}} filter={item => !item.deferred} />
// 		} history={browserHistory}>
// 		{getRoutes()}
// 	</Router>
// );
// // if(localStorage.accessToken){	
// // 	setAuthorizationToken(localStorage.accessToken);
// // 	store.dispatch(setCurrentUser(localStorage.accessToken));
// // }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
// ReactDOM.render(
// 	<Provider store={store} key="provider">
//     {component}
//   </Provider>,
// 	document.getElementById("App")
// );
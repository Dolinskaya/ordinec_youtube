
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configStore from './js/store/configStore'
import { routes } from './js/routes'

const store = configStore()

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('App')
)
// ReactDOM.render(
// 	<Provider store={store} key="provider">
//     {component}
//   </Provider>,
// 	document.getElementById("App")
// );
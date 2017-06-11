import React from 'react';
import {IndexRoute, Route, Router} from 'react-router';
import {
	App,
	Home,
	NotFound,
	Offers,
} from './containers';



export default () => {
  return (
	  <Route path="/" component={App}>
	    <IndexRoute component={Home} title="Главная"/>
	    <Route path="main" component={Offers} />
	    <Route path="*" component={NotFound} status={404} />
	  </Route>
    );
};
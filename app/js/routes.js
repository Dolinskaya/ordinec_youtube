import React from 'react';
import {IndexRoute, Route, Router} from 'react-router';
import {
	App,
	Home,
	Main,
	Login,
	Menu,
	NotFound,
	Offers,
} from './containers';
import requireAuthentication from './components/Login/AunthenticatedComponent.js'


export const routes = (

	  <Route path="/" component={App}>
	    <IndexRoute component={Home} title="Главная"/>
	     <Route path='/main' component={Main} />
	   <Route path="offers" component={Offers} />
	    <Route path="*" component={NotFound} status={404} />
	  </Route>
    
);
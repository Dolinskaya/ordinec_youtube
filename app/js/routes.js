import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
	App,
	Home,
	Offers,
	NotFound
} from './containers';


export default () => {
  return (
    <Route path="/main/" component={App}>
      <IndexRoute component={Home} title="Главная"/>
      <Route path="page" component={Offers} />
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};

import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
	App,
	Home,
	NotFound
} from './containers';


export default () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} title="Главная"/>
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};

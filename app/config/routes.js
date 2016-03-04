import React from 'react';
import Main from '../components/Main';
import {browserHistory, Router, Route} from 'react-router';

export default (
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
      </Route>
    </Router>
);

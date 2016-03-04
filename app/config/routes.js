import React from 'react';
import Main from '../components/Main';
import Submit from '../components/Submit';
import {browserHistory, Router, Route} from 'react-router';

export default (
    <Router history={browserHistory}>
      <Route path="/" component={Main} />
      <Route path="submit" component={Submit} />
    </Router>
);

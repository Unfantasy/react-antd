/**
 * @description: 路由配置
 */

import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { ROUTE_PATH } from '../constants';

import Index from '../components/index';

export default (
  <Router history={browserHistory}>
    <Route path={ROUTE_PATH.index} component={Index} />
  </Router>
);

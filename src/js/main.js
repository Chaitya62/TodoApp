import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'Container';
import {Provider} from 'react-redux';
import * as actions from 'actions';
import AppAPI from 'appAPI';
import {HashRouter, Route} from 'react-router-dom';

var store = require('Store').configure();

store.dispatch(actions.startAddTodos());
//require('foundation-sites/dist/css/foundation.min.css');
require('applicationStyles/app.scss');

$(document).foundation();

ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
    <Container/>
  </HashRouter>
</Provider>, document.getElementById('app'));

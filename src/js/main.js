import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'Container';
import {Provider} from 'react-redux';
import * as actions from 'actions';
import AppAPI from 'appAPI';
import createHistory from 'history/createBrowserHistory';
import {HashRouter, Route, Redirect} from 'react-router-dom';
import firebase from 'app/firebase';

var store = require('Store').configure();
firebase
  .auth()
  .onAuthStateChanged((user) => {
    if (user) {
      store.dispatch(actions.login(user.uid));
      store.dispatch(actions.startAddTodos());
      window.location.hash = '/todos'
    } else {
      store.dispatch(actions.logout());
      window.location.hash = '/';
    }
  });

//require('foundation-sites/dist/css/foundation.min.css');
require('applicationStyles/app.scss');

$(document).foundation();

ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
    <Container/>
  </HashRouter>
</Provider>, document.getElementById('app'));

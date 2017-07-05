import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import * as actions from 'actions';
import {Provider} from 'react-redux';
import AppAPI from 'appAPI';

var store = require('Store').configure();

var initialTodos = AppAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));
// load foundation-sites
store.subscribe(() => {
  var state = store.getState();
  AppAPI.setTodos(state.todos);
})
//require('foundation-sites/dist/css/foundation.min.css');
require('applicationStyles/app.scss');

$(document).foundation();

ReactDOM.render(

  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('app'));

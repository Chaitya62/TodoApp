import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import * as actions from 'actions';
import {Provider} from 'react-redux';
import AppAPI from 'appAPI';

var store = require('Store').configure();

store.dispatch(actions.startAddTodos());
//require('foundation-sites/dist/css/foundation.min.css');
require('applicationStyles/app.scss');

$(document).foundation();

ReactDOM.render(

  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import * as actions from 'actions';
import {Provider} from 'react-redux';
var store = require('Store').configure();
// load foundation-sites

//require('foundation-sites/dist/css/foundation.min.css');
require('applicationStyles/app.scss');

store.dispatch(actions.addTodo('Clean the yard'));

$(document).foundation();

ReactDOM.render(

  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('app'));

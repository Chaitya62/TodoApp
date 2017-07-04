import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import * as actions from 'actions';
var store = require('Store').configure();
console.log(store);
// load foundation-sites

//require('foundation-sites/dist/css/foundation.min.css');
require('applicationStyles/app.scss');

store.subscribe(() => {
  console.log('new state', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

$(document).foundation();

ReactDOM.render(

  <div>
  <App/>

</div>, document.getElementById('app'));

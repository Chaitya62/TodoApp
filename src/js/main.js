import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';

// load foundation-sites

//require('foundation-sites/dist/css/foundation.min.css');
require('applicationStyles/app.scss');

$(document).foundation();

ReactDOM.render(

  <div>
  <App/>

</div>, document.getElementById('app'));

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route} from 'react-router-dom';
import App from 'App';
import Login from 'Login'

export default class MyComponent extends Component {

  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Login}/>
        <Route path="/todos" component={App}/>

      </div>
    );
  }

}

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as Redux from 'react-redux';
import * as actions from 'actions';
import firebase from 'app/firebase';
import {Redirect} from 'react-router-dom';

export class Login extends Component {

  static propTypes = {};

  constructor(props) {
    super(props);

  }

  onLogin() {
    var {dispatch} = this.props;
    dispatch(actions.startLogin());
  }

  render() {
    if (firebase.auth().currentUser) {
      return <Redirect to='/todos'/>
    }
    return (
      <div>
        <h1 className="page-title text-center">Todo App</h1>
        <div className="grid-x">
          <div className="medium-3 large-4 cell"></div>
          <div className="cell large-4 small-12 medium-6 small-centered">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>Login with github account below</p>
              <button className="button" onClick={this
                .onLogin
                .bind(this)}>Login With Github</button>
            </div>

          </div>
          <div className="medium-3 large-4 cell"></div>
        </div>
      </div>
    );
  }

}

export default Redux.connect()(Login);

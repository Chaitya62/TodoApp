import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuid from 'node-uuid';
import moment from 'moment';
import AddTodo from 'AddTodo';
import TodoList from 'TodoList';
import Search from 'Search';
import AppAPI from 'appAPI';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class App extends Component {

  constructor(props) {
    super(props);
  }
  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  }

  render() {

    return (

      <div>
        <div>
          <div className="page-actions">
            <a href="#" onClick={this
              .onLogout
              .bind(this)}>Logout</a>
          </div>
          <h1 className="page-title text-center">Todo App</h1>
          <div className="grid-x">
            <div className="medium-3 large-4 cell"></div>
            <div className="cell large-4 small-12 medium-6 small-centered">
              <div className="container">
                <Search/>
                <TodoList/>
                <AddTodo/>
              </div>
            </div>
            <div className="medium-3 large-4 cell"></div>
          </div>

        </div>
      </div>

    );
  }

}

export default connect()(App);

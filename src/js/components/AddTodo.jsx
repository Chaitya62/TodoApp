import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {};

  }

  onAddTodo(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;
    if (todoText && todoText.length > 0) {
      dispatch(actions.startAddTodo(todoText));
    }
    this.refs.todoText.value = '';
  }
  render() {

    return (
      <div className="container__footer">
        <form onSubmit={this
          .onAddTodo
          .bind(this)}>
          <input className="search" ref="todoText" type="search"/>
          <input className="button expanded" type="submit" value="Add"/>
        </form>
      </div>
    );
  }

}

export default connect()(AddTodo);

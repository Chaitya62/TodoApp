import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    var {todo, dispatch} = this.props;
    var todoClassName = todo.completed
      ? 'todo todo-completed'
      : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = todo.createdAt;

      if (todo.completed) {
        message = 'Completed ';
        timestamp = todo.completedAt;
      }

      return message + moment
        .unix(timestamp)
        .format('MMM Do, YYYY @ h:mm a');
    };
    return (

      <div className={todoClassName} onClick={() => {
        dispatch(actions.startToggleTodo(todo.id, !todo.completed));
      }}>
        <div>
          <input type="checkbox" onChange={() => {}} checked={todo.completed}/>
        </div>
        <div>
          <p >{todo.text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }

}

export default connect()(Todo);

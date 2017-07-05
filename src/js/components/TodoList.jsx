import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Todo from 'Todo';
import {connect} from 'react-redux';
import AppAPI from 'appAPI';

export class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    var self = this;
    var {todos, showCompleted, searchText} = this.props;
    var filteredTodos = AppAPI.filterTodos(todos, showCompleted, searchText);
    var renderTodos = () => {
      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">
            Nothing to do !</p>
        );
      } else {
        return filteredTodos.map((todo) => {

          return <Todo todo={todo} key={todo.id}/>
        });
      }
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }

}

export default connect((state) => {
  return state;
})(TodoList);

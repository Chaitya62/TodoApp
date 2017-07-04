import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Todo from 'Todo';
import {connect} from 'react-redux';

export class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {

    var self = this;
    var {todos} = this.props;
    var renderTodos = () => {
      if (self.props.todos.length === 0) {
        return (
          <p className="container__message">
            Nothing to do !</p>
        );
      } else {
        return self
          .props
          .todos
          .map((todo) => {

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
  return {todos: state.todos};
})(TodoList);

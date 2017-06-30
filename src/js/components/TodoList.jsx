import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Todo from 'Todo';

export default class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.todos.map((todo) => {
          return <Todo todo={todo} key={todo.id} onToggle={this.props.onToggle }/>
        })
}
      </div>
    );
  }

}

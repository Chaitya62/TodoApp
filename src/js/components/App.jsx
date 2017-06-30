import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddTodo from 'AddTodo';
import TodoList from 'TodoList';
import Search from 'Search';
import uuid from 'node-uuid';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        }, {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        }
      ],
      showCompleted: false,
      searchText: ''
    };
  }
  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos, {
          id: uuid(),
          text: text,
          completed: false
        }
      ]
    })
  }
  handleSearch(showCompleted, searchText) {
    this.setState({showCompleted: showCompleted, searchText: searchText.toLowerCase()});
  }
  handleToggle(todoId) {
    var updatedTodos = this.state.todos.map((todo) => {
      if (todo.id == todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos: updatedTodos});
  }
  render() {
    return (
      <div>
        <div>

          <div className="grid-x">
            <div className="medium-3 large-4 cell"></div>
            <div className="cell large-4 small-12 medium-6 small-centered">

              <Search onSearch={this.handleSearch.bind(this)}/>
              <TodoList {...this.state} onToggle={this.handleToggle.bind(this)}/>
              <AddTodo onAddTodo={this.handleAddTodo.bind(this)}/>
            </div>
            <div className="medium-3 large-4 cell"></div>
          </div>

        </div>
      </div>
    );
  }

}

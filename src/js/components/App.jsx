import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuid from 'node-uuid';
import moment from 'moment';

import AddTodo from 'AddTodo';
import TodoList from 'TodoList';
import Search from 'Search';
import AppAPI from 'appAPI';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: AppAPI.getTodos(),
      showCompleted: false,
      searchText: ''
    };
  }
  componentDidUpdate(prevProps, prevState) {
    AppAPI.setTodos(this.state.todos);
  }
  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos, {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    })
  }
  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  render() {

    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = AppAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <div>
          <h1 className="page-title text-center">Todo App</h1>
          <div className="grid-x">
            <div className="medium-3 large-4 cell"></div>
            <div className="cell large-4 small-12 medium-6 small-centered">
              <div className="container">
                <Search onSearch={this
                  .handleSearch
                  .bind(this)}/>
                <TodoList/>
                <AddTodo onAddTodo={this
                  .handleAddTodo
                  .bind(this)}/>
              </div>
            </div>
            <div className="medium-3 large-4 cell"></div>
          </div>

        </div>
      </div>
    );
  }

}

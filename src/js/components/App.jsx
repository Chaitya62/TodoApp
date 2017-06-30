import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AddTodo from 'AddTodo';
import TodoList from 'TodoList';
import Search from 'Search';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <div>

          <div className="grid-x">
            <div className="medium-3 large-4 cell"></div>
            <div className="cell large-4 small-12 medium-6 small-centered">
              App Component
              <Search/>
              <TodoList/>
              <AddTodo/>
            </div>
            <div className="medium-3 large-4 cell"></div>
          </div>

        </div>
      </div>
    );
  }

}

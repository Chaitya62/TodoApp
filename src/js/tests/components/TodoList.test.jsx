import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils'
import $ from 'jquery/dist/jquery.min.js';

import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList', () => {
  it('should exits', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo Component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Do something'
      }, {
        id: 2,
        text: 'Check Mail'
      }
    ];
    var todoList = ReactTestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = ReactTestUtils.scryRenderedComponentsWithType(todoList, Todo);
    expect(todosComponents.length).toBe(todos.length);
  })

});

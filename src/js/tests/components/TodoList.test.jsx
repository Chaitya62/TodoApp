import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils'
import $ from 'jquery/dist/jquery.min.js';
import {configure} from 'Store';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';
import {Provider} from 'react-redux';

describe('TodoList', () => {
  it('should exits', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo Component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Do something',
        completed: false,
        completedAt: undefined,
        createdAt: 5000
      }, {
        id: 2,
        text: 'Check Mail',
        completed: false,
        completedAt: undefined,
        createdAt: 5000
      }
    ];
    var store = configure({todos});
    var provider = ReactTestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    )
    var todoList = ReactTestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = ReactTestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    var todos = [];
    var todoList = ReactTestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));
    expect($el.find('.container__message').length).toBe(1);
  });

});

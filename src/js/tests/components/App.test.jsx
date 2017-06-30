import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils'
import $ from 'jquery/dist/jquery.min.js';

import App from 'App';

describe('App', () => {
  it('should exits', () => {
    expect(App).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = "test text";
    var app = ReactTestUtils.renderIntoDocument(<App/>);

    app.setState({todos: []});
    app.handleAddTodo(todoText);
    expect(app.state.todos.length).toBe(1);
    expect(app.state.todos[0].text).toBe(todoText);
    //expect createdAt to be a number
    expect(app.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var app = ReactTestUtils.renderIntoDocument(<App/>);
    app.setState({todos: [todoData]});
    expect(app.state.todos[0].completed).toBe(false);
    app.handleToggle(11);
    expect(app.state.todos[0].completed).toBe(true);
    // expect completedAt to be a number
    expect(app.state.todos[0].completedAt).toBeA('number');
  });

  it('should be undefined if toggled completed from true to false', () => {
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: true,
      createdAt: 0,
      completedAt: 10
    };
    var app = ReactTestUtils.renderIntoDocument(<App/>);
    app.setState({todos: [todoData]});
    expect(app.state.todos[0].completed).toBe(true);
    app.handleToggle(11);
    expect(app.state.todos[0].completed).toBe(false);
    // expect completedAt to be a undefined
    expect(app.state.todos[0].completedAt).toNotExist();
  });

});

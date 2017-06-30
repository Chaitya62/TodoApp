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
  });

});

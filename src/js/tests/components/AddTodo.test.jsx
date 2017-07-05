import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils'
import $ from 'jquery/dist/jquery.min.js';

import {AddTodo} from 'AddTodo';
import * as actions from 'actions';

describe('AddTodo', () => {
  it('should exits', () => {
    expect(AddTodo).toExist();
  });

  it('should dispatch ADD_TODO when valid todo text', () => {
    const todoText = 'check mail';
    var action = actions.startAddTodo(todoText);
    var spy = expect.createSpy();
    var addTodo = ReactTestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = todoText;
    ReactTestUtils
      .Simulate
      .submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO if text is invalid', () => {
    var spy = expect.createSpy();
    var addTodo = ReactTestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = '';

    ReactTestUtils
      .Simulate
      .submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });

});

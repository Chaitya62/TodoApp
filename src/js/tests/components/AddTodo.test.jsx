import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils'
import $ from 'jquery/dist/jquery.min.js';

import AddTodo from 'AddTodo';

describe('AddTodo', () => {
  it('should exits', () => {
    expect(AddTodo).toExist();
  });

  it('should call handleAddtodo if text is valid', () => {
    const todoText = 'check mail';
    var spy = expect.createSpy();
    var addTodo = ReactTestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = todoText;
    ReactTestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(todoText);
  });

  it('should not call handleAddtodo if text is invalid', () => {
    var spy = expect.createSpy();
    var addTodo = ReactTestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>)
    var $el = $(ReactDOM.findDOMNode(addTodo));
    addTodo.refs.todoText.value = '';
    ReactTestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });

});

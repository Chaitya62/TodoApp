import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils'
import $ from 'jquery/dist/jquery.min.js';

import Todo from 'Todo';

describe('Todo', () => {
  it('should exits', () => {
    expect(Todo).toExist();
  });

  it('should call onToggle prop  with id on click', () => {
    var todoData = {
      id: 199,
      text: 'write todo text to test.jsx test',
      completed: false
    };
    var spy = expect.createSpy();
    var todo = ReactTestUtils.renderIntoDocument(<Todo todo={todoData} onToggle={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todo))
    ReactTestUtils.Simulate.click($el[0]);
    expect(spy).toHaveBeenCalledWith(todoData.id);
  })

});

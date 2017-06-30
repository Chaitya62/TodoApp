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

});

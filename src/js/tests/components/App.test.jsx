import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils'
import $ from 'jquery/dist/jquery.min.js';
import {Provider} from 'react-redux';
import TodoList from 'TodoList';
import App from 'App';

var configureStore = require('Store');

describe('App', () => {
  it('should exits', () => {
    expect(App).toExist();
  });

  it('should render todoList', () => {});
  var store = configureStore.configure();
  var provider = ReactTestUtils.renderIntoDocument(
    <Provider store={store}>
      <App/>
    </Provider>
  );

  var app = ReactTestUtils.scryRenderedComponentsWithType(provider, App)[0];
  var todoList = ReactTestUtils.scryRenderedComponentsWithType(app, TodoList);
  expect(todoList.length).toEqual(1);

});

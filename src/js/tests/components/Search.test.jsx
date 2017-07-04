import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils'
import $ from 'jquery/dist/jquery.min.js';

import {Search} from 'Search';

describe('Search', () => {
  it('should exits', () => {
    expect(Search).toExist();
  });

  it('should dispatch SET_SEARCH_TEXT change ', () => {

    const searchText = 'Search this';
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText
    };
    var spy = expect.createSpy();
    var search = ReactTestUtils.renderIntoDocument(<Search dispatch={spy}/>);

    search.refs.searchText.value = searchText;
    ReactTestUtils
      .Simulate
      .change(search.refs.searchText);
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    var spy = expect.createSpy();
    var search = ReactTestUtils.renderIntoDocument(<Search dispatch={spy}/>);
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    search.refs.showCompleted.checked = true;
    ReactTestUtils
      .Simulate
      .change(search.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(action);

  });

});

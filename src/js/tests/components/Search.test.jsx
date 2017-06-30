import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import ReactTestUtils from 'react-dom/test-utils'
import $ from 'jquery/dist/jquery.min.js';

import Search from 'Search';

describe('Search', () => {
  it('should exits', () => {
    expect(Search).toExist();
  });

  it('should call onSearch props with entered input text', () => {
    const searchText = 'Search this';
    var spy = expect.createSpy();
    var search = ReactTestUtils.renderIntoDocument(<Search onSearch={spy}/>);

    search.refs.searchText.value = searchText;
    ReactTestUtils.Simulate.change(search.refs.searchText);
    expect(spy).toHaveBeenCalledWith(false, searchText);
  });

  it('should call onSearch with proper checked value', () => {
    var spy = expect.createSpy();
    var search = ReactTestUtils.renderIntoDocument(<Search onSearch={spy}/>);

    search.refs.showCompleted.checked = true;
    ReactTestUtils.Simulate.change(search.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(true, '');

  });

});

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }
  handleSearch() {
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  }
  render() {
    return (
      <div>
        <input type="search" className="" onChange={this.handleSearch.bind(this)} ref="searchText" placeholder="Search todos"/>
        <label>
          <input type="checkbox" onChange={this.handleSearch.bind(this)} className="" ref="showCompleted"/>
          Show completed todos
        </label>

      </div>
    );
  }
}

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from 'actions';

export class Search extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    var {dispatch, showCompleted, searchText} = this.props;
    return (
      <div className="container__header">
        <input type="search" className="" onChange={() => {
          var searchText = this.refs.searchText.value;
          dispatch(actions.setSearchText(searchText));
        }} ref="searchText" value={searchText} placeholder="Search todos"/>
        <label>
          <input type="checkbox" onChange={() => {
            dispatch(actions.toggleShowCompleted());
          }} className="" ref="showCompleted" checked={showCompleted}/>
          Show completed todos
        </label>

      </div>
    );
  }
}

export default connect((state) => {
  return {showCompleted: state.showCompleted, searchText: state.searchText}
})(Search);

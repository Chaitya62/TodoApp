import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    AddTodo.propTypes = {
      onAddTodo: PropTypes.func.isRequired
    };
  }

  onAddTodo(e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    if (todoText && todoText.length > 0) {
      this.props.onAddTodo(todoText);
    }
  }
  render() {

    return (
      <div>
        <form onSubmit={this.onAddTodo.bind(this)}>
          <input className="search" ref="todoText" type="search"/>
          <input className="button expanded" type="submit" value="Add"/>
        </form>
      </div>
    );
  }

}

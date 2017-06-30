import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {};

  }

  onAddTodo(e) {
    e.preventDefault();
    var todoText = this.refs.todoText.value;
    if (todoText && todoText.length > 0) {
      this.props.onAddTodo(todoText);
    }
    this.refs.todoText.value = '';
  }
  render() {

    return (
      <div className="container__footer">
        <form onSubmit={this.onAddTodo.bind(this)}>
          <input className="search" ref="todoText" type="search"/>
          <input className="button expanded" type="submit" value="Add"/>
        </form>
      </div>
    );
  }

}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired
};

export default AddTodo;

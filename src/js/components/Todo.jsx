import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    var {todo} = this.props;
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = todo.createdAt;

      if (todo.completed) {
        message = 'Completed ';
        timestamp = todo.completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
    };
    return (

      <div onClick={() => {
        this.props.onToggle(todo.id);
      }}>

        <input type="checkbox" onChange={() => {}} checked={todo.completed}/>
        <p>{todo.text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }

}

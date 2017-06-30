import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    var {todo} = this.props;
    return (
      <div>
        <p>
          {todo.id}. {todo.text}
        </p>
      </div>
    );
  }

}

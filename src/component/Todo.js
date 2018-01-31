import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Todo extends Component {
  static propTypes = {
    color: PropTypes.string,
    textDecoration: PropTypes.string,
    text: PropTypes.string,
    handleTodo: PropTypes.func
  }
  render() {
    const todo  = this.props
    return (
      <li style={
                  { color: todo.color,
                    textDecoration: todo.textDecoration
                  }
                }
          onClick={() => {todo.handleTodo(todo.index)}}>
        {todo.text}
      </li>
    )
  }
}
export default Todo
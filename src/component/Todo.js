import React, { Component } from 'react';
import PropTypes from 'prop-types'
class Todo extends Component {
  static propTypes = {
    text: PropTypes.string,
    handleTodo: PropTypes.func
  }
  render() {
    const todo  = this.props
    const color = todo.completed ? 'blue' : 'red'
    const textDecoration = todo.completed ? 'line-through' : 'underline'
    return (
      <li style={
                  { color: color,
                    textDecoration: textDecoration
                  }
                }
          onClick={() => {todo.handleTodo(todo.index)}}>
        {todo.text}
      </li>
    )
  }
}
export default Todo
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import '../index.css'
class AddTodo extends Component {
  static propTypes = {
    handleAddTodo: PropTypes.func
  }
  handleAddTodo = () => {
    const todo = this.refs.todo_input.value
    this.props.handleAddTodo(todo)
    this.refs.todo_input.value = ''
  }
  render() {
    return(
      <div class="todo-input">
        <input type='text' ref='todo_input'/>
        <button onClick={this.handleAddTodo}>add todo</button>
      </div>
    )
  }
}
export default AddTodo
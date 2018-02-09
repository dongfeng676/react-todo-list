import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Todo from './Todo'
import '../index.css'
class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    handleTodo: PropTypes.func
  }
  render() {
    return (
      <div class="todo-list">
        {this.props.todos.map((todo, index) =>
          <Todo {...todo}
                key={index}
                index={index}
                handleTodo={this.props.handleTodo}/>
        )}
      </div>
    )
  }
}
export default TodoList

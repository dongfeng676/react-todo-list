import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Todo from './Todo'
class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    handleTodo: PropTypes.func
  }
  render() {
    return (
      <div>
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

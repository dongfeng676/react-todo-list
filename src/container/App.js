import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setFilter, clickTodo, addTodo} from '../actions'
import AddTodo from '../component/AddTodo'
import TodoList from '../component/TodoList'
import FilterList from '../component/FilterList'
class App extends Component {
  render(){
    return(
      <div class="wrapper">
        <AddTodo
          handleAddTodo = {this.props.handleAddTodo }
        />
        <FilterList
          filters = { this.props.filters }
          handleFilter = { this.props.handleFilter }
        />
        <TodoList
          todos = { this.props.todos }
          handleTodo = { this.props.handleTodo }
        />

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    todos: filterTodo(state.todos,state.filters.filter( (filter) => filter.condition)[0]),
    filters: state.filters
  }
}

function filterTodo(todos, filter) {
  switch(filter.name){
    case 'WAIT':
      return todos.filter( (todo) => !todo.completed )
    case 'COMPLETED':
      return todos.filter( (todo) => todo.completed )
    default:
      return todos
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    handleAddTodo: (text) => {
      dispatch(addTodo(text))
    },
    handleTodo: (index)=> {
      dispatch(clickTodo(index))
    },
    handleFilter: (filter) => {
      dispatch(setFilter(filter))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
import { connect } from 'react-redux'
import { clickTodo } from '../actions'
import TodoList from '../component/TodoList'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleTodo: (index)=> {
      dispatch(clickTodo(index))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import AddTodo from '../component/AddTodo'

const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleAddTodo: (text)=> {
      dispatch(addTodo(text))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
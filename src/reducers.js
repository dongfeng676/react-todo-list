import { combineReducers } from 'redux'
import { CLICK_TODO, ADD_TODO, FILTER_CONDITION } from './actions'

const initTodos = [
  {text: 'task one', completed: false},
  {text: 'task two', completed: false},
]
const filterList = [
  {name: 'ALL', condition: true},
  {name: 'WAIT', condition: false},
  {name: 'COMPLETED', condition: false}
]

function todos(state = initTodos, action) {
  switch(action.type){
    case CLICK_TODO:
      return state.map((todo, index)=>{
        if(index == action.index){
          return {...todo, completed: true}
        }
        return todo
      })
    case ADD_TODO:
      return [...state, {text: action.text, completed: false }]
    default:
      return state
  }
}

function filters(state = filterList, action) {
  switch(action.type){
    case FILTER_CONDITION:
      return state.map((filter)=> {
        if(filter.name === action.filter){
          return {...filter, condition: true}
        }else{
          return {...filter, condition: false}
        }
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos,
  filters,
})

export default todoApp


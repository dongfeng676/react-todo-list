export const CLICK_TODO = 'CLICK_TODO'
export const ADD_TODO = 'ADD_TODO'
export const FILTER_CONDITION = 'FILTER_CONDITION'
// export const FILTER_LIST = {
//   'ALL': 'ALL',
//   'WAIT': 'WAIT',
//   'COMPLETED': 'COMPLETED'
// }

export function clickTodo(index){
  return {type: CLICK_TODO, index}
}

export function addTodo(text){
  return {type: ADD_TODO, text}
}

export function setFilter(filter){
  return {type: FILTER_CONDITION, filter}
}

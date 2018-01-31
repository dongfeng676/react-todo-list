export const CLICK_TODO = 'CLICK_TODO'
export const ADD_TODO = 'ADD_TODO'

export function clickTodo(index){
  return {type: CLICK_TODO, index}
}

export function addTodo(text){
  return {type: ADD_TODO, text}
}
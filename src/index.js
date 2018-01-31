import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './component/TodoList'
import todoApp from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './container/App'
console.log('store_start')
const store = createStore(todoApp)
console.log('store: ',store)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

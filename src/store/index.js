import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const todos = localStorage.getItem('todos');
const initialState = todos ? JSON.parse(todos) : [];

const CHECK_TODO = 'CHECK_TODO';
const ADD_TODO = 'ADD_TODO';

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.title,
          isChecked: false
        }
      ];
    case CHECK_TODO:
      return state.map(todo =>
        todo.id === action.todo.id ? { ...todo, isChecked: !todo.isChecked } : todo
      );
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

function addTodo(title) {
  return {
    type: ADD_TODO,
    title: title
  };
}

export function addTodoWithPersistance(title) {
  return function(dispatch) {
    const todos = store.getState();
    const newTodo = { id: todos.length + 1, title: title, isChecked: false };

    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));

    dispatch(addTodo(title));
  };
}

function checkTodo(todo) {
  return {
    type: CHECK_TODO,
    todo: todo
  };
}
export function checkTodoWithPersistance(todoToCheck) {
  return function(dispatch) {
    const todos = store
      .getState()
      .map(todo => (todo.id === todoToCheck.id ? { ...todo, isChecked: !todo.isChecked } : todo));

    localStorage.setItem('todos', JSON.stringify(todos));

    dispatch(checkTodo(todoToCheck));
  };
}

export default store;

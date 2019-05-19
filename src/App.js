import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
        <TodoForm />
      </div>
    </Provider>
  );
}

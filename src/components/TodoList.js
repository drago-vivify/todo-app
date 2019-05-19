import React from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';
import { checkTodoWithPersistance } from '../store';

function TodoList({ todos, checkTodo }) {
  const handleTodoClick = todo => {
    checkTodo(todo);
  };

  return (
    <div>
      <h1>My Todo List</h1>
      <div className="list-group" style={{ width: '50%', margin: 'auto' }}>
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} onTodoClick={handleTodoClick} />
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    todos: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    checkTodo: function(todo) {
      dispatch(checkTodoWithPersistance(todo));
    }
  };
}

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
export default TodoListContainer;

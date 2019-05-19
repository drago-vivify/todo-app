import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, handleTodoClick }) {
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

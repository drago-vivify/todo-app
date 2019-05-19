import React from 'react';

function CheckedTodoItem({ todo }) {
  return (
    <div className="list-group-item list-group-item-success">
      <span className="fa fa-check" />
      <span style={{ textDecoration: 'line-through' }}>{todo.title}</span>
    </div>
  );
}

function UncheckedTodoItem({ todo }) {
  return (
    <div className="list-group-item">
      <span>{todo.title}</span>
    </div>
  );
}

export default function TodoItem({ todo, onTodoClick }) {
  return (
    <div onClick={() => onTodoClick(todo)}>
      {todo.isChecked ? <CheckedTodoItem todo={todo} /> : <UncheckedTodoItem todo={todo} />}
    </div>
  );
}

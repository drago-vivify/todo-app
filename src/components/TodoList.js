import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: 'Create components', isChecked: false },
        { id: 2, title: 'Install redux', isChecked: true },
        { id: 3, title: 'Create redux store', isChecked: false },
        { id: 4, title: 'Create actions', isChecked: false },
        { id: 5, title: 'Add side effects', isChecked: false },
        { id: 6, title: 'Add selectors', isChecked: false }
      ]
    };
  }

  handleTodoClick = todo => {};

  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <div className="list-group" style={{ width: '50%', margin: 'auto' }}>
          {this.state.todos.map(todo => (
            <TodoItem todo={todo} key={todo.id} onTodoClick={() => this.handleTodoClick(todo)} />
          ))}
        </div>
      </div>
    );
  }
}

import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: 'Create components', isChecked: true },
        { id: 2, title: 'Install redux', isChecked: false },
        { id: 3, title: 'Create redux store', isChecked: false },
        { id: 4, title: 'Create actions', isChecked: false },
        { id: 5, title: 'Persist state to localStorage', isChecked: false },
        { id: 6, title: 'Add selectors', isChecked: false },
        { id: 7, title: 'Filter unchecked todos', isChecked: false }
      ]
    };
  }

  handleTodoClick = clickedTodo => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === clickedTodo.id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    });
  };

  render() {
    return (
      <div className="App">
        <TodoList todos={this.state.todos} handleTodoClick={this.handleTodoClick} />
      </div>
    );
  }
}
export default App;

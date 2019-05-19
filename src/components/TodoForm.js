import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { title } = this.state;

    this.props.onTodoSubmit(title);
    this.setState({ title: '' });
  };

  render() {
    return (
      <div>
        <form className="border border-light p-5" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Add todo"
            value={this.state.title}
            onChange={event => {
              this.setState({ title: event.target.value });
            }}
          />
        </form>
      </div>
    );
  }
}

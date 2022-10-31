/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export class TodosList extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodosList;

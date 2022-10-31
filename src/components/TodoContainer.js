import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class TodoContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <ul>
        {todos.map((todo) => (
          // console.log(todo)
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    );
  }
}
export default TodoContainer;
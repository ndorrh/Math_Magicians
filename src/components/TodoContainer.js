import React from 'react';
import { TodosList } from './TodosList';
import Header from './Header';

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

  toggle = (id) => {
    this.setState((preState) => {
      const updatedTodos = preState.todos.map((todo) => {
        if (todo.id === id) { return { ...todo, completed: !todo.completed }; }
        return todo;
      });
      // console.log(thruth);
      return { todos: updatedTodos };
    });
  }

  delTodo = (id) => {
    // console.log('deleted', id);
    this.setState((preState) => {
      const updatedTodos = preState.todos.filter((todo) => todo.id !== id);
      return { todos: updatedTodos };
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <Header />
        <TodosList todos={todos} handleChangeProps={this.toggle} deleteTodo={this.delTodo} />
      </div>
    );
  }
}
export default TodoContainer;

/* eslint-disable react/prop-types */
import React from 'react';
import styles from './moduleCss/TodoItem.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class TodoItem extends React.Component {
  render() {
    const { todo, handleChangeProps, deleteTodo } = this.props;
    return (
      <li className={styles.item}>
        {' '}
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        {' '}
        <button type="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
        {' '}
        {todo.title}
      </li>
    );
  }
}

export default TodoItem;

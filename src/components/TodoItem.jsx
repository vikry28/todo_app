import React, { useContext } from 'react';
import { TodoContext } from '../App';

const TodoItem = ({ todo }) => {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: 'line-through' };
    } else {
      return { textDecoration: 'none' };
    }
  };

  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        style={styles.checkbox}
        onChange={() => toggleCompleted(todo.id)}
      />
      <p style={{ ...styles.todoTitle, ...getTodoTitleStyle() }}>{todo.title}</p>
      <p style={styles.date}>{formatDate(todo.createdAt)}</p>
      <button style={styles.button} onClick={() => deleteTodo(todo.id)}>
        x
      </button>
    </div>
  );
};

const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  checkbox: {
    height: '18px',
    width: '18px',
  },
  todoTitle: {
    flex: 1,
    marginLeft: '10px',
    textAlign: 'left',
  },
  date: {
    marginRight: '10px',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#BB0000',
    color: '#fff',
    height: '30px',
    width: '30px',
    borderRadius: '100%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default TodoItem;
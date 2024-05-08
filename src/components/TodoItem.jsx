import React from 'react';

const TodoItem = ({ todo, toggleCompleted }) => {
  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: 'line-through' };
    } else {
      return { textDecoration: 'none' };
    }
  };

  return (
    <div style={styles.todoItem}>
      <input
        type="checkbox"
        style={styles.checkbox}
        onChange={() => toggleCompleted(todo.id)}
      />
      <p style={{ ...styles.todoTitle, ...getTodoTitleStyle() }}>{todo.title}</p>
      <button style={styles.button}>x</button>
    </div>
  );
};

const styles = {
  todoItem: {
    display: 'flex',
    alignItems: 'center',
    border: '2px solid #f4f4f4',
    fontSize: '24px',
    padding: '10px',
    marginBottom: '10px',
  },
  checkbox: {
    marginRight: '10px',
    height: '18px',
    width: '18px',
  },
  todoTitle: {
    flex: '1',
    overflowWrap: 'break-word',
    textAlign: 'left', // Posisi teks di sebelah kiri
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

export default TodoItem

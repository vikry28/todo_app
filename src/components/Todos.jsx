import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ todos }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
          />
        );
      })}
    </div>
  );
};

const styles = {
  container: {
    width: '100%', // Kontainer mengisi lebar maksimum yang tersedia
  },
};

export default Todos;
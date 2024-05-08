import React, { useState } from 'react';
import Todos from './components/Todos';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ]);

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      <Todos todos={todos} toggleCompleted={toggleCompleted} />
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '20px',
    textAlign: 'center',
    margin: 'auto', 
    maxWidth: '600px', 
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px',
  },
};

export default App

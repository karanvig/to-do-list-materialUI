/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Button, List } from '@mui/material';
import InputTasks from './InputTasks';
import Tasks from './Tasks';

const Todo = () => {
  const [todos, setTodos] = useState(() => {
    // Load todos from localStorage on initial render
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [newTodo, setNewTodo] = useState('');

  // Effect to save todos in localStorage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log("Todos saved to local storage:", todos);
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem = { id: Date.now(), title: newTodo, completed: false };
      setTodos([...todos, newTodoItem]);
      setNewTodo(''); // Clear input field after adding
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const editTodo = (id, newTitle) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, title: newTitle } : todo));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
      <h1>Todo List</h1>

      <InputTasks newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />

      <List>
        {todos.map(todo => (
          <Tasks
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        ))}
      </List>

      <Button
        variant="contained"
        color="secondary"
        onClick={clearCompleted}
        style={{ marginTop: '20px' }}
      >
        Clear Completed
      </Button>
    </div>
  );
};

export default Todo;

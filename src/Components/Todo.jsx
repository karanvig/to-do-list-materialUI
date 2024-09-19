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
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim()) {
      const newTodoItem = { id: Date.now(), title: newTodo, completed: false };
      setTodos([...todos, newTodoItem]);
      setNewTodo(''); // Clear input field after adding
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newTitle) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-5 text-gray-700">Todo List</h1>

      <InputTasks
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        addTodo={addTodo}
      />

      <List className="mt-4 rounded-lg shadow-sm ">
        {todos.map((todo) => (
          <Tasks
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </List>

      <Button
        variant="contained"
        color="secondary"
        onClick={clearCompleted}
        className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white"
      >
        Clear Completed
      </Button>
    </div>
  );
};

export default Todo;

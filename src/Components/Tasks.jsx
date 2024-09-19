import React, { useState } from 'react';
import { ListItem, ListItemText, Checkbox, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Tasks = ({ todo, toggleTodo, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  // Enable editing mode on double-click
  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  // Save the edited todo
  const handleEdit = () => {
    if (newTitle.trim()) {
      editTodo(todo.id, newTitle);
    }
    setIsEditing(false); // Exit edit mode
  };

  // Handle input change
  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  // Save changes when "Enter" key is pressed or exit edit mode when "Escape" is pressed
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEdit(); // Save the todo when Enter is pressed
    } else if (e.key === 'Escape') {
      setIsEditing(false); // Exit edit mode on Escape
    }
  };

  // Handle delete action
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <ListItem
      className="flex items-center justify-between p-4 bg-white border border-gray-300 rounded-lg shadow-md mb-2 hover:bg-gray-50 transition duration-300"
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          className="text-red-500 hover:text-red-700"
          onClick={handleDelete} // Attach delete handler
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="text-blue-500"
      />

      {isEditing ? (
        <TextField
          value={newTitle}
          onChange={handleChange}
          onBlur={handleEdit} // Save on losing focus
          onKeyDown={handleKeyDown} // Save on "Enter", exit on "Escape"
          autoFocus
          fullWidth
          className="mr-3"
        />
      ) : (
        <ListItemText
          primary={todo.title}
          onDoubleClick={handleDoubleClick} // Enable editing on double-click
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          className="w-full text-gray-800 cursor-pointer break-words" // Ensure text wraps
        />
      )}
    </ListItem>
  );
};

export default Tasks;

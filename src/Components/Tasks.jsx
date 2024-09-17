/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Checkbox, TextField, ListItem, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const Tasks = ({ todo, toggleTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleEdit = () => {
    if (newTitle.trim()) {
      editTodo(todo.id, newTitle);
      setIsEditing(false);
    }
  };

  return (
    <ListItem
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        color="primary"
      />

      {isEditing ? (
        <TextField
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={(e) => e.key === 'Enter' && handleEdit()}
          variant="outlined"
          size="small"
          fullWidth
        />
      ) : (
        <span onDoubleClick={handleDoubleClick}>{todo.title}</span>
      )}

      <IconButton onClick={handleDoubleClick}>
        <EditIcon />
      </IconButton>
    </ListItem>
  );
};

export default Tasks;

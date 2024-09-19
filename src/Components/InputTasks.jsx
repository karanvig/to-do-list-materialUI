import React from 'react';
import { TextField, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const InputTasks = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <div className="flex items-center">
      <TextField
        variant="outlined"
        fullWidth
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task..."
        className="bg-white rounded-lg shadow-sm"
      />
      <IconButton
        color="primary"
        onClick={addTodo}
        className="ml-2 bg-blue-500 hover:bg-blue-600 text-white"
      >
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default InputTasks;

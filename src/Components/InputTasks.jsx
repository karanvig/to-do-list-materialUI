import React from 'react';
import { TextField, Button } from '@mui/material';

const InputTasks = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
      <TextField
        label="Add a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        variant="outlined"
        fullWidth
        style={{ marginRight: '10px' }}
      />
      <Button variant="contained" color="primary" onClick={addTodo}>
        Add
      </Button>
    </div>
  );
};

export default InputTasks;

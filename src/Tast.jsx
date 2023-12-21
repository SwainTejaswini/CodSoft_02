import React, { useState } from 'react';
function TaskForm({ onAddTask }) {
  const [task, setTask] = useState({ name: '', description: '', completed: false });

  const handleInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTask({ ...task, id: Date.now() });
    setTask({ name: '', description: '', completed: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task Name:
        <input type="text" name="name" value={task.name} onChange={handleInputChange} required />
      </label>
      <label>
        Description:
        <textarea name="description" value={task.description} onChange={handleInputChange} />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;

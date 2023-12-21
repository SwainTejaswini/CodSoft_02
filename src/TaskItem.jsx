import React, { useState } from 'react';


function TaskItem({ task, onUpdateTask, onDeleteTask, onToggleCompletion }) {
  const [isEditing, setEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({ name: task.name, description: task.description });

  const handleInputChange = (e) => {
    setUpdatedTask({ ...updatedTask, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    onUpdateTask(task.id, updatedTask);
    setEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input type="text" name="name" value={updatedTask.name} onChange={handleInputChange} />
          <textarea name="description" value={updatedTask.description} onChange={handleInputChange} />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <span>{task.name}</span>
          <p>{task.description}</p>
          <input type="checkbox" checked={task.completed} onChange={() => onToggleCompletion(task.id)} />
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;

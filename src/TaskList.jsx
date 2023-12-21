import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';
import './App.css'; 

function TaskList({ tasks, onUpdateTask, onDeleteTask, onToggleCompletion }) {
  const [taskList, setTaskList] = useState(tasks);

  useEffect(() => {
    setTaskList(tasks);
  }, [tasks]);

  return (
    <ul>
      {taskList.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onUpdateTask={onUpdateTask}
          onDeleteTask={onDeleteTask}
          onToggleCompletion={onToggleCompletion}
        />
      ))}
    </ul>
  );
}

export default TaskList;

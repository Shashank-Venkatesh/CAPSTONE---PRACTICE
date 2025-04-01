import React, { useState } from 'react';
import '../STYLES/Todos.css';

const Todos = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('green');
  const [tasks, setTasks] = useState([]);

  const priorityEmojis = {
    red: '🔴 High Priority',
    orange: '🟠 Medium Priority',
    green: '🟢 Low Priority'
  };

  const priorityOrder = {
    red: 1,
    orange: 2,
    green: 3
  };

  const handleAddTask = () => {
    if (task.trim()) {
      const newTasks = [...tasks, { text: task, priority }];
      newTasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
      setTasks(newTasks);
      setTask('');
      setPriority('green');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <div className="todos">
        <h1>TASK TO BE COMPLETED</h1>
        <input
          type="text"
          className="task-input"
          placeholder='Enter Task'
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select className="priority-select" value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="red">🔴 High Priority</option>
          <option value="orange">🟠 Medium Priority</option>
          <option value="green">🟢 Low Priority</option>
        </select>
        <button className="add-button" onClick={handleAddTask}>Add</button>
        <ul className="task-list">
          {tasks.map((t, index) => (
            <li key={index} className="task-item" style={{ borderColor: t.priority }}>
              {t.text} ({priorityEmojis[t.priority]}) 
              <button className="delete-button" onClick={() => handleDeleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
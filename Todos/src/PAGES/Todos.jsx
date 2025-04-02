import { useState } from "react";
import "../STYLES/Todos.css";

const Todos = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("High");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTasks([...tasks, { text: task, priority }]);
    setTask("");
  };

  return (
    <div className="task-container">
      <h2 className="task-header">My Tasks</h2>
      <div className="task-input">
        <input
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button onClick={addTask}>+</button>
      </div>
      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="no-tasks">No tasks yet. Add some to get started!</p>
        ) : (
          tasks.map((t, index) => (
            <div key={index} className="task-item">
              <span>{t.text}</span> <span className={`priority-${t.priority.toLowerCase()}`}>{t.priority}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Todos;

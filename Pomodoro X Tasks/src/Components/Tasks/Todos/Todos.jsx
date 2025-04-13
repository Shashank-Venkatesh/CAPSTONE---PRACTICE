import { useState, useEffect } from "react";
// import "../Styles/Todos.css";

const Todos = () => {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("High");
  const [tasks, setTasks] = useState([]);
  const [notification, setNotification] = useState("");

  const priorityOrder = {
    High: 1,
    Medium: 2,
    Low: 3,
  };

  const addTask = () => {
    if (!task.trim()) return;

    const newTask = { text: task, priority };
    const updatedTasks = [...tasks, newTask].sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );

    setTasks(updatedTasks);
    setTask("");
  };

  const completeTask = (index) => {
    const completedTask = tasks[index];
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1); // Remove the task
    setTasks(updatedTasks);

    setNotification(`Task '${completedTask.text}' completed!`);
  };

  // Auto-dismiss notification after 3 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

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
              <input
                type="checkbox"
                onChange={() => completeTask(index)}
                className="task-checkbox"
              />
              <span>{t.text}</span>
              <span className={`priority-${t.priority.toLowerCase()}`}>
                {t.priority}
              </span>
            </div>
          ))
        )}
      </div>

      {notification && <div className="task-notification">{notification}</div>}
    </div>
  );
};

export default Todos;

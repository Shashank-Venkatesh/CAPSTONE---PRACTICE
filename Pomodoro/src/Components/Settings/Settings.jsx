import React, { useState } from 'react';
import "../Styles/Settings.css";

const Settings = ({ updateDurations }) => {
  const [focus, setFocus] = useState(25);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(15);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDurations({
      focus: parseInt(focus),
      shortBreak: parseInt(shortBreak),
      longBreak: parseInt(longBreak),
    });
  };

  return (
    <form className="settings-form" onSubmit={handleSubmit}>
      <label>Focus Duration (mins):</label>
      <input type="number" value={focus} onChange={(e) => setFocus(e.target.value)} />

      <label>Short Break (mins):</label>
      <input type="number" value={shortBreak} onChange={(e) => setShortBreak(e.target.value)} />

      <label>Long Break (mins):</label>
      <input type="number" value={longBreak} onChange={(e) => setLongBreak(e.target.value)} />

      <button type="submit">Apply</button>
    </form>
  );
};

export default Settings;

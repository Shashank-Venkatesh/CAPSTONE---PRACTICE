import React, { useState } from 'react';
import FocusTime from "./Components/Time/FocusTime";
import ShortBreak from "./Components/Time/ShortBreak";
import LongBreak from "./Components/Time/LongBreak";
import TimeControls from "./Components/Settings/TimeControls";
import Settings from "./Components/Settings/Settings";

const App = () => {
  const [mode, setMode] = useState('focus'); // Modes: focus, shortBreak, longBreak
  const [isActive, setIsActive] = useState(false);
  const [durations, setDuration] = useState({
    focus: 25,
    shortBreak: 5,
    longBreak: 15
  });

  const toggleTimer = () => setIsActive(!isActive);

  const handleComplete = () => {
    setIsActive(false);
    if (mode === 'focus') setMode('shortBreak');
    else if (mode === 'shortBreak') setMode('longBreak');
    else setMode('focus');
  };

  const updateDurations = (newDurations) => {
    setIsActive(false); // 🔁 Reset timer on settings change
    setDuration(newDurations);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>FocusTroop Pomodoro</h1>

      {mode === 'focus' && (
        <FocusTime
          duration={durations.focus}
          isActive={isActive}
          onComplete={handleComplete}
        />
      )}

      {mode === 'shortBreak' && (
        <ShortBreak
          duration={durations.shortBreak}
          isActive={isActive}
          onComplete={handleComplete}
        />
      )}

      {mode === 'longBreak' && (
        <LongBreak
          duration={durations.longBreak}
          isActive={isActive}
          onComplete={handleComplete}
        />
      )}

      <TimeControls isActive={isActive} toggleTimer={toggleTimer} />
      <Settings updateDurations={updateDurations} />
    </div>
  );
};

export default App;

import "./App.css"
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
  const [focusStreak, setFocusStreak] = useState(0);
  const [cycleCount, setCycleCount] = useState(0);

  const playSound = () => {
    const audio = new Audio('../Public/Notification/notification.mp3');
    audio.play();
  };

  const handleComplete = () => {
    playSound();
    setIsActive(false);

    if (mode === 'focus') {
      const updatedStreak = focusStreak + 1;
      setFocusStreak(updatedStreak);
      const updatedCycle = cycleCount + 1;
      setCycleCount(updatedCycle);

      if (updatedCycle % 4 === 0) {
        setMode('longBreak');
      } else {
        setMode('shortBreak');
      }
    } else {
      setMode('focus');
    }
  };

  const updateDurations = (newDurations) => {
    setIsActive(false);
    setDuration(newDurations);
  };

  const handleGiveUp = () => {
    setIsActive(false);
    setFocusStreak(0);
    setCycleCount(0);
  };

  return (
    <div className="app-container">
      <h1>FocusTroop Pomodoro</h1>
      <p>Focus 🔥: {focusStreak}</p>

      {mode === 'focus' && (
        <FocusTime
          duration={durations.focus}
          isActive={isActive}
          onComplete={handleComplete}
          onGiveUp={handleGiveUp}
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

      <TimeControls isActive={isActive} toggleTimer={() => setIsActive(true)} />
      <Settings updateDurations={updateDurations} />
    </div>
  );
};

export default App;

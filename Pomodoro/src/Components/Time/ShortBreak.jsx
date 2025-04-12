import React, { useEffect, useState } from 'react';
import '../Styles/ShortBreak.css';

const ShortBreak = ({ duration = 5, isActive, onComplete }) => {
  const [secondsLeft, setSecondsLeft] = useState(duration * 60);

  useEffect(() => {
    setSecondsLeft(duration * 60);
  }, [duration]);

  useEffect(() => {
    let timer;
    if (isActive && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isActive) {
      onComplete();
    }
    return () => clearInterval(timer);
  }, [isActive, secondsLeft, onComplete]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className="short-break-container">
      <h2>Short Break</h2>
      <div className="timer">{formatTime(secondsLeft)}</div>
    </div>
  );
};

export default ShortBreak;

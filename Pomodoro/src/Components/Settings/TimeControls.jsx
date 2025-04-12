import React from 'react';

const TimeControls = ({ isActive, toggleTimer }) => {
  return (
    <div className="time-controls">
      <button className="start-button" onClick={toggleTimer}>
        {isActive ? 'Timer Active' : 'Start Timer'}
      </button>
    </div>
  );
};

export default TimeControls;

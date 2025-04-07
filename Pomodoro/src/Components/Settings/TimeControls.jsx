import React from 'react';
import '../Styles/TimeControls.css';

const TimeControls = ({ isActive, toggleTimer }) => {
  return (
    <div className="controls-container">
      <button className="control-btn" onClick={toggleTimer}>
        {isActive ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default TimeControls;

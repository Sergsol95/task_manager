import React from 'react';
import './Task.css';

const Task = ({ title, description }) => {
  return (
    <div className="task-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Task;

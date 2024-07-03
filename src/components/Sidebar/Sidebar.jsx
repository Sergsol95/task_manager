import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>Tasks</li>
        <li>Dashboard</li>
        <li>Projects</li>
        <li>Calendar</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
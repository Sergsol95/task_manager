import React from 'react';
import './styles.css';

const Sidebar = () => (
    <div className="sidebar">
        <div className="logo">Task Tracker</div>
        <nav>
            <ul>
                <li>Dashboard</li>
                <li>Task</li>
                <li>Messages</li>
                <li>Projects</li>
                <li>Settings</li>
            </ul>
        </nav>
        <button className="logout">Log Out</button>
    </div>
);

export default Sidebar;

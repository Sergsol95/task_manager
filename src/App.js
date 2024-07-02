import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Task from './components/Task';
import './styles.css';

const App = () => (
    <div className="app">
        <Sidebar />
        <div className="main-content">
            <Header />
            <div className="dashboard">
                <Task />
            </div>
        </div>
    </div>
);

export default App;
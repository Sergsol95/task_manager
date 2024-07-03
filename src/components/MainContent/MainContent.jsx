import React from 'react';
import './MainContent.css';
import Task from '../Task/Task';

const MainContent = () => {
  return (
    <main className="main-content">
      <section>
        <h2>My Tasks</h2>
        <Task title="Task 1" description="Description for Task " />
        <Task title="Task 2" description="Description for Task " />
        <Task title="Task 3" description="Description for Task " />
      </section>
    </main>
  );
};

export default MainContent;
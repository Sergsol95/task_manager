import React from 'react';
import './styles.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';

const App = () => {
  return (
<div>
    <div className='content'>
    <Sidebar />
      <div className='main'>
      <Header />
        <MainContent />
        </div>
      </div>
</div>
  );
};

export default App;
import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import styled from 'styled-components';
import './styles.css';

const AppContainer = styled.div`
  display: flex;
  width: 100%;
`;

const App = () => {
  return (
    <div>
      <Header />
      <AppContainer>
        <Sidebar />
        <MainContent />
      </AppContainer>
    </div>
  );
};

export default App;
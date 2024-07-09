import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
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
    <ThemeProvider theme={theme}>
      <Header />
      <AppContainer>
        <Sidebar />
        <MainContent />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
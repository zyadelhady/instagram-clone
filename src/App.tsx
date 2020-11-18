import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styled-components/theme';
import { GlobalStyle } from './styled-components/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App"></div>;
    </ThemeProvider>
  );
}

export default App;

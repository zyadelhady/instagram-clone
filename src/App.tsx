import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './styled-components/theme';
import { GlobalStyle } from './styled-components/GlobalStyle';
import { Layout } from './hoc/Layout/Layout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout></Layout>
    </ThemeProvider>
  );
}

export default App;

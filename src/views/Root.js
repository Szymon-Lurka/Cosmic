import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../themes/GlobalStyles';
import { theme } from '../themes/theme';
import App from '../components/pages/App';

function Root() {
  return (
    <div className="Root">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </div>
  );
}

export default Root;

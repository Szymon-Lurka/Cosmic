import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../themes/GlobalStyles';
import { theme } from '../themes/theme';
import App from '../components/pages/App';
import background from '../assets/img/background.png';

function Root() {
  return (
    <div className="Root">
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </div>
  );
}

export default Root;

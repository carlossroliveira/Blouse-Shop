// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { App } from './App';
import { ThemeProvider } from './context/themes/ContextTheme';
import { AuthProvider } from './context/AuthProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

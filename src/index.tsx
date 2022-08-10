// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import ReactDOM from 'react-dom';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { App } from './App';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { AuthProvider } from './context/AuthProvider';
import { ThemeProvider } from './context/themes/ContextTheme';

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

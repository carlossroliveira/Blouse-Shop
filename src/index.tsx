// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { createRoot } from 'react-dom/client';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { App } from './App';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { AuthProvider } from './context/AuthProvider';
import { ThemeProvider } from './context/themes/ContextTheme';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
);

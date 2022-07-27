// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Routes
// -------------------------------------------------
import { RoutesComponent } from './routes';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { useMyHook } from './context/themes/ContextTheme';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { AuthProvider } from './context/AuthProvider';

export const App = (): JSX.Element => {
  const { themes } = useMyHook();

  return (
    <ThemeProvider theme={themes}>
      <AuthProvider>
        <GlobalStyle />
        <RoutesComponent />
      </AuthProvider>
    </ThemeProvider>
  );
};

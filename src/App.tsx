// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { RoutesComponent } from './routes';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/GlobalStyles';
import { useTheme } from './hooks/useTheme';
import { AuthProvider } from './context/AuthProvider';

export const App = (): JSX.Element => {
  const { themes } = useTheme();

  return (
    <ThemeProvider theme={themes}>
      <AuthProvider>
        <GlobalStyle />
        <RoutesComponent />
      </AuthProvider>
    </ThemeProvider>
  );
};

// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import { ThemeProvider } from 'styled-components';
// -------------------------------------------------
// Components
// -------------------------------------------------
/* import { RoutesComponent } from './routes'; */
// -------------------------------------------------
// Context
// -------------------------------------------------
import { useTheme } from './hooks/useTheme';
import { AuthProvider } from './context/AuthProvider';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { GlobalStyle } from './styles/GlobalStyles';
import { Input } from './components/Input';

export const App = (): JSX.Element => {
  const { themes } = useTheme();

  return (
    <ThemeProvider theme={themes}>
      <AuthProvider>
        <GlobalStyle />
        <Input />
        {/* <RoutesComponent /> */}
      </AuthProvider>
    </ThemeProvider>
  );
};

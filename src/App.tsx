// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
// -------------------------------------------------
// Routes
// -------------------------------------------------
import { RoutesComponent } from './routes';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Box, Switch, ThemeProvider } from '@mui/material';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { AuthProvider } from './context/AuthProvider';
// -------------------------------------------------
// Hook
// -------------------------------------------------
import { useTheme } from './hooks/useTheme';

export const App = (): JSX.Element => {
  const { handleThemes, themeMode } = useTheme();

  return (
    <ThemeProvider theme={themeMode}>
      <AuthProvider>
        <RoutesComponent />
        <Switch onChange={handleThemes} />
        <Box bgcolor={themeMode.palette.primary.main}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor ipsam
          adipisci et eaque, nostrum officia soluta, ex atque totam nam facilis,
          corrupti ab at veniam deleniti! Dolor ad ipsum atque.
        </Box>
      </AuthProvider>
    </ThemeProvider>
  );
};

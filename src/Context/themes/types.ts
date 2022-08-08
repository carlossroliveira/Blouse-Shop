// -------------------------------------------------
// Packages
// -------------------------------------------------
import { Theme } from '@mui/material';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { ReactNode } from 'react';

export interface IThemeContext {
  themeMode: Theme;
  handleThemes: () => void;
}

export interface IThemeProvider {
  children: ReactNode | JSX.Element;
}

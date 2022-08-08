// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { createContext, useState } from 'react';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import { themeDark, themeLight } from '../../styles/themes';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IThemeContext, IThemeProvider } from './types';

export const ThemeContext = createContext({} as IThemeContext);

export const ThemeProvider = ({ children }: IThemeProvider): JSX.Element => {
  const [themeMode, setThemeMode] = useState(themeDark);

  const handleThemes = () =>
    themeMode.palette.mode === 'dark'
      ? setThemeMode(themeLight)
      : setThemeMode(themeDark);

  return (
    <ThemeContext.Provider value={{ handleThemes, themeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

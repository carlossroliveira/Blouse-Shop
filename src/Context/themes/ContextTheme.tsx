// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { createContext, useState } from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { ITheme, IContextProvider, IThemeProvider } from './types';

export const ContextProvider = createContext({} as IContextProvider);

export const ThemeProvider = ({ children }: IThemeProvider): JSX.Element => {
  const [themes, setThemes] = useState<ITheme>(dark);

  const handleThemes = () =>
    themes.title === 'dark' ? setThemes(light) : setThemes(dark);

  return (
    <ContextProvider.Provider value={{ handleThemes, themes }}>
      {children}
    </ContextProvider.Provider>
  );
};

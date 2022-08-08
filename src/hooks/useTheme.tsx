// -------------------------------------------------
// Packages
// -------------------------------------------------
import { useContext } from 'react';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { ThemeContext } from '../context/themes/ContextTheme';
// -------------------------------------------------
// Types
// -------------------------------------------------
import { IThemeContext } from '../context/themes/types';

export const useTheme = (): IThemeContext => {
  const context = useContext(ThemeContext);

  return context;
};

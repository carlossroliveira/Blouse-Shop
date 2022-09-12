// -------------------------------------------------
// Packages
// -------------------------------------------------
import { ReactNode } from 'react';
// -------------------------------------------------
// Types
// -------------------------------------------------

export interface IContextProvider {
  themes: ITheme;
  handleThemes: () => void;
}
export interface ITheme {
  title: string;

  fontFamily: {
    fontDefault: string;
  };
  color: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    quinary: string;
  };
  background: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  boxShadow: {
    primary: string;
    secondary: string;
  };
}

export interface IThemeProvider {
  children: ReactNode | JSX.Element;
}

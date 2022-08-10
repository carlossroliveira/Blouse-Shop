/* eslint-disable react/display-name */
// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { ComponentType } from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { ThemeProvider } from 'styled-components';
// -------------------------------------------------
// Context
// -------------------------------------------------
import { AuthProvider } from '../context/AuthProvider';
// -------------------------------------------------
// Styles
// -------------------------------------------------
import dark from '../styles/themes/dark';

function WithThemeComponent<T>(Component: ComponentType<T>) {
  return (props: T): JSX.Element => {
    return (
      <ThemeProvider theme={dark}>
        <AuthProvider>
          <Component {...(props as T)} />
        </AuthProvider>
      </ThemeProvider>
    );
  };
}
export default WithThemeComponent;

/* eslint-disable react/display-name */
// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { ComponentType } from 'react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import dark from '../styles/themes/dark';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from '../context/AuthProvider';

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

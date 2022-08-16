/* eslint-disable react/display-name */
// -------------------------------------------------
// Packages
// -------------------------------------------------
import React, { ComponentType } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
          <BrowserRouter>
            <Component {...(props as T)} />
          </BrowserRouter>
        </AuthProvider>
      </ThemeProvider>
    );
  };
}
export default WithThemeComponent;

// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Login } from '../../pages/Login';

// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../../utils/withThemeComponent';

const LoginWithTheme = WithThemeComponent(Login);

describe('Login Testing', () => {
  it('Should...', () => {
    render(<LoginWithTheme />);

    screen.debug();
  });
});

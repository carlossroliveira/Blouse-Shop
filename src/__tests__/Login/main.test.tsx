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

describe('Testing error login', () => {
  it('Should render the title correctly', () => {
    render(<LoginWithTheme />);

    expect(
      screen.getByRole('heading', {
        name: /faça seu login/i,
      }),
    ).toBeInTheDocument();
  });

  it('Should render the title is composed correctly', () => {
    render(<LoginWithTheme />);

    expect(screen.getByRole('textbox')).toBeInTheDocument();

    expect(screen.getByText(/email/i)).toBeInTheDocument();
  });

  it('Should render login button correctly', () => {
    render(<LoginWithTheme />);

    expect(
      screen.getByRole('button', {
        name: /google/i,
      }),
    ).toBeInTheDocument();
  });

  it('Should render author text correctly', () => {
    render(<LoginWithTheme />);

    expect(screen.getByText(/© 2022 \| carlos oliveira/i)).toBeInTheDocument();
  });

  it('Should render the image description correctly', () => {
    render(<LoginWithTheme />);

    expect(
      screen.getByRole('img', {
        name: /background image/i,
      }),
    ).toBeInTheDocument();
  });

  it('component rendering matches snapshot correctly', () => {
    render(<LoginWithTheme />);
    expect(render(<LoginWithTheme />)).toMatchSnapshot();
  });
});

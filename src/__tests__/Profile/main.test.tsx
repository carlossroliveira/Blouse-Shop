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
import { Profile } from '../../pages/Profile';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../../utils/withThemeComponent';

const LoginWithTheme = WithThemeComponent(Profile);

describe('Testing error profile', () => {
  it('Should render the title correctly', () => {
    render(<LoginWithTheme />);

    expect(
      screen.getByRole('heading', {
        name: /blouse/i,
      }),
    ).toBeInTheDocument();
  });

  it('Should render the buttons correctly', () => {
    render(<LoginWithTheme />);

    expect(
      screen.getByRole('button', {
        name: /lista/i,
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /sair/i,
      }),
    ).toBeInTheDocument();
  });

  it('Should render author text correctly', () => {
    render(<LoginWithTheme />);

    expect(screen.getByText(/© 2022 \| carlos oliveira/i)).toBeInTheDocument();
  });

  it('component rendering matches snapshot correctly', () => {
    render(<LoginWithTheme />);
    expect(render(<LoginWithTheme />)).toMatchSnapshot();
  });
});

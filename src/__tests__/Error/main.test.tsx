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
import { Error } from '../../pages/Error';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../../utils/withThemeComponent';

const LoginWithTheme = WithThemeComponent(Error);

describe('Testing error page', () => {
  it('Should render an image correctly', () => {
    render(<LoginWithTheme />);

    expect(
      screen.getByRole('img', {
        name: /image error/i,
      }),
    ).toBeInTheDocument();
  });

  it('Should render the title correctly', () => {
    render(<LoginWithTheme />);

    expect(
      screen.getByRole('heading', {
        name: /esta página não existe!/i,
      }),
    ).toBeInTheDocument();
  });

  it('Should render paragraph correctly', () => {
    render(<LoginWithTheme />);

    expect(screen.getByText(/clique no botão para volta/i)).toBeInTheDocument();
  });

  it('Should render the button correctly', () => {
    render(<LoginWithTheme />);

    expect(
      screen.getByRole('link', {
        name: /voltar/i,
      }),
    ).toBeInTheDocument();
  });

  it('Should render the list of icons correctly', () => {
    render(<LoginWithTheme />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('component rendering matches snapshot correctly', () => {
    render(<LoginWithTheme />);
    expect(render(<LoginWithTheme />)).toMatchSnapshot();
  });
});

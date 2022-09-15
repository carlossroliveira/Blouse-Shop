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
import { BuyBlouse } from '../../pages/BuyBlouse';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../../utils/withThemeComponent';

const LoginWithTheme = WithThemeComponent(BuyBlouse);

describe('Testing error buyBlouse', () => {
  it('Should render some information correctly', () => {
    render(<LoginWithTheme />);

    expect(
      screen.getByRole('img', {
        name: /camisa de time/i,
      }),
    ).toBeInTheDocument();

    expect(screen.getByText(/tamanho:/i)).toBeInTheDocument();

    expect(screen.getByText(/tercido:/i)).toBeInTheDocument();

    expect(screen.getByText(/marca:/i)).toBeInTheDocument();

    expect(screen.getByText(/descrição:/i)).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: /comprar agora/i,
      }),
    ).toBeInTheDocument();
  });

  it('component rendering matches snapshot correctly', () => {
    render(<LoginWithTheme />);
    expect(render(<LoginWithTheme />)).toMatchSnapshot();
  });
});

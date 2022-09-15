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
import { ModalComponent } from '../../components/ModalComponent';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../../utils/withThemeComponent';

const LoginWithTheme = WithThemeComponent(ModalComponent);

describe('Testing error ModalComponent', () => {
  it('Should render the button correctly', () => {
    render(<LoginWithTheme />);

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

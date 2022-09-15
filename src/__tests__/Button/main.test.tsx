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
import { Button } from '../../components/Button';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../../utils/withThemeComponent';

const LoginWithTheme = WithThemeComponent(Button);

describe('Testing error button', () => {
  it('Should render the button correctly', () => {
    render(<LoginWithTheme text={'Button'} />);

    expect(
      screen.getByRole('button', {
        name: /button/i,
      }),
    ).toBeInTheDocument();
  });

  it('component rendering matches snapshot correctly', () => {
    render(<LoginWithTheme text={'Button'} />);
    expect(render(<LoginWithTheme text={'Button'} />)).toMatchSnapshot();
  });
});

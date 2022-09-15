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
import { SocialNetworks } from '../../components/SocialNetworks';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../../utils/withThemeComponent';

const LoginWithTheme = WithThemeComponent(SocialNetworks);

describe('Testing error social networks', () => {
  it('Should render the list of icons correctly', () => {
    render(<LoginWithTheme />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('component rendering matches snapshot correctly', () => {
    render(<LoginWithTheme />);
    expect(render(<LoginWithTheme />)).toMatchSnapshot();
  });
});

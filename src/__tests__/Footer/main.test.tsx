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
import { Footer } from '../../components/Footer';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../../utils/withThemeComponent';

const LoginWithTheme = WithThemeComponent(Footer);

describe('Testing error footer', () => {
  it('Should render the text correctly', () => {
    render(<LoginWithTheme color={'black'} />);

    expect(screen.getByText(/© 2022 \| carlos oliveira/i)).toBeInTheDocument();
  });

  it('component rendering matches snapshot correctly', () => {
    render(<LoginWithTheme color={'black'} />);
    expect(render(<LoginWithTheme color={'black'} />)).toMatchSnapshot();
  });
});

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
import { Title } from '../../components/Title';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../../utils/withThemeComponent';

const LoginWithTheme = WithThemeComponent(Title);

describe('Testing error Title', () => {
  it('Should render the title correctly', () => {
    render(<LoginWithTheme title={'Testing'} />);

    expect(
      screen.getByRole('heading', {
        name: /testing/i,
      }),
    ).toBeInTheDocument();
  });

  it('component rendering matches snapshot correctly', () => {
    render(<LoginWithTheme title={'Testing'} />);
    expect(render(<LoginWithTheme title={'Testing'} />)).toMatchSnapshot();
  });
});

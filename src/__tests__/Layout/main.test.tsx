// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';

import 'jest-styled-components';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Layout } from '../../components/Layout';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../../utils/withThemeComponent';

const LayoutWithTheme = WithThemeComponent(Layout);

describe('Layout Testing', () => {
  it('Should...', () => {
    render(<LayoutWithTheme />);
  });
});

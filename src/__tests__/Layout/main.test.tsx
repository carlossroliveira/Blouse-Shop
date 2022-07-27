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
import { Protected } from '../../components/Protected';
// -------------------------------------------------
// Utils
// -------------------------------------------------
import WithThemeComponent from '../../utils/withThemeComponent';

const LayoutWithTheme = WithThemeComponent(Protected);

describe('Layout Testing', () => {
  it('Should...', () => {
    render(<LayoutWithTheme />);
  });
});

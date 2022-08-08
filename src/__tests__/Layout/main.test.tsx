// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Protected } from '../../components/Protected';

describe('Layout Testing', () => {
  it('Should...', () => {
    render(
      <Protected>
        <p>aaa</p>
      </Protected>,
    );
  });
});

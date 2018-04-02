import * as React from 'react';
import { render } from 'react-dom';

import { NotFound } from '.';

describe('<NotFound>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    render(<NotFound />, div);
  });
});

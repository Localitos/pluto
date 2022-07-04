import React from 'react';
import { render } from '@testing-library/react';
import { Sample } from './Sample';

describe('<Sample />', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Sample />);
  });
});

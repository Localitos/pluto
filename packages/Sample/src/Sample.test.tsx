import React from 'react';
import { render, screen } from '@testing-library/react';
import { Sample } from './Sample';

describe('<Sample />', () => {
  it('renders correctly', () => {
    render(<Sample label="my label" />);

    expect(screen.getByText('my label')).toBeInTheDocument();
  });
});

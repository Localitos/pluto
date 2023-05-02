import { render, screen } from '@testing-library/react';
import React from 'react';
import { Pagination } from './Pagination';

describe('<Pagination />', () => {
  it('renders correctly', () => {
    render(<Pagination />);
  });
});

import { render, screen } from '@testing-library/react';
import Music from './js/Music';

test('renders music', () => {
  render(<Music />);
  const linkElement = screen.getByText(/Music/i);
  expect(linkElement).toBeInTheDocument();
});
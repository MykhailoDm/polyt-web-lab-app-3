import { render, screen } from '@testing-library/react';
import Register from './js/Register';

test('renders register', () => {
  render(<Register />);
  const linkElement = screen.getByText(/Register/i);
  expect(linkElement).toBeInTheDocument();
});
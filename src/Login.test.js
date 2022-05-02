import { render, screen } from '@testing-library/react';
import Login from './js/Login';

test('renders login', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
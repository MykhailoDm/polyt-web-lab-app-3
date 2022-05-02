import { render, screen } from '@testing-library/react';
import App from './App';

test('Welcome to playlist King should be displayed', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcom to playlist King/i);
  expect(linkElement).toBeInTheDocument();
});
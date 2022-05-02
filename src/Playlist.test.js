import { render, screen } from '@testing-library/react';
import Playlists from './js/Playlists';

test('renders playlist', () => {
  render(<Playlists />);
  const linkElement = screen.getByText(/Playlist/i);
  expect(linkElement).toBeInTheDocument();
});
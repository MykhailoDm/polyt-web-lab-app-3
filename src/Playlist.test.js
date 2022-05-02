import { render, screen } from '@testing-library/react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Playlists from './js/Playlists';

test('renders playlist', () => {
  render(<HashRouter>
    <Routes>
        <Route path="/" element={<Playlists basicHeader={'hgfkghfhg'}/>}/>
    </Routes>
  </HashRouter>);
  const linkElement = screen.getByText(/Playlist/i);
  expect(linkElement).toBeInTheDocument();
});
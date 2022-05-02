import { render, screen } from '@testing-library/react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Music from './js/Music';

test('renders music', () => {
  render(<HashRouter>
    <Routes>
        <Route path="/" element={<Music basicHeader={'sjdkfjls'}/>}/>
    </Routes>
  </HashRouter>);
  const linkElement = screen.getByText(/Music/i);
  expect(linkElement).toBeInTheDocument();
});
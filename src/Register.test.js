import { render, screen } from '@testing-library/react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Register from './js/Register';

test('renders email', () => {
  render(<HashRouter>
    <Routes>
        <Route path="/" element={<Register />}/>
    </Routes>
  </HashRouter>);
  const linkElement = screen.getByText(/Email/i);
  expect(linkElement).toBeInTheDocument();
});
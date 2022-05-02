import { render, screen } from '@testing-library/react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Login from './js/Login';

test('renders login', () => {
  render(<HashRouter>
    <Routes>
      <Route path="/" element={<Login headerFunc={(name, password) => setNameAndPassword(name, password)} />}/>
    </Routes>
  </HashRouter>);
  const linkElement = screen.getByText(/Name/i);
  expect(linkElement).toBeInTheDocument();
});
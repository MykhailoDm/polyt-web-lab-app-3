import { render, screen } from '@testing-library/react';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Index from './js/Index';

test('renders music', () => {
  render(<HashRouter>
    <Routes>
        <Route exact path="/" element={<Index />}/>
    </Routes>
  </HashRouter>);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
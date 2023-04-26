import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Union Mate', () => {
  render(<App />);
  const linkElement = screen.getByText(/Union Mate/);
  expect(linkElement).toBeInTheDocument();
});
